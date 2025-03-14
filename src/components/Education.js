import React from "react";
import "../styles/Education.css";
import { motion } from "framer-motion";

const educationData = [
    {
        year: "2022 - Present",
        degree: "B.Tech CSE",
        institution: "KIIT University, Bhubaneswar",
        description: "Pursuing B.Tech with a focus on AI, ML, and Game Development."
    },
    {
        year: "2020 - 2022",
        degree: "Senior Secondary Education",
        institution: "CBSE Board",
        description: "Completed Class 12 with Physics, Chemistry, and Mathematics."
    },
    {
        year: "2020",
        degree: "Secondary Education",
        institution: "CBSE Board",
        description: "Completed Class 10 with distinction."
    }
];

// Animation effect (same as Skills section)
const eduEffect = {
    y: 0,
    opacity: 1,
    transition: {
        duration: 0.4,
    },
};

const Education = () => {
    return (
        <section className="education-section" id="education">
            {/* Heading Animation */}
            <motion.div
                whileInView={eduEffect}
                initial={{ y: "-80px", opacity: 0 }}
                className="heading"
            >
                <p className="heading-sub-text">My Academic Journey</p>
                <p className="heading-text">Education</p>
            </motion.div>

            <div className="education-container">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        whileInView={eduEffect}
                        initial={{ y: "-50px", opacity: 0 }}
                        className="education-card"
                    >
                        <h3>{edu.degree}</h3>
                        <p className="institution">{edu.institution}</p>
                        <span className="year">{edu.year}</span>
                        <p className="description">{edu.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
