import React from 'react'
import ExperienceCard from './ExperienceCard'

const Experiece = () => {
  return (
    <>
        <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <h1 className='text-3xl font-bold'>Experience</h1>
            <span className='font-semibold underline'>Currently expertise on</span>
            <div className='grid grid-cols-2 md:grid-cols-5 my-5 gap-2'>
                {ExperienceCard.map(({id,logo,name})=>(
                    <>
                    <div key={id}className="md:w-[200px] h-[200px] flex flex-col space-y-2 items-center justify-center rounded-full cursor-pointer p-3 hover:scale-110 hover:shadow-lg duration-100">
                    <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full" alt="image" />
                    <div className='font-bold text-lg text-violet-800'>{name}</div>
                    </div>
                    
                    </>
                    
                ))}
            </div>
        </div>
    </>
  )
}

export default Experiece;