import React from "react";
import "../styles/About.css";
import { motion } from "framer-motion";
import ProfileImg from "../images/profile_me.jpg";

const About = () => {
    const fadeInLeft = {
        hidden: { x: "-100%", opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: "spring", duration: 2, bounce: 0.3 } },
    };

    const fadeInRight = {
        hidden: { x: "50%", opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: "spring", duration: 2, bounce: 0.3 } },
    };

    return (
        <div className="about" id="about">
            <div className="container">
                {/* Heading Section */}
                <motion.div initial="hidden" whileInView="visible" variants={fadeInLeft} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className="heading-text">About Me</p>
                </motion.div>

                <div className="split-about">
                    {/* Text Content */}
                    <motion.div initial="hidden" whileInView="visible" variants={fadeInLeft} className="about-content">
                        <p>
                            I am Ashish Choudhary, a pre-final year B.Tech student in Computer Science and Engineering. As a passionate game developer and data science enthusiast, I thrive at the intersection of creativity and technology. Proficient in Java, Python, and database management, I tackle complex software development challenges.
                        </p>
                        <br />
                        <p>
                            Beyond coding, I am an experienced video editor, graphic designer, and 3D modeler. These skills enable me to blend aesthetics with functionality, creating engaging and visually appealing projects. My game development work reflects this fusion, striving for immersive and interactive experiences.
                        </p>
                        <br />
                        <p>
                            Throughout my academic and professional journey, I have consistently demonstrated a problem-solving mindset, strong work ethic, and the ability to collaborate effectively in teams. As the Creative Director of Enactus-KIIT, I have honed my leadership skills, guiding teams to achieve shared goals.
                        </p>
                        <br />
                        <p>
                            As I progress, I aim to deepen my expertise in game development and data science, striving to make a meaningful impact in these fields. I look forward to connecting with like-minded professionals and exploring opportunities to apply my skills and passion to innovative projects.
                        </p>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div initial="hidden" whileInView="visible" variants={fadeInRight} className="about-img">
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
