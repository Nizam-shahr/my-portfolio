import React from 'react'

const About = () => {
  return (
    <div className=' about-container py-6 px-10 rounded-xl'>    
    <div className='flex gap-8 items-center'>
        <h1 className='text-3xl poppin font-semibold'>
            ABOUT ME
        </h1>
        <span>
            <img src="/top-line.png" alt="" />
        </span>
      </div>
      <p className='my-4 raleway font-semibold text-sm'>
      Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
My journey in the world of web development has been nothing short of exhilarating, and
I constantly strive to enhance my skills and embrace emerging trends in the industry.
      </p>
      <h1 className='text-2xl poppin font-semibold'>What I do !</h1>
      <div className='flex gap-8 flex-wrap what-i-do-warapper pt-8 '>
        <div className='flex gap-4'>
        <div className='flex flex-col  light-purple-bg rounded-xl px-4 py-3  '>
            <div className='flex gap-4 items-center '>
                <span><img src="/code.png" alt="" /></span>
                <h1  className='text-2xl font-semibold'>Web Development</h1>
                </div>
                <p className=' text-xs raleway w-64'>
                As a developer, I find myself most
captivated by the power and flexibility of
NEXT.js and  React js and also the use of Typescript so that everything would be typed. I'm always eager to dive into new
projects that leverage NEXTjs and
discover innovative ways to create fast.
scalable, and user-friendly applications.
                </p>
         
        </div>
        <div className='flex flex-col  light-brown-bg rounded-xl px-4 py-3  '>
        <div className='flex gap-4 items-center '>
                <span><img src="/insta.png" alt="" /></span>
                <h1  className='text-2xl font-semibold'>App Development</h1>
                </div>
                <p className='text-xs raleway w-64'>
                With a focus on user-centric design and
cutting-edge technologies, I thrive on 
building intuitive and efficient apps 
that make a positive impact on people's 
lives. Let's turn ideas into reality and 
shape the future together.
                </p>
        </div>
        </div>
       <div className='flex gap-4' >
       <div className='flex flex-col  light-brown-bg rounded-xl px-4 py-3'>
        <div className='flex gap-4 items-center  '>
                <span><img src="/ux.png" alt="" /></span>
                <h1 className='text-2xl font-semibold'>UI/UX Designs</h1>
                </div>
                <p className='text-xs raleway w-64'>
                Crafting visually appealing and intuitive user
interfaces that offer a delightful user 
experience is something I'm truly fanatic 
about.
                </p>
        </div>
        <div className='flex flex-col  light-purple-bg rounded-xl px-4 py-3'>
        <div className='flex gap-4 items-center '>
                <span><img src="/mentor.png" alt="" /></span>
                <h1  className='text-2xl font-semibold'>Mentorship</h1>
                </div>
                <p className='text-xs raleway w-64'>
                I have also found great joy in sharing my 
knowledge with others. Being a technical 
mentor allows me to give back to the 
community that has supported me 
throughout my career. 
                </p>
        </div>
       </div>
       
      </div>
    </div>
  )
}

export default About
