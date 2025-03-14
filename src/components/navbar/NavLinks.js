import React from 'react';
import { Link } from 'react-router-dom';
import {FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
        <li onClick={handleNav} ><Link  to="//instagram.com/ashish_110411" target='_blank' className='nav-link'><FaInstagram /></Link></li>
        <li onClick={handleNav} ><Link  to="//www.linkedin.com/in/ashish110411" target='_blank' className='nav-link'><FaLinkedin /></Link></li>
        <li onClick={handleNav} ><Link  to="//github.com/Ashish110411" target='_blank' className='nav-link'><BsGithub /></Link></li>
        <li onClick={handleNav} ><a  href="mailto:ashishchaudhary110411@gmail.com" target='_blank' className='nav-link' rel="noreferrer"><BiEnvelope /></a></li>
  </ul>
  )
};

export default NavLinks;
