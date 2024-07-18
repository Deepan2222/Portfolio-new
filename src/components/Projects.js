import img1 from '../assets/cbs.png'
import img2 from '../assets/bank.png'
import img3 from '../assets/Snapchat-396319016.jpg'

export default function(){

   const projects={
    pro:[{
        img:img1,
        des:'Developing a Django-based platform for community book swapping to foster shared reading experiences and optimize literary resources. Utilizing Django, Python, SQLite, HTML, CSS, and JavaScript to implement user authentication, book listings, exchange systems, and community engagement tools.',
    },
    {
        img:img2,
        des:'Banking Management System It is a Java-based console application that allows users to register, log in, and manage bank accounts, including transactions and viewing transaction history. It uses MySQL for data storage and JDBC for database connectivity',
    },
    // {
    //     img:img3,
    //     des:'Banking Management System It is a Java-based application that allows users to register, log in, and manage bank accounts, including transactions and viewing transaction history. It uses MySQL for data storage and JDBC for database connectivity',
    // }
]
   }

    return <section id="po" className="flex flex-col py-10  justify-center text-white bg-black">
        <div className="w-full py-5">
          <div className="flex justify-center">
          <h1 className='text-4xl border-b-4 mb-5 font-bold w-[140px] border-[black]'> 
    Projects
              </h1>
          </div>
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5 justify-evenly'>
         {projects.pro.map((p)=>(
             <div className='relative'>
             <img className='h-[300px] w-[400px]' src={p.img}/>
         <div className='project-des'>
             <p className=' text-center py-5 px-2'>
                {p.des}
             </p>
         </div>
         </div>
         ))}    
        </div>
        </div>
    </section>
}