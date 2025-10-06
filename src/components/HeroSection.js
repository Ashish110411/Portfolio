import React, { useState, useEffect, useCallback, useRef } from "react";
import "../styles/HeroSection.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import CV_SDE from "../data/resume_sde.pdf";
import CV_ML from "../data/resume_mlds.pdf";
import CV_GameDev from "../data/resume_gd.pdf";

const HeroSection = ({ nav, handleNav }) => {
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState("");
    const [showCVMenu, setShowCVMenu] = useState(false);
    const cvMenuRef = useRef(null);
    const words = [ "Full-Stack Developer", "ML Enthusiast", "Game Developer", "Data Science Enthusiast", "Video Editor" ];
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const cvOptions = [
        { label: "Software Development Engineer", file: CV_SDE, filename: "Ashish_Choudhary_SDE_Resume" },
        { label: "ML and Data Science", file: CV_ML, filename: "Ashish_Choudhary_ML_Resume" },
        { label: "Game Development", file: CV_GameDev, filename: "Ashish_Choudhary_GameDev_Resume" }
    ];

    const scrollToTop = useCallback(() => {
        scroll.scrollToTop({
            smooth: "easeInOutQuint",
            duration: 1000
        });
    }, []);

    const toggleVisible = useCallback(() => {
        const scrolled = document.documentElement.scrollTop;
        setVisible(scrolled > 300);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
        return () => window.removeEventListener("scroll", toggleVisible);
    }, [toggleVisible]);

    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 50 : (charIndex === words[wordIndex].length ? 2000 : typingSpeed);

        const timeout = setTimeout(() => {
            if (!isDeleting && charIndex < words[wordIndex].length) {
                setText(words[wordIndex].substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setText(words[wordIndex].substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            } else if (!isDeleting && charIndex === words[wordIndex].length) {
                setIsDeleting(true);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setWordIndex(prev => (prev + 1) % words.length);
            }
        }, pauseTime);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex, words]);

    // Close CV menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cvMenuRef.current && !cvMenuRef.current.contains(event.target)) {
                setShowCVMenu(false);
            }
        };

        if (showCVMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showCVMenu]);

    const handleCVButtonClick = (e) => {
        e.preventDefault();
        setShowCVMenu(!showCVMenu);
    };

    const handleCVDownload = (file, filename) => {
        const link = document.createElement('a');
        link.href = file;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowCVMenu(false);
    };

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

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 1
            }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        },
        tap: {
            scale: 0.95
        }
    };

    const iconVariants = {
        hidden: { opacity: 0, rotate: -360 },
        visible: {
            opacity: 1,
            rotate: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            rotate: 360,
            scale: 1.1,
            transition: { duration: 0.3 }
        }
    };

    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -10,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <div className='hero-section' name='home' id='home'>
            <div className='hero-overlay'></div>

            <motion.div
                variants={iconVariants}
                initial='hidden'
                animate='visible'
                whileHover='hover'
                onClick={handleNav}
                className='menu-icon'
            >
                {nav ? <FaTimes /> : <FaBars />}
            </motion.div>

            <motion.div
                variants={iconVariants}
                initial='hidden'
                animate={visible ? 'visible' : 'hidden'}
                whileHover='hover'
                className={`to-top-icon ${visible ? 'show' : ''}`}
                onClick={scrollToTop}
            >
                <AiOutlineArrowUp />
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                className='hero-content'
            >
                <motion.p variants={itemVariants} className='hero-intro'>
                    <span>Ashish Choudhary</span>
                </motion.p>

                <motion.p variants={itemVariants} className='hero-desc'>
                    I'm a <span className='hero-desc-sub'>{text}</span>
                </motion.p>
            </motion.div>

            <div className='cv-download-container' ref={cvMenuRef}>
                <motion.button
                    onClick={handleCVButtonClick}
                    className='hero-contact'
                    variants={buttonVariants}
                    initial='hidden'
                    animate='visible'
                    whileHover='hover'
                    whileTap='tap'
                >
                    Download CV <BiDownload className='cv-icon' />
                </motion.button>

                <AnimatePresence>
                    {showCVMenu && (
                        <motion.div
                            className='cv-dropdown-menu'
                            variants={dropdownVariants}
                            initial='hidden'
                            animate='visible'
                            exit='exit'
                        >
                            {cvOptions.map((option, index) => (
                                <motion.button
                                    key={index}
                                    className='cv-dropdown-item'
                                    onClick={() => handleCVDownload(option.file, option.filename)}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <BiDownload className='cv-dropdown-icon' />
                                    <span>{option.label}</span>
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default HeroSection;