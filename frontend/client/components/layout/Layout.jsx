import React, { Children } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <>
    <Navbar />
    <body className='flex justify-center bg-theme-primary text-theme-secondary font-medium min-h-screen'>
      <main className='w-full lg:max-w-7xl '>
        {/* <Sidebar /> */}
        {children}
      </main>
    </body>

    <Footer />
    </>
  )
}