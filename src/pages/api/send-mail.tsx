import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from 'nodemailer'

interface RequestBody {
  name: string
  email?: string
  website?: string
  subject: string
  message: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/json')

  try {
    await sendEmail(req.body)
    res.statusCode = 200
    res.json({ success: true })
  } catch (error) {
    console.log('error', error)
    res.statusCode = error.responsCode
    res.json({ success: false })
  }

}

const sendEmail = async (body: RequestBody) => {
  const transport = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  })

  await transport.sendMail({
    from: process.env.EMAIL,
    to: body.email || 'jgbneatdesign@gmail.com',
    subject: body.subject || `New Mail from JGB Solutions`,
    text: body.message || `Some plain text message`,
    html: body.message || `Come straight form your site`
  })
}