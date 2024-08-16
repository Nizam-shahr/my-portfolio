import React from 'react'
import { HiOutlineDownload } from 'react-icons/hi'

type Props = {
    resumeUrl : string
    resumeName:string
}

function ResumeUrl({resumeUrl,resumeName}:Props) {
  return (
    <div>
         <a href={resumeUrl} download={resumeName} className='resume_btn cursor-pointer'>
          <span><HiOutlineDownload size={20} /></span>
          Download Resume
          
        </a>
    </div>
  )
}

export default ResumeUrl
