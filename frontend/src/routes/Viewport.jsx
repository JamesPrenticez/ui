import React from 'react'
import Header from '../components/viewport/Header'
import Sidebar from '../components/viewport/Sidebar'
import Navbar from '../components/viewport/Navbar'
import Toolbar from '../components/viewport/Toolbar'
import Titlebar from '../components/viewport/Titlebar'
import Item from '../components/viewport/Item'
import Button from '../components/common/Button'

const items = [
  {id: 1, name: 'a', desc: 'a', value: 10},
  {id: 2, name: 'b', desc: 'b', value: 20},
  {id: 3, name: 'c', desc: 'c', value: 30},
]

const buttons = [
  {id: 1, name: 'new item', color:"green"},
  {id: 2, name: 'delete', color:"red"},
  {id: 3, name: 'move to', color:"blue"},
  {id: 4, name: 'edit', color:"orange"},
]


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


      {/* Toolbar */}
      <Toolbar
        className="text-white"
      >
        {buttons.map((button) => {
          return(
          <Button
            key={button.id}
            label={button.name}
            color={button.color}
            className=''
            onClick={() => {}}
            />
          )})  
        }
      </Toolbar>

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