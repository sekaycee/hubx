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
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <DashHeader />
        <main>
          <Outlet />
        </main>
        <DashFooter />
      </div>
    </div>
  )
}

export default DashLayout