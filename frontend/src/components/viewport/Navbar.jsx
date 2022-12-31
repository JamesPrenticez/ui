import React from 'react'
import { NavLink } from 'react-router-dom'


const navItems = [
  { name: 'home', url: '/', icon: '' },
  { name: 'inputs', url: '/inputs', icon: '' },
  { name: 'table', url: '/table', icon: '' },
  { name: 'animations', url: '/animations', icon: '' },
  { name: 'viewport', url: '/viewport', icon: '' },
]

export default function Navbar() {
  return (
    <div className='bg-orange-500
                      text-white 
                      h-[2rem]
                      w-full
                      px-2
                      flex
                      items-center
                      space-x-2
                      truncate'>
            {navItems.map((item, index) => (
              <NavLink key={index} className='navItem' to={item.url}>
                <div className='border-b-2 border-white'>
                  {item.name}
                </div>
              </NavLink>
            ))}
    </div>
  )
}
