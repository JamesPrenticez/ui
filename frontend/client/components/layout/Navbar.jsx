import React from 'react'
import { NavLink } from "react-router-dom";
import ThemeToggle from './ThemeToggle'

const navItems = [
	{name: 'home', url: '/', icon: ''},
	{name: 'admin', url: '/admin', icon: ''},
]

export default function Navbar(){
  return (
    <header className='flex justify-center bg-theme-tertiary text-white font-medium'>
      <nav className='flex items-center justify-between w-full lg:max-w-7xl '>
        <div className='space-x-2'>
          {navItems.map((item, index) => (
						<NavLink key={index} className="navItem" to={item.url}>{item.name}</NavLink>
					))}
        </div>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}