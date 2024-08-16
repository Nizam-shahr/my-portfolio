import React from 'react'

function Resume() {
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
        <div className='flex gap-12'>
        <div className='flex gap-8 items-center'>
            <span><img src="/grad-cap.png" alt="" /></span>
            <h2 className='text-3xl poppins'>Education</h2>
        </div>
        <div className='flex gap-8 items-center'>
    <span><img src="/bag-exp.png" alt="" /></span>
            <h2 className='text-3xl poppins'>Experience</h2>
        </div>
        </div>
        <div className='flex gap-12'>
        <div className='w-56 light-purple-bgs flex flex-col p-4 rounded-xl'>
            <h4 className=' text-xs  '>2021-2023</h4>
            <h2 className='text-xs  font-bold'>Web Development</h2>
            <h3 className='text-xs '>Alhikmah University</h3>
        </div>
        <div className='light-purple-bg w-56 flex flex-col p-4 rounded-xl'>
        <h4 className=' text-xs  '>2021-2023</h4>
            <h2 className='text-xs  font-bold'>Web Development</h2>
            <h3 className='text-xs '>Alhikmah University</h3>
        </div>
        </div>
        <div className='flex gap-12 '>
        <div className='w-56 light-purple-bg flex flex-col p-4 rounded-xl'>
        <h4 className=' text-xs  '>2021-2023</h4>
            <h2 className='text-xs  font-bold'>Web Development</h2>
            <h3 className='text-xs '>Alhikmah University</h3>
        </div>
        <div className=' w-56 flex flex-col p-4 light-purple-bgs rounded-xl'>
        <h4 className=' text-xs  '>2021-2023</h4>
            <h2 className='text-xs  font-bold'>Web Development</h2>
            <h3 className='text-xs '>Alhikmah University</h3>
        </div>
        </div>
      </div>
      <div className='skill-container flex justify-center'>
      <div className=" skill-container-div  flex gap-12 ">
        <div className="skills-section-1  flex flex-col py-2 " id="work-skills">
            <h2  className=' poppins py-2 text-3xl'>Work Skills</h2>
            <div className='flex flex-wrap gap-3 '>
            <h3 className="skill  text-xs ">NEXT.js</h3>
            <h3 className="skill  text-xs ">React.js</h3>
            <h3 className="skill  text-xs ">HTML 5</h3>
            <h3 className="skill  text-xs ">CSS 3</h3>
            <h3 className="skill  text-xs ">Tailwind CSS</h3>
            <h3 className="skill  text-xs ">Figma</h3>
            <h3 className="skill  text-xs ">JavaScript</h3>
            <h3 className="skill  text-xs ">Mongo DB</h3>
            <h3 className="skill  text-xs ">SQL</h3>
            <h3 className="skill  text-xs ">Angular</h3>
            <h3 className="skill  text-xs ">Android</h3>
            <h3 className="skill  text-xs ">Git</h3>
            </div>
        </div>
        <div className="skills-section  flex flex-col py-4 " id="soft-skills">
            <h2 className=' poppins py-2 text-3xl font-medium'>Soft Skills</h2>
            <div className='flex skills-section-2 flex-wrap gap-4'>
            <h3 className="skill  text-xs ">Time Management</h3>
            <h3 className="skill  text-xs ">Mentorship</h3>
            <h3 className="skill  text-xs ">Impeccable Communication</h3>
            <h3 className="skill  text-xs ">Flexibility</h3>
            <h3 className="skill  text-xs ">Research</h3>
            <h3 className="skill  text-xs ">Writing</h3>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Resume
