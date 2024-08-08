"use client"
import React, { useState } from 'react'
import Link from "next/link"
import NavLink from './NavLink'
import {Menu, X} from "lucide-react"
import MenuOverlay from './MenuOverlay'
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const navLinks = [
    {
        title: "Home",
        path: "#home"
    },
    {
        title: "Work",
        path: "#work"
    },
    {
        title: "About",
        path: "#about"
    },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-90 backdrop-blur-sm lg:px-24 md:px-14 px-1'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-6'>
            <Link href={'/'} className='bg-gradient-to-r from-purple-600 to-pink-700 bg-clip-text text-transparent font-bold text-3xl font-sacramento'>EmreGol</Link>
            <div className="mobile-menu block md:hidden">
                {
                    !navbarOpen ? (
                        <button onClick={()=>setNavbarOpen(true)} className='flex items-center px-3 py-2  text-white'>
                            <Menu className='h-5 w-5' />
                        </button>
                    ) : (
                        <button onClick={()=>setNavbarOpen(false)} className='flex items-center px-3 py-2 text-white'>
                            <X className='h-5 w-5' />
                        </button>
                    )
                }
            </div>
            <div className="menu hidden md:block md:w=auto" id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="left-1 md:left-5 text-white absolute flex flex-col space-y-2 items-center justify-center">
                <div className="h-52 w-[0.5px] bg-white"></div>
                <div className="">
                    <Link href="https://www.linkedin.com/in/faruk-emre-g%C3%B6l-a48a5a226/"><FaLinkedin size={24} color="white" /></Link>
                </div>
                <div className="">
                    <Link href="https://github.com/EmreGol"><FaGithub size={24} color="white" /></Link>
                </div>
            </div>
        </div>
        <div className='md:hidden'>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null} 
        </div>
    </nav>
  )
}

export default Navbar