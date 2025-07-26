import React, { useState } from "react";
import "../styles/Education.css";
import { motion } from "framer-motion";
import { FiBookOpen, FiAward, FiCalendar, FiMapPin, FiStar, FiBriefcase } from "react-icons/fi";

// Template placeholders for dynamic data
const educationData = {
	education: [
		{
			"degree": "Bachelors of Technology, CSE",
			"institution": "KIIT University",
			"year": "2026"
		},
		{
			"degree": "CBSE 12 PCM with Computer Science",
			"institution": "Sun Valley International School",
			"year": "2022"
		},
		{
			"degree": "CBSE 10",
			"institution": "Sun Valley International School",
			"year": "2020"
		}
	],
	workExperience: [],
	certifications: [
		{
			"title": "GFG - Complete Data Science and Machine Learning",
			"institution": "Geeks for Geeks",
			"year": "Ongoing"
		},
		{
			"title": "Build a Face Recognition Application using Python",
			"institution": "Guvi",
			"year": "May 2021"
		},
		{
			"title": "Produced a winning video for the most-viewed in Enactus India National Exposition 23’",
			"institution": "Enactus India",
			"year": "Jul 2023"
		},
		{
			"title": "Part of the team that won Enactus India National Exposition 24’ Early Stage",
			"institution": "Enactus India",
			"year": "Jul 2024"
		},
		{
			"title": "Data Structures Algorithm DSA in Python + JavaScript LEETCODE",
			"institution": "Udemy",
			"year": "Apr 2025"
		},
		{
			"title": "British Airways Data Science Job Simulation",
			"institution": "Forage",
			"year": "Apr 2025"
		},
		{
			"title": "Health Systems Development: Health systems, Policy and Research",
			"institution": "Coursera",
			"year": "Apr 2025"
		},
		{
			"title": "Health Systems Development: Introduction to Health Systems",
			"institution": "Coursera",
			"year": "Apr 2025"
		},
		{
			"title": "Build Profitable E-Commerce Stores with WordPress & Woostify",
			"institution": "Udemy",
			"year": "May 2025"
		},
		{
			"title": "GfG 160 - 160 Days of DSA (With Summer Workshops)",
			"institution": "Geeks For Geeks",
			"year": "May 2025"
		},
		{
			"title": "Deloitte Australia Data Analytics Job Simulation",
			"institution": "Forage",
			"year": "May 25"
		},
		{
			"title": "JavaScript Fundamentals to Advanced: Full Stack Development",
			"institution": "Udemy",
			"year": "Jun 2025"
		},
		{
			"title": "Python Software, Application, Games, Automation Development",
			"institution": "Udemy",
			"year": "Jun 2025"
		}
	]
};

