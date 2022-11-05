import React from 'react'
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <>
    <Navbar />
    <div className='flex justify-center bg-theme-primary text-theme-secondary font-medium min-h-screen'>
      <main className='w-full lg:max-w-7xl '>
        {/* <Sidebar /> */}
        <Outlet />
      </main>
    </div>

    <Footer />
    </>
  )
}