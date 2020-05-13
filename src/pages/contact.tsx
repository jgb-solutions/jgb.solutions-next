import React from "react"
import { useForm } from 'react-hook-form'
import { MdInfoOutline, MdSend, MdCheck } from 'react-icons/md'

import SEO from "../components/SEO"
import MainLayout from '../components/layouts/Main'
import Input from "../components/Input"
import { ContactFormData } from "./api/send-mail"

const title = "Contact US"
const seoDescription = `(formerly JGB Neat Design) was started by Jean Gérard Bousiquot in early 2013 as a way to
        freelance professionally. As the time passes he got more clients,
        ranging from entrepreneurs amd small enterprises to medium ones in Haiti and abroad.`

export default function Contact() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [emailSent, setEmailSent] = React.useState(false)
  const [errorSending, setErrorSending] = React.useState(false)

  const {
    register,
    handleSubmit,
    errors,
    formState,
    reset
  } = useForm<ContactFormData>({ mode: 'onBlur' })

  const resetForm = () => {
    reset()
    setEmailSent(false)
    setIsLoading(false)
    setErrorSending(false)
  }

  const handleSendEmail = async (values: ContactFormData) => {
    setIsLoading(true)
    setErrorSending(false)

    try {
      await fetch(
        '/api/send-mail', {
        method: 'POST',
        body: JSON.stringify(values)
      })

      setIsLoading(false)
      setEmailSent(true)
    } catch (e) {
      setIsLoading(false)
      setErrorSending(true)
    }
  }


  return (
    <MainLayout>
      <SEO
        title={title}
        url="/contact"
        description={seoDescription}
      />

      <div className="mb-4 flex items-center justify-center">
        <h1 className="text-4xl sm:text-5xl m-0 uppercase flex items-center">
          <MdInfoOutline fontSize="inherit" /> <span className="ml-2">{title}</span>
        </h1>
      </div>

      {emailSent ? (
        <>
          <div className="mb-4 text-center py-64 flex flex-col items-center justify-center">
            <h3 className="text-lg mb-4 uppercase flex items-center text-green-500">
              <MdCheck fontSize="inherit" /> <span className="ml-2">Email sent successfully!</span>
            </h3>
            <button
              onClick={resetForm}
              className="bg-green-500 text-white text-lg px-4 py-3 rounded-large text-black font-bold uppercase focus:outline-none focus:shadow-outline flex items-center"
              disabled={formState.isSubmitting || isLoading}
            >
              <MdSend fontSize="inherit" /> <span className="ml-2">Send Again</span>
            </button>
          </div>
        </>
      ) : (
          <>
            <h4 className="text-center mb-8 text-xs">
              Please fill this form and we will get back to you as soon as possible. <br />
        Fields marked with <b>*</b> are required.
        </h4>
            {errorSending && (
              <h4 className="text-center mb-8 text-red-500">
                There was an error sending the email. Please Try again.
              </h4>
            )}

            <div className="mb-12 w-full max-w-lg mx-auto bg-white p-4 rounded-large shadow-xl">
              <form method="POST" onSubmit={handleSubmit(handleSendEmail)}>
                <Input
                  type="text"
                  name="name"
                  inputRef={register({
                    required: "The name is required.",
                  })}
                  label="Your Name <b>*</b>"
                  placeholder="Enter Your Full Name"
                  error={!!errors.name}
                  errorText={!!errors.name && errors.name.message}
                />

                <Input
                  type="email"
                  name="email"
                  inputRef={register}
                  label="Your Email"
                  placeholder="Enter Your Email"
                // error={!!errors.name}
                // errorText={!!errors.name && errors.name.message}
                />

                <Input
                  type="url"
                  name="website"
                  inputRef={register}
                  label="Your Website"
                  placeholder="Enter Your Website"
                // error={!!errors.name}
                // errorText={!!errors.name && errors.name.message}
                />
                <Input
                  type="text"
                  name="subject"
                  inputRef={register({
                    required: "The subject is required.",
                    minLength: {
                      value: 15,
                      message: `The subject must be at least 15 characters.`
                    }
                  })}
                  label="The Subject <b>*</b>"
                  placeholder="Enter The Subject"
                  error={!!errors.subject}
                  errorText={!!errors.subject && errors.subject.message}
                />

                <div className="mb-6">
                  <label
                    className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
                    htmlFor="message">
                    Your Message <b>*</b>
                  </label>

                  <textarea
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded-large py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${!!errors.message ? 'border-red-500' : ''}`}
                    placeholder="Enter Your Message"
                    name="message"
                    ref={register({
                      required: "The message is required.",
                      minLength: {
                        value: 30,
                        message: `The detail must be at least 30 characters.`
                      }
                    })}
                  />
                  {!!errors.message && (
                    <p className={`text-red-500 text-xs italic`}>{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-orange text-lg px-4 py-3 rounded-large text-black font-bold uppercase focus:outline-none focus:shadow-outline flex items-center"
                  disabled={formState.isSubmitting || isLoading}
                >
                  <MdSend fontSize="inherit" /> <span className="ml-2">{isLoading ? 'Sending...' : 'Send'}</span>
                </button>
              </form>
            </div>
          </>
        )
      }
    </MainLayout >
  )
}