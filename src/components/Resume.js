import resume from '../assets/resume.png'

export default function Resume(){

   const res={
    link :'https://drive.google.com/file/d/1JhAzrQ9yutBtrD1I1shyeuwMUhCqZffE/view?usp=sharing'
   }

    return <section id="re" className='flex flex-col md:flex-row bg-slate-300 text-black py-5'>
        <div className='md:w-1/2 flex justify-center '>
            <div className=' flex flex-col justify-center'>
            <h1 className='text-4xl border-b-4 mb-5 font-bold w-[130px] border-[green]'>Resume</h1>
            <p>You Can View My Resume Here <a className='btw text-white' href={res.link}>Download</a></p>
            </div>
        </div>
        <div className=' py-5 md:w-1/2 flex justify-center'>
            <img src={resume} className='h-[300px] w-[250px] rounded-xl '/>
        </div>
        
    </section>}