import React from 'react'
import { useRouter } from 'next/router'

function Works() {

  const router = useRouter()
  return (
    <div className='works-container rounded-2xl p-8'>
        <div className='flex gap-8 items-center '>
        <h1 className='text-3xl pacifico '>
            PORTFOLIO
        </h1>
        <span>
            <img src="/top-line.png" alt="" />
        </span>
      </div>

      <div >
        <div className='flex gap-2 items-center justify-center p-4'>
        <h1 className='text-center   text-2xl some'>Some    </h1>
        <h1 className='text-center text-purple-700  text-2xl some'>of</h1>
        <h1 className='text-center   text-2xl some' >my</h1>
        <h1 className='text-center text-purple-700 text-2xl some'>projects</h1>
        </div>
      
        <div className=' flex gap-8 '>
        <div className='flex flex-col gap-8 portfolio-projects'>
          <div  onClick={()=> router.push('/https://e-commerce-nizam-nizam-shahr.vercel.app/')} className='projects cursor-pointer '>
            <img className='item-store' src="item-store.png" alt="" />
            <h3 className='text-xs text-gray-200 font-bold raleway'>E-commerce Clone</h3>
            <h2 className='poppins font-bold'>Next JS & Typescript</h2>
          </div>
          <div  onClick={()=> router.push('/https://movie-page-navy.vercel.app/')} className='projects cursor-pointer'>
            <img className='movie-box ' src="/movie-box.png" alt="" />
            <h3 className='text-xs text-gray-200 font-bold raleway'>Movie BOX</h3>
            <h2 className='poppins font-bold'>Next Js</h2>
          </div>
          <div  onClick={()=> router.push('/https://house-market-place-steel.vercel.app/')} className='projects cursor-pointer'>
            <img className='house-market' src="/house.png" alt="" />
            <h3 className='text-xs text-gray-200 font-bold raleway'>House Market Place</h3>
            <h2 className='poppins font-bold'>React Js</h2>
          </div>
        </div>
        <div  onClick={()=> router.push('/https://car-showcase-nu-sand.vercel.app/')} className='flex flex-col justify-center gap-8 portfolio-project'>
          
          <div className='projects cursor-pointer'>
            <img className='showcase' src="/car-show.png" alt="" />
            <h3 className='text-xs text-gray-200 font-bold raleway'>Car Showcase</h3>
            <h2 className='poppins font-bold'>React js & Typescript</h2>
          </div>
          <div  onClick={()=> router.push('/https://food-zone-jet.vercel.app/')} className='projects cursor-pointer'>
            <img src="/food-store.png" alt="" />
              <h3 className='text-xs text-gray-200 font-bold raleway'>Food store</h3>
              <h2 className='poppins font-bold'>Next Js</h2>
          </div>
        </div>
        </div>
      </div>
     
   
    </div>
  )
}

export default Works