const Education = () => {
	// Check if work experience and certifications have data
	const hasWorkExperience = educationData.workExperience && educationData.workExperience.length > 0;
	const hasCertifications = educationData.certifications && educationData.certifications.length > 0;

	// Set default active tab based on available data
	const getDefaultTab = () => {
		if (educationData.education && educationData.education.length > 0) return "education";
		if (hasWorkExperience) return "workExperience";
		if (hasCertifications) return "certifications";
		return "education";
	};

	const [activeTab, setActiveTab] = useState(getDefaultTab());

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2
			}
		}
	};

	const headingVariants = {
		hidden: { y: -30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.6, ease: "easeOut" }
		}
	};

	const cardVariants = {
		hidden: { y: 20, opacity: 0, scale: 0.9 },
		visible: {
			y: 0,
			opacity: 1,
			scale: 1,
			transition: { duration: 0.4, ease: "easeOut" }
		}
	};

	const tabVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.5, ease: "easeOut" }
		}
	};

	const contentVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" }
		}
	};

	// Function to format description with line breaks
	const formatDescription = (text) => {
		if (!text) return null;

		// Split by double line breaks for paragraphs, single line breaks for lines
		const paragraphs = text.split('\n\n');

		return (
			<div>
				{paragraphs.map((paragraph, index) => (
					<p key={index}>
						{paragraph.split('\n').map((line, lineIndex) => (
							<React.Fragment key={lineIndex}>
								{line}
								{lineIndex < paragraph.split('\n').length - 1 && <br />}
							</React.Fragment>
						))}
					</p>
				))}
			</div>
		);
	};

	const renderEducationCard = (item, index, type) => (
		<motion.div
			key={`${type}-${index}`}
			variants={cardVariants}
			className="education-card"
			whileHover={{
				y: -8,
				scale: 1.02,
				transition: { duration: 0.3 }
			}}
			whileTap={{ scale: 0.98 }}
		>
			<div className="education-container">
				{/* Card Header */}
				<div className="education-card-header">
					<span className={`education-type-badge ${type}`}>
						{type === 'education' ? ' Education' :
						 type === 'workExperience' ? ' Work Experience' :
						 ' Certification'}
					</span>
				</div>

				{/* Title and Institution Row */}
				<div className="education-title-row">
					<h3 className="education-title">
						{item.degree || item.title || item.position}
					</h3>
					<p className="education-institution">
						{item.institution || item.company}
					</p>
				</div>

				{/* Card Content */}
				<div className="card-content">
					{item.description && (
						<div className="education-desc-container">
							<div className="education-desc">
								{formatDescription(item.description)}
							</div>
						</div>
					)}

					{/* Details */}
					{(item.duration || item.location || item.gpa || item.grade) && (
						<div className="education-details">
							{item.duration && (
								<div className="detail-item">
									<FiCalendar className="detail-icon" />
									<span>{item.duration}</span>
								</div>
							)}
							{item.location && (
								<div className="detail-item">
									<FiMapPin className="detail-icon" />
									<span>{item.location}</span>
								</div>
							)}
							{item.gpa && (
								<div className="detail-item">
									<FiStar className="detail-icon" />
									<span className="value-label">GPA:</span>
									<span className="value-amount">{item.gpa}</span>
								</div>
							)}
							{item.grade && (
								<div className="detail-item">
									<FiStar className="detail-icon" />
									<span className="value-label">Grade:</span>
									<span className="value-amount">{item.grade}</span>
								</div>
							)}
						</div>
					)}
				</div>

				{/* Card Footer */}
				<div className="card-footer">
					{/* Subjects/Skills */}
					{item.subjects && Array.isArray(item.subjects) && item.subjects.length > 0 && (
						<div className="education-subjects">
							<div className="education-subjects-label">
								{type === 'education' ? 'Key Subjects' : 'Skills Covered'}
							</div>
							<div className="education-tags">
								{item.subjects.map((subject, i) => (
									<span key={i} className="education-tag">{subject}</span>
								))}
							</div>
						</div>
					)}

					{/* Skills for certifications */}
					{item.skills && Array.isArray(item.skills) && item.skills.length > 0 && (
						<div className="education-subjects">
							<div className="education-subjects-label">Skills</div>
							<div className="education-tags">
								{item.skills.map((skill, i) => (
									<span key={i} className="education-tag">{skill}</span>
								))}
							</div>
						</div>
					)}

					{/* Footer Bottom */}
					<div className="footer-bottom">
						{item.year && (
							<div className="education-year">
								{item.year}
							</div>
						)}

						{/* Status Badge for certifications */}
						{item.status && (
							<div className={`status-badge ${item.status.toLowerCase().replace(' ', '-')}`}>
								{item.status}
							</div>
						)}
					</div>
				</div>
			</div>
		</motion.div>
	);

	// Dynamic section title based on available tabs
	const getSectionTitle = () => {
		if (hasWorkExperience && hasCertifications) {
			return "Education, Experience & Certifications";
		} else if (hasWorkExperience) {
			return "Education & Experience";
		} else if (hasCertifications) {
			return "Education & Certifications";
		} else {
			return "Education";
		}
	};

	const getSubTitle = () => {
		if (hasWorkExperience || hasCertifications) {
			return "Professional Journey";
		} else {
			return "Academic Journey";
		}
	};

	return (
		<section className="education-section" id="education">
			<div className="container">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					{/* Section Header */}
					<motion.div variants={headingVariants} className="heading">
						<span className="heading-sub-text">{getSubTitle()}</span>
						<h2 className="heading-text">{getSectionTitle()}</h2>
						<div className="heading-divider"></div>
					</motion.div>

					{/* Tab Buttons - Only show if there are multiple tabs */}
					{((educationData.education && educationData.education.length > 0) +
					  (hasWorkExperience ? 1 : 0) +
					  (hasCertifications ? 1 : 0)) > 1 && (
						<motion.div variants={tabVariants} className="tabs-container">
							<div className="tab-buttons">
								{educationData.education && educationData.education.length > 0 && (
									<button
										className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
										onClick={() => setActiveTab("education")}
									>
										<FiBookOpen className="tab-btn-icon" />
										<span className="tab-btn-label">Education</span>
									</button>
								)}
								{hasWorkExperience && (
									<button
										className={`tab-btn ${activeTab === "workExperience" ? "active" : ""}`}
										onClick={() => setActiveTab("workExperience")}
									>
										<FiBriefcase className="tab-btn-icon" />
										<span className="tab-btn-label">Experience</span>
									</button>
								)}
								{hasCertifications && (
									<button
										className={`tab-btn ${activeTab === "certifications" ? "active" : ""}`}
										onClick={() => setActiveTab("certifications")}
									>
										<FiAward className="tab-btn-icon" />
										<span className="tab-btn-label">Certifications</span>
									</button>
								)}
							</div>
						</motion.div>
					)}

					{/* Tab Content */}
					<motion.div
						key={activeTab}
						variants={contentVariants}
						initial="hidden"
						animate="visible"
						className="education-content"
					>
						<div className="education-box">
							{activeTab === "education" &&
								educationData.education &&
								educationData.education.map((edu, index) =>
									renderEducationCard(edu, index, "education")
								)
							}

							{activeTab === "workExperience" &&
								hasWorkExperience &&
								educationData.workExperience.map((work, index) =>
									renderEducationCard(work, index, "workExperience")
								)
							}

							{activeTab === "certifications" &&
								hasCertifications &&
								educationData.certifications.map((cert, index) =>
									renderEducationCard(cert, index, "certifications")
								)
							}
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Education;