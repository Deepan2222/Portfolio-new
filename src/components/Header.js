import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){

    const [toggleMenu,setToggleMenu]=useState(false);

    return <header id='ho' className="flex justify-between px-5 py-4 bg-primary text-xl">
        <a className="font-bold text-white" href="#">DK</a>
        <nav className="hidden md:block">
        <ul className="flex text-white ">
            <li><a href="#ho">Home</a></li>
            <li><a href="#ab">About</a></li>
            <li><a href="#po">Projects</a></li>
            
            <li><a href="#re">Resume</a></li>
            <li><a href="#co">Contact</a></li>
        </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
        <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
            <li><a href="#ho">Home</a></li>
            <li><a href="#ab">About</a></li>
            <li><a href="#po">Projects</a></li>
           
            <li><a href="#re">Resume</a></li>
            <li><a href="#co">Contact</a></li>
        </ul>
        </nav>}
        <button className='block md:hidden' onClick={()=>setToggleMenu(!toggleMenu)}>
             <Bars3Icon className='text-while h-5 bg-white'/>
        </button>
    </header>
}