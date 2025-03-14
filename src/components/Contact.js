import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Contact.css";

const Contact = () => {
	const fade = {
		opacity: 1,
		transition: {
			duration: 1.5,
		},
	};

	const verticalLeft = {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.5,
		},
	};

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		toast.success("Thanks for your message! I'll get back to you soon.", {
			position: "top-left",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
		setFormData({ name: "", email: "", message: "" });
		setIsSubmitting(false);
	};

	return (
		<>
			<div className='contact' id='contact'>
				<div className='container'>
					<motion.div
						className='heading'
						initial={{ opacity: 0 }}
						whileInView={fade}
						viewport={{ once: true }}>
						<p className='heading-sub-text'>Hire Me</p>
						<p className='heading-text'>Get in Touch</p>
					</motion.div>
					<div className='contact-box'>
						<motion.div
							className='left-box'
							initial={{ opacity: 0, y: "-50px" }}
							whileInView={verticalLeft}>
							<div className='contact-heading'>
								<p>
									I’m interested in freelance opportunities – especially
									ambitious or large projects. However, if you have other
									requests or questions, don’t hesitate to use the form.
								</p>
							</div>
							<div className='contact-hello'>
								<p>Say Hello</p>
								<Link className='hello-links' to='//wa.me/+918076276624' target='_blank'>
									Whatsapp Me
								</Link>
								<a className='hello-links' href='mailto:ashishchaudhary110411@gmail.com' target='_blank' rel='noreferrer'>
									ashishchaudhary110411@gmail.com
								</a>
								<a className='hello-links' href='mailto:22052716@kiit.ac.in' target='_blank' rel='noreferrer'>
									22052716@kiit.ac.in
								</a>
							</div>
						</motion.div>
						<motion.div
							className='right-box'
							initial={{ opacity: 0, y: "50px" }}
							whileInView={verticalLeft}>
							<form onSubmit={handleSubmit}>
								<div className='form-top'>
									<div className='name'>
										<label htmlFor='name'>Your Name</label>
										<input
											type='text'
											name='name'
											id='name'
											value={formData.name}
											onChange={handleChange}
											placeholder='Enter your name'
											required
										/>
									</div>
									<div className='email'>
										<label htmlFor='email'>Your Email</label>
										<input
											type='email'
											name='email'
											id='email'
											value={formData.email}
											onChange={handleChange}
											placeholder='Enter your email address'
											required
										/>
									</div>
								</div>
								<div className='form-mid'>
									<div className='message'>
										<label htmlFor='message'>Your message</label>
										<textarea
											type='text'
											name='message'
											id='message'
											value={formData.message}
											onChange={handleChange}
											placeholder='Write your message here'
											required></textarea>
									</div>
								</div>
								<div className='form-btn'>
									<button type='submit' disabled={isSubmitting} className='hero-contact'>
										{isSubmitting ? "Sending..." : "Send Message"}
									</button>
								</div>
							</form>
						</motion.div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default Contact;