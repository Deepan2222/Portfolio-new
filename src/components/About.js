import AboutImg from '../assets/About_bg.png'

export default function About(){
    return <section id='ab' className='flex flex-col md:flex-row bg-slate-300 text-black font-bold'>
        <div className='md:w-1/2 justify-center'>
            <div className='py-20 px-20'>
            <img src={AboutImg}  className='h-[300px] w-[750px]'/>
            </div>
        </div>
        <div className='md:w-1/2 flex justify-center '>
            <div className=' flex flex-col justify-center'>
            <h1 className='text-4xl border-b-4 mb-5 font-bold w-[170px] border-[green]'>About me</h1>
            <p className=' font-hero-font font-extrabold'>I'm an enthusiastic M.C.A. student with a passion for technology and software development. I have skills in Core Java, SQL, Python, and React. I aim to create useful digital solutions and build a career with a leading company. I believe in technology's power to make a positive impact and enjoy working with others. I am always eager to learn new skills and take on challenging projects.</p>
            </div>
        </div>
    </section>
}
