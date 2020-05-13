import nodemailer from "nodemailer"
import { NextApiRequest, NextApiResponse } from "next"

import { APP_NAME, SITE_EMAIL } from "../../utils/constants"

export interface ContactFormData {
	name: string
	email?: string
	website?: string
	subject: string
	message: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const data = JSON.parse(req.body)

	if (req.method === "POST") {
		res.setHeader("Content-Type", "application/json")

		try {
			await sendEmail(data)

			res.statusCode = 200
			res.json({ success: true })
		} catch (error) {
			console.log("error", error)
			res.statusCode = 500
			res.json({ success: false })
		}
	}

	res.statusCode = 403
	res.end("Only POST requests are supported.")
}

const sendEmail = async ({
	name,
	email,
	subject,
	message,
}: ContactFormData) => {
	const emailMessage = `
    ${name} wrote: \n
    ${message}
  `
	const transport = nodemailer.createTransport({
		host: "smtp.hostinger.com",
		port: 465,
		secure: true,
		auth: {
			user: SITE_EMAIL,
			pass: process.env.SMTP_PASSWORD,
		},
	})

	await transport.sendMail({
		from: {
			name: APP_NAME,
			address: SITE_EMAIL,
		},
		to: {
			name: APP_NAME,
			address: SITE_EMAIL,
		},
		replyTo: {
			name,
			address: email || "Empty email",
		},
		subject: `Mail from JGB Solutions: ${subject}`,
		text: emailMessage,
		html: emailMessage,
	})
}
