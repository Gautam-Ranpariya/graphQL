import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../shared/sidebar'

export default function DefaultLayout() {
  return (
    <div className=' border-red-500 flex items-center justify-center h-screen w-full'>
      <SideBar />
      <Outlet />
    </div>
  )
}
