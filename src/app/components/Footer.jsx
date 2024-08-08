import React from 'react'
import Link from "next/link"
import { Instagram, Twitter, Mail, Linkedin } from 'lucide-react';


const Footer = () => {
  return (
    <div className='text-white py-[80px] lg:px-[112px] px-[30px] sm:px-[60px] md:px-[90px] text-center'>
        <div className="text-2xl md:text-3xl lg:text-4xl">
            <span className='font-thin'>Get {" "}</span>
            <span className='font-semibold'>in Touch</span>
            <span className='font-thin block mt-2 text-[18px]'>So that we can talk more about...</span>
        </div>
        <div className="flex mt-[60px] justify-center space-x-[56px] text-neutral-500">
            <Link href={"mailto:emregold_46@hotmail.com"}>
                <Mail size={24} className="" />
            </Link>
            <Link href={"instagram.com"}>
                <Twitter  size={24} className="" />
            </Link>
            <Link href={"instagram.com"}>
                <Instagram size={24} className="" />
            </Link>
            <Link href={"instagram.com"}>
                <Linkedin  size={24} className="" />
            </Link>
        </div>
    </div>
  )
}

export default Footer