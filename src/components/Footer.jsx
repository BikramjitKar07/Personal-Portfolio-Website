import React from 'react'
import { FaBehanceSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
        <hr />
        <footer name="Footer" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-2 py-12 flex flex-col md:flex-row justify-between'>
            <div >
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex space-x-2'>
                    <FaBehanceSquare className='text-3xl'/>
                    <FaGithub className='text-3xl'/>
                    <FaLinkedin className='text-3xl'/>
                    <BsInstagram className='text-3xl'/> 
                    </div>
                    <div className='mt-8 border-t border-gray-700 pt-4 flex flex-col items-center'>
                        <p>
                            &copy; 2024 Bikramjit Kar, Copyright All Reserved
                        </p>
                        <p className="inline-block bg-violet-600 px-2 py-1 text-slate-50 rounded-md my-2">UI/UX Designer</p>
                        <p className="inline-block bg-cyan-400 px-2 py-1 text-slate-50 rounded-md my-2">Gain a reliable tech Partner</p>
                        <p>West Bengal, Kolkata-700154</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-xl font-bold'>Company</h1>
                <ul className='flex flex-col justify-center items-center'>
                    <li>home</li>
                    <li>about</li>
                    <li>portfolio</li>
                    <li>Experience</li>
                    <li>Hire me</li>
                </ul>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-xl font-bold'>Get In Touch</h1>
                <ul className='flex flex-col justify-center items-center'>
                    <li>bikramjitk07@gmail.com</li>
                    <li>bikramjitkar12345678@gmail.com</li>
                    <li>Chat on 9073314085</li>
                </ul>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-xl font-bold'>Location</h1>
                <ul className='flex flex-col justify-center items-center'>
                    <li>Garia</li>
                    <li>Boral</li>
                    <li>Kolkata-700154</li>
                    <li>Call +9073314085</li>
                </ul>
            </div>
        </footer>
    </>
  )
}

export default Footer