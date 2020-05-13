import React from "react"
import { useForm } from 'react-hook-form'
import { MdInfoOutline, MdSend } from 'react-icons/md'

import SEO from "../components/SEO"
import MainLayout from '../components/layouts/Main'
import Logo from "../components/Logo"
import Input from "../components/Input"
import { ContactFormData } from "./api/send-mail"

const title = "Contact US"
const seoDescription = `(formerly JGB Neat Design) was started by Jean Gérard Bousiquot in early 2013 as a way to
        freelance professionally. As the time passes he got more clients,
        ranging from entrepreneurs amd small enterprises to medium ones in Haiti and abroad.`

const handleSendEmail = (values: ContactFormData) => {
  console.table(values)
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    errors,
    formState
  } = useForm<ContactFormData>({ mode: 'onBlur' })

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

      <h4 className="text-center mb-8 text-xs">
        Please fill this form and we will get back to you as soon as possible. <br />
        Fields marked with <b>*</b> are required.
        </h4>

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
            type="text"
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
              })}
            />
            {!!errors.message && (
              <p className={`text-red-500 text-xs italic`}>{errors.message.message}</p>
            )}
          </div>

          <button type="submit" className="bg-orange text-lg px-4 py-3 rounded-large text-black font-bold uppercase focus:outline-none focus:shadow-outline flex items-center">
            <MdSend fontSize="inherit" /> <span className="ml-2">Send</span>
          </button>
        </form>
      </div>
    </MainLayout>
  )
}