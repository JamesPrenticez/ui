import React from 'react'
import Header from '../components/viewport/Header'
import Sidebar from '../components/viewport/Sidebar'
import Navbar from '../components/viewport/Navbar'
import Toolbar from '../components/viewport/Toolbar'
import Titlebar from '../components/viewport/Titlebar'

export default function Viewport() {
  return (
  <div className='bg-red-500 relative'>
    <Header />
    <Sidebar />

    <div className='
                    bg-blue-900
                    h-screenNav
                    w-screenNav
                    ml-[3rem]
                    flex
                    flex-col
                    divide-y 
                    divide-gray-800/50
                    '>
      <Navbar />
      <Toolbar />
      <Toolbar />
      <Toolbar />
    </div>
    {/* <Titlebar /> */}

  </div>
  )
}