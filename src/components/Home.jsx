import React from 'react'
import Bil from "/Bikram.png"
import { FaBehanceSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoFigma } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { ReactTyped,Typed } from "react-typed";

const Home = () => {
    

  return (
    <>
        <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
            <div className="flex flex-col md:flex-row">
                <div className="order-2 md:w-1/2 mt-12 md:mt-24 space-y-2 md:order-1">
                    <span className="text-4xl">Hi, I'm <p className='font-4xl md:font-5xl font-extrabold'>Bikramjit Kar</p></span>
                    <div className="flex space-x-1 text-1xl md:text-xl">
                        <h1>I'm a</h1>
                        {/* <span className="text-violet-700 font-blod">UI/UX Designer</span> */}
                        <ReactTyped
                        className="text-violet-700 font-extrabold"
                        strings={["UI/UX Designer","Frontend Developer","Web Designer"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                        />
                    </div>
                    <br />
                    <p className="text-sm md:text-md text-justify">
                    Welcome to Our Website. We Offering top-notch web design and development services tailored for small and startup businesses is crucial in today's digital landscape. Integrating mobile application development further expands your reach and accessibility, enhancing the overall user experience.
                    </p>
                    <br />
                    {/* social media icons */}
                    <div className='flex flex-col items-center space-y-3 md:flex-row justify-between'>
                        <div className="space-y-2">
                        <h1 className="font-bold text-md text-center">Available on</h1>
                        <ul className="flex space-x-5">
                            <li className="text-xl md:text-3xl cursor-pointer"><a href='https://www.behance.net/'target="_blank"><FaBehanceSquare/></a></li>
                            <li className="text-xl md:text-3xl cursor-pointer"><a href="https://github.com/" target="_blank"><FaGithub/></a></li>
                            <li className="text-xl md:text-3xl cursor-pointer"><a href="https://in.linkedin.com/" target="_blank"><FaLinkedin /></a></li>
                            <li className="text-xl md:text-3xl cursor-pointer"><a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank"><BsInstagram /></a></li>
                        </ul>
                        </div>
                        <div className="space-y-2"> 
                            <h1 className="font-bold text-md text-center">Currently working on</h1>
                            <ul className="flex space-x-5">
                                <li className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]"><IoLogoFigma/></li>
                                <li className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]">< RiTailwindCssFill /></li>
                                <li className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]"><SiVite /></li>
                                <li className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]"><FaReact /></li>
                            </ul>
                        </div>
                        <div>
                        </div>
                        <div >
                            <button className='pr-4 pl-4 pt-2 pb-2 bg-violet-800 text-slate-50 rounded-md hover:scale-105 duration-200 cursor-pointer'><a href="../../public/Bikramjit_Kar_CV.pdf" download="Bikramjit_Kar_CV.pdf">Download CV</a></button>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="md:w-1/2 md:ml-48 mt-20 order-1 md:order-2 md:shadow-violet-700">
                    <img src={Bil} alt="image" className="img rounded-full  w-[400px] h-[400px]  md:h-[450px] md:w-[450px] "/>
                </div>
            </div>
        </div>
        <hr />
    </>
  )
}

export default Home