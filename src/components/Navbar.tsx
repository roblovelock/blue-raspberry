import React, {useState} from 'react';
import {FaBars, FaGithub, FaLinkedin, FaTimes} from 'react-icons/fa'
import {BsFillPersonLinesFill} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";
import Logo from 'assets/logo.svg'
import SocialNav from "./SocialNav";
import {Link} from 'react-scroll'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenuClick = () => setMenuOpen(!menuOpen)
    return (
        <div className={'fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10'}>
            <img src={Logo} alt='Blue Raspberry Consulting Limited' style={{width: '50px'}}/>

            <ul className={menuOpen ?
                'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' :
                'hidden md:flex'

            }>
                <li className='py-6 text-4xl md:text-sm'>
                    <Link to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Home </Link>
                </li>
                <li className='py-6 text-4xl md:text-sm'>
                    <Link to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>About</Link>
                </li>
                <li className='py-6 text-4xl md:text-sm'>
                    <Link to="expertise" smooth={true} duration={500}
                          onClick={() => setMenuOpen(false)}>Expertise</Link>
                </li>
                <li className='py-6 text-4xl md:text-sm'>
                    <Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Contact</Link>
                </li>
            </ul>

            <div onClick={handleMenuClick} className={menuOpen ? 'z-10' : 'md:hidden z-10'}>
                {menuOpen ? <FaTimes/> : <FaBars/>}
            </div>

            <SocialNav items={[
                {label: 'Linkedin', icon: FaLinkedin, color: '#0072b1', href: 'https://www.linkedin.com/in/robert-lovelock-58996024/'},
                {label: 'GitHub', icon: FaGithub, color: '#333', href: 'https://github.com/roblovelock/'},
                {label: 'Email', icon: HiOutlineMail, color: '#db4437', href: 'mailto:rob@blueraspberryconsulting.co.uk'},
                {label: 'Resume', icon: BsFillPersonLinesFill, color: '#565f69', href: `${process.env.PUBLIC_URL}/CV.pdf`}
            ]}/>
        </div>
    );
};

export default Navbar;