import Contact from '@/components/Contact'
import Sidebar from '@/components/Sidebar'
import React from 'react'


function Contacts() {
    return (
        <div className="flex  gap-4 mt-40">
        <div>
        <Sidebar />
        </div>
    
     <div>
     <Contact/>
     </div>
      </div>
      )
}

export default Contacts
