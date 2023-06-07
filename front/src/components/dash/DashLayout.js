import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import DashHeader from '../../partials/DashHeader'
import DashFooter from '../../partials/DashFooter'
import Sidebar from '../../partials/Sidebar'

const DashLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        {/*  Site header */}
        <DashHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            <Outlet />
          </div>
          
        </main>
        <DashFooter />
      </div>
    </div>
  )
}

export default DashLayout