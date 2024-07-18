import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineWhatsapp } from "react-icons/md";

export default function Contact(){
    return <section id="co" className='flex flex-col bg-black text-white py-25 px-5'>
        
            <div className=' flex flex-col items-center  font-bold '>
            <h1 className='text-4xl border-b-4 mb- font-bold  w-[130px] py-3 border-[black]'>Contact</h1>
            <p className="py-3">if You Want  To Discuss , please contact me</p>

            <div className="flex flex-row gap-3 py-2"><p><FaPhone size={30}/></p>
            <p>+91 63839 62389</p></div>

            <div className="flex flex-row gap-3 py-3"><p><SiGmail size={30}/></p>
            <p><a href="mailto:kumardeepan791@gmail.com">kumardeepan791@gmail.com</a></p></div> 

            <div className="flex flex-row gap-3 py-3"><p><a href=" https://wa.me/916383962389"><MdOutlineWhatsapp  size={30}/></a></p>
            <p><a href="">< AiOutlineInstagram  size={30}/></a></p></div> 

            
            </div>
        
        
            </section>}