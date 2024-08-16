import Resume from '@/components/Resume'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function MyResume() {
  return (
    <div className="flex  gap-4 mt-40">
    <div>
    <Sidebar />
    </div>

 <div>
 <Resume/>
 </div>
  </div>
  )
}

export default MyResume
