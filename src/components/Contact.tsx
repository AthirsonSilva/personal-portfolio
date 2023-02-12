import * as EmailValidator from 'email-validator'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TrackVisibility from 'react-on-screen'
import contactImg from '../assets/img/contact-img.svg'

export const Contact = () => {
	const formInitialDetails = {
		ownerRef: '',
		fromEmail: '',
		bodyEmail: ''
	}
	const [formDetails, setFormDetails] = React.useState(formInitialDetails)
	const [buttonText, setButtonText] = React.useState('Send Message')
	const [status, setStatus] = React.useState({
		success: false,
		message: ''
	})

	const validateEmail = () => {
		return EmailValidator.validate(formDetails.fromEmail)
	}

	const validateOwnerRef = () => {
		if (formDetails.ownerRef.length > 20) {
			return false
		} else if (
			formDetails.ownerRef.length < 2 ||
			formDetails.ownerRef.length > 20
		) {
			return false
		}

		return true
	}

	const validateEmailBody = () => {
		return !(
			formDetails.bodyEmail.length < 10 || formDetails.bodyEmail.length > 500
		)
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		setButtonText('Sending...')

		if (!validateEmail()) {
			setStatus({
				success: false,
				message: 'Please enter a valid email address!'
			})

			setButtonText('Send Message Again')
			return false
		}

		if (!validateOwnerRef()) {
			setStatus({
				success: false,
				message: 'The message must be between 10 and 500 characters!'
			})

			setButtonText('Send Message Again')
			return false
		}

		if (!validateEmailBody()) {
			setStatus({
				success: false,
				message: 'The message must be between 10 and 500 characters!'
			})

			setButtonText('Send Message Again')
			return false
		}

		let response = await fetch(
			'https://prtfolio-mailer.herokuapp.com/api/v1/email/',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formDetails)
			}
		)

		setButtonText('Send Message')

		if (response.status === 201 || response.status === 200) {
			setFormDetails(formInitialDetails)
			setStatus({
				success: true,
				message: 'Message Sent Successfully!'
			})
		} else {
			setStatus({
				success: false,
				message: 'Something went wrong!'
			})
		}
	}

	const onFormUpdate = (key: string, value: string) => {
		setFormDetails({ ...formDetails, [key]: value })
	}

	return (
		<section className='contact' id='connect'>
			<Container>
				<Row className='align-items-center'>
					<Col size={12} md={6}>
						<TrackVisibility>
							{({ isVisible }) => (
								<img
									className={
										isVisible ? 'animate__animated animate__zoomIn' : ''
									}
									src={contactImg}
									alt='Contact Us'
								/>
							)}
						</TrackVisibility>
					</Col>
					<Col size={12} md={6}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? 'animate__animated animate__fadeIn' : ''
									}
								>
									<h2>Get in Touch</h2>
									<form onSubmit={handleSubmit}>
										<Row>
											<Col size={11} sm={6} className='px-1'>
												<input
													type='text'
													value={formDetails.ownerRef}
													placeholder='Your name'
													onChange={(e) =>
														onFormUpdate('ownerRef', e.target.value)
													}
													required
												/>
											</Col>
											<Col size={10} sm={6} className='px-1'>
												<input
													type='email'
													value={formDetails.fromEmail}
													placeholder='Email Address'
													onChange={(e) =>
														onFormUpdate('fromEmail', e.target.value)
													}
													required
												/>
											</Col>
											<Col>
												<textarea
													rows={6}
													value={formDetails.bodyEmail}
													placeholder='Message'
													onChange={(e) =>
														onFormUpdate('bodyEmail', e.target.value)
													}
													style={{
														width: '100%'
													}}
													required
												></textarea>
												<br></br>
												<button type='submit'>
													<span>{buttonText}</span>
												</button>
											</Col>
											{status.message && (
												<p
													className={
														status.success === true ? 'success' : 'danger'
													}
													style={{
														marginTop: '1.2rem',
														fontWeight: 'bolder',
														fontSize: '1.6rem'
													}}
												>
													{status.message}
												</p>
											)}
										</Row>
									</form>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	)
}
