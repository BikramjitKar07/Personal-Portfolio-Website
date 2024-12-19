import React, { useState } from 'react'
import Bil from '/Bikram.png'
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import NavItems from "../components/NavItems";
import {Link} from 'react-scroll';
const Navbar = () => {
    const [menu, setMenu]=useState(false); //for mobile  navbar dynamic hambargar icon purpose

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 bg-slate-50 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-10">
        <div className='flex justify-between items-center'>
            <div className="flex space-x-2">
                <img src={Bil} className="h-12 w-12 rounded-full my-2" alt="logo" />
                <h1 className="font-semibold text-xl cursor-pointer">Port<span className="text-red-700 text-3xl">Folio.</span>
                <p className='text-sm text-violet-800'>UI/UX Designer</p> </h1>
            </div>
            {/* desktop navbar */}
            <div>
                <ul className='hidden md:flex space-x-8'>
                    {NavItems.map(({id,text})=>(           //here I destructuring the id and text from NavbarItems
                        <li key={id} className="my-1.5 hover:scale-105 duration-200 cursor-pointer"> <Link to={text} smooth={true}
                        duration={500} offset={-70} activeClass='active' >{text}</Link> </li>           //here I added key and it's value for not getting warning
                    ))}
                    <li className='hover:scale-105 duration-200 cursor-pointer'><Link to="Contact" smooth={true}
                        duration={500} offset={-70} activeClass='active' ><button className="pr-4 pl-4 pt-2 pb-2 bg-violet-800 text-slate-50 rounded-md"> Hire me</button></Link> </li>
                </ul>
                <div onClick={()=>setMenu(!menu)} className="md:hidden ">{menu?<IoCloseSharp size={24}/>:<MdOutlineMenu size={24}/>}</div> 
            </div>
        </div>
        {/* mobile navbar */}
        {menu &&(
             <div>
             <ul className='md:hidden flex flex-col bg-slate-50 h-screen items-center justify-center font-semibold text-xl'>
             {NavItems.map(({id,text})=>(           //here I destructuring the id and text from NavbarItems
                        <li key={id} className="my-1.5 hover:scale-105 duration-200 cursor-pointer"><Link onClick={()=>setMenu(!menu)} to={text} smooth={true}
                        duration={500} offset={-70} activeClass='active' >{text}</Link></li>        //here I added key and it's value for not getting warning
             ))}
             <li className='py-1.5 hover:scale-105 duration-200 cursor-pointer'><Link onClick={()=>setMenu(!menu)} to="Contact" smooth={true}
                        duration={500} offset={-70} activeClass='active' >Hire me</Link></li>
             </ul>
         </div>
        )}
       
    </div>
    </>
  )
}

export default Navbar