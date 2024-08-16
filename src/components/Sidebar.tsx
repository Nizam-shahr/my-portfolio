import React from 'react'
import { HiOutlineDownload } from 'react-icons/hi'
import { useRouter } from 'next/router'
import Resume from './ResumeUrl'

function Sidebar() {
const resumeUrl = '/resume/Nizam_Resume.pdf'
const resumeName = 'My_Resume.pdf'
const router = useRouter()

  return (
    <div className=' bg-slate-400 side-bar-conatainer pt-20 pb-12 px-10 flex flex-col items-center rounded-xl '>
        <div className='flex flex-col items-center'>
        <h1 className='font-bold pb-2'>
        Shahruddeen Nizamuddeen
      </h1>
      <h3 className=' text-gray-600 text-sm'>Full-stack Developer</h3>
        </div>

        <div className='accounts_container flex items-center  gap-3 py-2 px-3'>
         <a className='' href="/https://www.facebook.com/muhammad.nisamu">
          <img  src="/facebook.png" alt="" />
         </a>
         <a href="/https://www.linkedin.com/in/nizamuddeen-shahruddeen-4a2aa4251/">
          <img  src="/linkedin.png" alt="" />
         </a>
         <a href="/https://x.com/NMshahr">
          <img  src="/twitter.png" alt="" />
         </a>
         <a href="/https://github.com/Nizam-shahr?tab=repositories">
          <img  src="/github.png" alt="" />
         </a>
        </div>

        <div className='personal-info-container flex flex-col gap-2 py-5 p-8 my-4 rounded-xlg '>
          <div className='flex gap-4 items-center rounded-lg px-4'>
            <span>
              <img src="/number.png" alt="" />
            </span>
            <div>
              <h3>Phone</h3>
              <h4>09066777502</h4>
            </div>
          </div>
         <span className='border-line'></span>
          <div  className='flex gap-4  items-center rounded-lg px-4'>
          <span>
            <img src="/email.png" alt="" />
          </span>
            <div>
              <h3>Email</h3>
              <h4>nizamushahru@gmail.com</h4>
            </div>
          </div>
         <span className='border-line'></span>
          <div  className='flex gap-4 items-center rounded-lg px-4'>
          <span>
            <img src="/location.png" alt="" />
          </span>
            <div>
              <h3>Location</h3>
              <h4>Abuja, Nigeria</h4>
            </div>
          </div>
         <span className='border-line'></span>

        </div>
        <Resume 
        resumeUrl ={resumeUrl}
        resumeName={resumeName}
        />
     
    
    </div>
  )
}

export default Sidebar
