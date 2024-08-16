import React from 'react'
import Image from 'next/image'
import { HiOutlineHome } from "react-icons/hi2";
import { RiFileList2Line } from "react-icons/ri";
import { PiBagSimple } from "react-icons/pi";
import { RiContactsBook3Fill } from "react-icons/ri";
import { useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';
function NavBar() {

  
const location = useRouter()

const NavBarItems = [
  {
      name:<h2>Home</h2>,
      path:'/',
      icon: <HiOutlineHome size={20} />
  },
  {
    name:<h2>Resume</h2>,
    path:'/my_resume',
    icon: <RiFileList2Line size={20} />
},
{
  name:<h2>Work</h2>,
  path:'/work',
  icon: <PiBagSimple size={20} />
},

]

const currentPath = location.pathname

const currentLocation= NavBarItems.find((item) => item.path === currentPath)
const currentItem =currentLocation?.path
console.log(currentItem);

  return (
    <div className='nav-side-bar-container'>
        <div>
            <div className='nav-bar flex justify-between items-center'> 
      <div className='nav-bar-name flex  gap-2'>
    <h2 >
            Shahruddeen
        </h2>
        <h2 className=' text-purple-700'>
            Nizamuddeen
        </h2>
      </div>
     <div>
        <button className=' border-purple-700 border-2'>
            <Image src='/mode.png' alt='mode_img' width={30} height={30} />
        </button>
     </div>
    </div>
    
    <div className='nav-items border-purple-700 rounded-2xl border-2 flex float-end gap-6 py-2 px-4 mt-20 '>
      {NavBarItems.map((item) => (
          <a href={item.path} key={item.path} className={` ${currentItem === item.path ? 'current py-2 px-3 flex flex-col items-center rounded-xl' : 'non-current py-2 px-3 flex flex-col items-center rounded-xl'}`}>
              {item.icon}
              {item.name}
           </a >
      ))}
       
        
    </div>
    <div>
    <div className='mt-24 mx-12 portfolio-image '> 
      <Image className='rounded-lg' src='/portfolio.png' width={150} height={300} alt=''/>
    </div>
    </div>
   
    </div>
   
    </div>
  )
}

export default NavBar
