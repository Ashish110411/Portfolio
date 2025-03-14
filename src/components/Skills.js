import React from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";
import { SkillsData } from "../data/SkillsData";

const Skills = () => {
	const skillEffect = {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

	return (
		<>
			<div className="skills" id="skills">
				<div className="container">
					{/* Heading Animation */}
					<motion.div
						whileInView={skillEffect}
						initial={{ y: "-80px", opacity: 0 }}
						className="heading">
						<p className="heading-sub-text">What I work with</p>
						<p className="heading-text">My Skills</p>
					</motion.div>

					{/* Looping through categories */}
					{SkillsData.map((category, index) => (
						<div key={index}>
							{/* Category Name with Animation */}
							<motion.h2
								whileInView={skillEffect}
								initial={{ y: "-50px", opacity: 0 }}
								className="category-title">
								{category.category}
							</motion.h2>

							{/* Skills Grid */}
							<motion.div
								whileInView={skillEffect}
								className="skills-box"
								initial={{ y: "-80px", opacity: 0 }}>
								{category.skills.map((el, idx) => (
									<div className="skill-card" key={idx}>
										<div className="skill-icon">{el.icon}</div>
										<small className="skill-desc">{el.name}</small>
									</div>
								))}
							</motion.div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Skills;
