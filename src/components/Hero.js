import HeroImg from '../assets/pro_pic-1.png';
import { SiGmail,SiLeetcode} from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import { AiOutlineLinkedin ,AiOutlineInstagram,AiOutlineGithub  } from "react-icons/ai";



export default function Hero(){
   return <section id="ho" className='flex  flex-col md:flex-row px-5 py-32 bg-black justify-center '>
    <div className='md:w-1/2'>
    <div className='flex justify-center'>
    <h1 className=' text-white text-5xl font-hero-font '>Hi, <br/> I'm Deepankumar N
        <p className='text-xl '>Intent To Become A Developer</p>
     </h1>
    </div>
     <div className='flex py-8 px-2 bg-slate-300 justify-evenly mt-11 rounded-[50px] '>
        {/* <a href='#'><SiGmail size={40}/></a> */}
        <a href='https://www.linkedin.com/in/deepankumar-n/'><AiOutlineLinkedin size={40}/></a>
        {/* <a href='#'><AiOutlineInstagram size={40}/></a> */}
        <a href='https://leetcode.com/u/kumardeepan791/'><SiLeetcode size={40}/></a>
        <a href='https://github.com/Deepan2222'><AiOutlineGithub size={40}/></a>
        {/* <a href='#'><FaPhone  size={40}/></a>   */}
    </div>
    </div>
     <div className='md:w-1/3 flex justify-center '>
     <img src={HeroImg} className=' h-[400px] w-[380px] justify-center rounded-[50px] p-2   '/>
     </div>
     {/* h-[275px] w-[150px]  */}
   </section>
}