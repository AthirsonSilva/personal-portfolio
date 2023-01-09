import * as EmailValidator from 'email-validator'
import { phone } from 'phone'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TrackVisibility from 'react-on-screen'
import contactImg from '../assets/img/contact-img.svg'

export const Contact = () => {
	const formInitialDetails = {
		firstName: '',
		lastName: '',
		email: '',
		message: '',
		phone: ''
	}

	const validatePhone = () => {
		const userPhone = phone(formDetails.phone)

		if (!userPhone.isValid) {
			return false
		}

		return true
	}

	const validateEmail = () => {
		if (!EmailValidator.validate(formDetails.email)) {
			return false
		}

		return true
	}

	const validateNames = () => {
		if (
			formDetails.firstName.length < 2 ||
			formDetails.lastName.length > 20
		) {
			return false
		} else if (
			formDetails.lastName.length < 2 ||
			formDetails.lastName.length > 20
		) {
			return false
		}

		return true
	}

	const validateMessage = () => {
		if (
			formDetails.message.length < 10 ||
			formDetails.message.length > 500
		) {
			return false
		}

		return true
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setButtonText('Sending...')

		if (!validateEmail()) {
			setStatus({
				success: false,
				message: 'Please enter a valid phone number'
			})

			setButtonText('Send Message Again')
			return false
		}

		if (!validatePhone()) {
			setStatus({
				success: false,
				message: 'Please enter a valid phone number'
			})

			setButtonText('Send Message Again')
			return false
		}

		if (!validateNames()) {
			setStatus({
				success: false,
				message: 'The message must be between 10 and 500 characters!'
			})

			setButtonText('Send Message Again')
			return false
		}

		if (!validateMessage()) {
			setStatus({
				success: false,
				message: 'The message must be between 10 and 500 characters!'
			})

			setButtonText('Send Message Again')
			return false
		}

		let response = await fetch(
			'https://prtfolio-mailer.herokuapp.com/contact',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formDetails)
			}
		)

		setButtonText('Send Message')

		let result = await response.json()

		if (result.code === 200) {
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

	const [formDetails, setFormDetails] = React.useState(formInitialDetails)
	const [buttonText, setButtonText] = React.useState('Send Message')
	const [status, setStatus] = React.useState({})

	const onFormUpdate = (key, value) => {
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
										isVisible
											? 'animate__animated animate__zoomIn'
											: ''
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
										isVisible
											? 'animate__animated animate__fadeIn'
											: ''
									}
								>
									<h2>Get in Touch</h2>
									<form onSubmit={handleSubmit}>
										<Row>
											<Col
												size={12}
												sm={6}
												className='px-1'
											>
												<input
													type='text'
													value={
														formDetails.firstName
													}
													placeholder='First Name'
													onChange={(e) =>
														onFormUpdate(
															'firstName',
															e.target.value
														)
													}
													required
												/>
											</Col>
											<Col
												size={12}
												sm={6}
												className='px-1'
											>
												<input
													type='text'
													value={formDetails.lastName}
													placeholder='Last Name'
													onChange={(e) =>
														onFormUpdate(
															'lastName',
															e.target.value
														)
													}
													required
												/>
											</Col>
											<Col
												size={12}
												sm={6}
												className='px-1'
											>
												<input
													type='email'
													value={formDetails.email}
													placeholder='Email Address'
													onChange={(e) =>
														onFormUpdate(
															'email',
															e.target.value
														)
													}
													required
												/>
											</Col>
											<Col
												size={12}
												sm={6}
												className='px-1'
											>
												<input
													type='phone'
													value={formDetails.phone}
													placeholder='Phone Number'
													onChange={(e) =>
														onFormUpdate(
															'phone',
															e.target.value
														)
													}
													required
												/>
											</Col>
											<Col>
												<textarea
													row='6'
													value={formDetails.message}
													placeholder='Message'
													onChange={(e) =>
														onFormUpdate(
															'message',
															e.target.value
														)
													}
													required
												></textarea>
												<button type='submit'>
													<span>{buttonText}</span>
												</button>
											</Col>
											{status.message && (
												<p
													className={
														status.success === true
															? 'success'
															: 'danger'
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
