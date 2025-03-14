import React, { useState, useEffect } from "react";
import "../styles/HeroSection.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import CV from "../data/Ashish_1003.pdf";

const HeroSection = ({ nav, handleNav }) => {
	const scrollToTop = () => {
		scroll.scrollToTop({ smooth: "linear" });
	};

	const [visible, setVisible] = useState(false);
	const [text, setText] = useState("");
	const words = ["Game Developer.", "Data Analyst.", "Video Editor.", "Software Developer."];
	const [wordIndex, setWordIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", toggleVisible);
		return () => window.removeEventListener("scroll", toggleVisible);
	}, []);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (!isDeleting) {
				setText(words[wordIndex].substring(0, charIndex + 1));
				setCharIndex(charIndex + 1);
				if (charIndex + 1 === words[wordIndex].length) {
					setTimeout(() => setIsDeleting(true), 1000);
				}
			} else {
				setText(words[wordIndex].substring(0, charIndex - 1));
				setCharIndex(charIndex - 1);
				if (charIndex === 0) {
					setIsDeleting(false);
					setWordIndex((wordIndex + 1) % words.length);
				}
			}
		}, isDeleting ? 50 : 100);
		return () => clearTimeout(timeout);
	}, [charIndex, isDeleting, wordIndex]);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		setVisible(scrolled > 300);
	};

	const heroVariants = {
		hidden: { opacity: 0, y: "-50%" },
		visible: { opacity: 1, y: 0, transition: { duration: 1.4 } },
	};

	const contactVariants = {
		hidden: { opacity: 0, x: "-50%" },
		visible: { opacity: 1, x: 0, transition: { duration: 1.4 } },
	};

	const menuVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			scale: [1, 1.2, 1.5, 1.2, 1],
			rotate: [0, 0, 360, 360, 360],
			borderRadius: ["50%", "50%", "50%", "50%", "50%"],
			transition: { duration: 1 },
		},
	};

	return (
		<div className='hero-section' name='home' id='home'>
			<div className='hero-overlay'></div>
			<motion.div variants={menuVariants} initial='hidden' whileInView='visible' onClick={handleNav} className='menu-icon'>
				{nav ? <FaTimes /> : <FaBars />}
			</motion.div>
			<motion.div variants={heroVariants} initial='hidden' whileInView='visible' className={visible ? "to-top-icon show" : "to-top-icon hide"} onClick={scrollToTop}>
				<AiOutlineArrowUp />
			</motion.div>
			<motion.div variants={heroVariants} initial='hidden' whileInView='visible' className='hero-content'>
				<p className='hero-intro'>
					<span>Ashish</span> <span>Choudhary.</span>
				</p>
				<p className='hero-desc'>
					I'm a <span className='hero-desc-sub'>{text}</span>
				</p>
			</motion.div>
			<motion.span variants={contactVariants} initial='hidden' whileInView='visible'>
				<a href={CV} download='Ashish_Resume' className='hero-contact'>
					Download CV <BiDownload className='cv-icon' />
				</a>
			</motion.span>
		</div>
	);
};

export default HeroSection;
