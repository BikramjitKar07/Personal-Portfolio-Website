import React from 'react'
import { IoSearchCircle } from "react-icons/io5"
import { CgIfDesign } from "react-icons/cg";
import { MdDeveloperMode } from "react-icons/md";

const About = () => {
  return (
    <>
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold'>About</h1>
        <br />
        <p className="text-sm md:text-md">We design and develop outstanding Digital products and digital first brands</p>
        <br />
        <br />
        <div className="flex flex-col space-y-10 md:flex-row md:justify-between md:space-x-10">
          <div className='items-center'>
            <br />
            <br />
            <div className='place-items-center hover:scale-105 duration-200 cursor-pointer'><IoSearchCircle  className="w-20 h-20 bg-violet-800 rounded-full text-slate-50"/></div>
            <h3 className="text-xl font-semibold text-center">Reserch</h3>
            <br />
            <p>We start by making what you need. We look at what's new and exciting in using new trends and choose exclusive service that match what you want to invest for your business or branding</p>
          </div>
          <div className='items-center'>
            <div className='place-items-center hover:scale-105 duration-200 cursor-pointer'><CgIfDesign  className="w-20 h-20 bg-violet-800 rounded-full text-slate-50"/></div>
            <h3 className="text-xl font-semibold text-center">Design</h3>
            <br />
            <p>Next, we make the step by step designs. We make them realistics and interesting for you. we make the design work properly for different section and ways that people like to approve.</p>
          </div>
          <div className='items-center'>
            <div className='place-items-center hover:scale-105 duration-200 cursor-pointer'><MdDeveloperMode  className="w-20 h-20 p-2 bg-violet-800 rounded-full text-slate-50"/></div>
            <h3 className="text-xl font-semibold text-center">Development</h3>
            <br />
            <p>After that, we turn the designsinto thigs you can use online. We use tha latest tools to make sure they work well and make you and your business happy</p>
          </div>
        </div>
        
    </div>
    </>
  )
}

export default About