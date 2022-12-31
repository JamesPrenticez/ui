import React from 'react'
import Header from '../components/viewport/Header'
import Sidebar from '../components/viewport/Sidebar'
import Navbar from '../components/viewport/Navbar'
import Toolbar from '../components/viewport/Toolbar'
import Titlebar from '../components/viewport/Titlebar'
import Item from '../components/viewport/Item'

const items = [1,2,3,4,5]

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
                    truncate
                    '>
      <Navbar />
      <Toolbar />
      <Toolbar />
      <Toolbar />
      <div className='
                    bg-red-900
                    h-screenNav
                    w-screenNav
                    flex
                    flex-col
                    divide-y 
                    divide-gray-800/50
                    truncate
                    max-h-[250px]
                    '
        >
        <div className='bg-pink-400 overflow-y-scroll'>
          {items.map((item) => {
            return (
              <Item key={item}/>
              )})}
          </div>
        </div>
    </div>
    {/* <Titlebar /> */}

  </div>
  )
}