import React from 'react'
import CardItem from "../components/CardItem"
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  return (
    <>
        <div name= "Portfolio"className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <h1 className='text-3xl font-bold'>Portfolio</h1>
            <span className='font-semibold underline'>Featured Technologies</span>
            <div className='grid grid-cols-1 md:grid-cols-4 my-5 gap-2 '>
                {CardItem.map(({id,logo,name})=>(
                    <>
                    <div key={id}className="md:w-[300px] h-[300px] border-[2px] rounded-lg cursor-pointer p-3 hover:scale-110 duration-100 hover:bg-slate-50">
                    <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt="image" />
                    <div className='font-bold text-lg'>{name}</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolorem.</p>
                    <div className='flex justify-between my-1 mt-4'>
                        <button className='bg-violet-800 text-slate-50 py-1 px-4 rounded-md'>Video</button>
                        <button className='flex justify-between space-x-2 px-4 bg-violet-800 text-slate-50 py-1 rounded-md'><span>See More</span> <span className='py-1'><FaArrowRight /></span></button>
                    </div>
                    </div>
                    
                    </>
                    
                ))}
            </div>
        </div>
    </>
  )
}

export default Portfolio