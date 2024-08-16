import React from 'react'

function Contact() {
    return (
        <div className='resume-container rounded-2xl '>
            <div className='flex gap-8 items-center pl-20 pr-32 pt-6 pb-8'>
            <h1 className='text-3xl poppin font-semibold'>
                ABOUT ME
            </h1>
            <span>
                <img src="/top-line.png" alt="" />
            </span>
          </div>
          <div className='flex flex-col pl-16 pb-4 pr-32 gap-4 '>
           
            <div className='flex gap-12 '>
            <div className='w-56 light-purple-bg flex flex-col p-4 rounded-xl'>
           <span className='flex gap-2'>
            <img src="/phone.png" alt="" />
            <h2>Phone :</h2>
           </span>
           <div className=' px-8 py-2'>
           <h2 className='text-xs  font-bold'>+2349066777502</h2>
           <h3 className='text-xs font-bold'>+2349066777502</h3>
           </div>
                
            </div>
            <div className=' w-56 flex flex-col p-4 light-purple-bgs rounded-xl'>
            <span className='flex gap-2'>
                <img src="/mail.png" alt="" />
                <h1>Email:</h1>
            </span>
                <h2 className='text-xs px-8 py-2  font-bold'>nizamushahru@gmail.com</h2>
              
            </div>
            </div>
          </div>
        
      
     
        </div>
      )
}

export default Contact
