import React, { useState } from "react";
import "../styles/About.css";
import { motion } from "framer-motion";
import profilePic from "../images/profile_me.jpg";

const About = ({
	name = "Ashish Choudhary",
	about = "Director-Creative, Enactus KIIT University",
	aboutParagraph1 = "I’m a final-year B.Tech Computer Science student with a solid foundation in programming, algorithms, and system design. I’ve built projects in web development, machine learning, and game development, combining practical skills with problem-solving. I’m especially interested in full-stack development and scalable tech solutions, and I’m eager to keep learning and contribute to impactful projects.",
	aboutParagraph2 = "I'm deeply passionate about Data Science and Machine Learning, with hands-on experience in data analysis, model building, and predictive analytics. I enjoy uncovering insights from data and applying ML algorithms to solve real-world problems. From cleaning datasets to fine-tuning models, I find every step of the ML pipeline engaging and impactful. I'm constantly exploring new tools and techniques to expand my knowledge and stay updated in this fast-evolving field.",
	aboutParagraph3 = "I'm a passionate game developer who enjoys creating interactive and immersive experiences using code. I’ve explored game development through projects involving 2D and 3D games, focusing on gameplay mechanics, design, and performance optimization. Whether working with engines like Unity or experimenting with custom game logic, I love bringing ideas to life and constantly improving my skills in both design and programming.",
	aboutParagraph4 = "As the Creative Director of my university's social-entrepreneurship society, ENACTUS, I’ve led multiple design and branding initiatives, gaining hands-on experience in video editing, graphic design (GD), and creative storytelling. I’ve managed teams for event promotions, content creation, and multimedia campaigns, ensuring consistent quality and innovation across all platforms. This role has helped me sharpen my leadership, communication, and time-management skills while collaborating with diverse teams to bring creative ideas to life and successfully execute high-impact student events.",
	professionalStats = [ {
  "number" : "8+",
  "label" : "CGPA"
}, {
  "number" : "15+",
  "label" : "Projects Completed"
} ]
}) => {
	const [imageLoaded, setImageLoaded] = useState(false);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2
			}
		}
	};

	const fadeInUp = {
		hidden: {
			y: 60,
			opacity: 0
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut"
			}
		}
	};

	const fadeInLeft = {
		hidden: {
			x: -80,
			opacity: 0
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut"
			}
		}
	};

	const fadeInRight = {
		hidden: {
			x: 80,
			opacity: 0
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut"
			}
		}
	};

	const imageVariants = {
		hidden: {
			scale: 0.8,
			opacity: 0
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 1,
				ease: "easeOut"
			}
		}
	};

	const stats = professionalStats;

	return (
		<section className="about" id="about">
			<div className="container">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="about-wrapper"
				>
					{/* Section Header */}
					<motion.div variants={fadeInUp} className="heading">
						<span className="heading-sub-text">Get to know me</span>
						<h2 className="heading-text">About Me</h2>
						<div className="heading-divider"></div>
					</motion.div>

					{/* Main Content */}
					<div className="split-about">
						<motion.div
							variants={fadeInLeft}
							className="about-content"
						>
							<div className="content-text">
								<p className="intro-text">
									Hello! I'm <span className="highlight">{name}</span>
								</p>
								{aboutParagraph1 && <p>{aboutParagraph1}</p>}
								{aboutParagraph2 && <p>{aboutParagraph2}</p>}
								{aboutParagraph3 && <p>{aboutParagraph3}</p>}
								{aboutParagraph4 && <p>{aboutParagraph4}</p>}
							</div>
						</motion.div>

						<motion.div
							variants={fadeInRight}
							className="about-visual"
						>
							{/* Profile Image */}
							<div className="image-container">
								<motion.div
									variants={imageVariants}
									className="about-img"
								>
									<img
										src={profilePic}
										alt={`${name} - ${about}`}
										onLoad={() => setImageLoaded(true)}
										className={imageLoaded ? 'loaded' : ''}
									/>
									<div className="image-overlay"></div>
								</motion.div>
							</div>

							{/* Stats Section */}
							<div className="stats-container">
								{stats.map((stat, index) => (
									<motion.div
										key={stat.label}
										className="stat-item"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1, duration: 0.6 }}
										viewport={{ once: true }}
										whileHover={{ scale: 1.05 }}
									>
										<div className="stat-number">{stat.number}</div>
										<div className="stat-label">{stat.label}</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;