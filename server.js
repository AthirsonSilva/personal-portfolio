const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const router = express.Router()
require('dotenv').config({ path: './.env.local' })

// server used to send send emails
const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(5000, () => console.log('Server Running'))
console.log(process.env.EMAIL_ADDRESS)
console.log(process.env.EMAIL_PASSWORD)

const contactEmail = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_ADDRESS,
		pass: process.env.EMAIL_PASSWORD
	}
})

contactEmail.verify((error) => {
	if (error) {
		console.log(error)
	} else {
		console.log('Ready to Send')
	}
})

router.post('/contact', (request, response) => {
	const { name, email, phone, message } = request.body

	const mail = {
		from: name,
		to: process.env.EMAIL_ADDRESS,
		subject: 'Contact Form Submission - Portfolio',
		html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`
	}

	contactEmail.sendMail(mail, (error) => {
		if (error) {
			response.json(error)
		} else {
			response.json({ code: 200, status: 'Message Sent Successfully!' })

			console.log('Message Sent')
		}
	})
})
