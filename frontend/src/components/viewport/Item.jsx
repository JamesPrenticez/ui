import React from 'react'

export default function Item() {
  return (
    <div className='bg-gray-700
    text-white 
    h-[4rem]
    w-full
    px-2
    flex
    items-center
    truncate'
  >
    <p className='h-[3rem] w-[3rem] bg-gray-500'>X</p>
    <div className='h-[3rem]  ml-[0.25rem]'>
      <p className=''>Item Name</p>
      <p className=''>Item Description</p>
      <p className=''>Item Value</p>
    </div>
</div>
  )
}
