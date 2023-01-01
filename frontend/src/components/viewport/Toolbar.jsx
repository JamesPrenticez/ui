import React from 'react'

export default function Toolbar({children}) {
  return (
    <div className='bg-gray-500
                     text-white 
                     h-[2rem]
                     w-full
                     px-2
                     flex
                     items-center
                     space-x-2
                     truncate'
    >
      {children}
    </div>
  )
}
