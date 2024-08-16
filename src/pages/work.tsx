import Qrcode from '@/components/Qrcode'
import Resume from '@/components/Resume'
import Sidebar from '@/components/Sidebar'
import Works from '@/components/Works'
import React from 'react'

function myWorks() {
  return (
    <div className="flex  gap-4 mt-40">
    <div>
    <Sidebar />
    </div>

 <div>
 <Works/>
 </div>
  </div>
  )
}

export default myWorks
