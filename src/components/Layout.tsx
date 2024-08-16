import React from 'react'
import NavSideBar from './NavBar';

interface LayoutProps {
    children: React.ReactNode;
  }

function Layout({children}:LayoutProps) {
  return (
    <div >
      <NavSideBar/>
      {children}

    
    </div>
  )
}

export default Layout
