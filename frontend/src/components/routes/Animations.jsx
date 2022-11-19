import React, { useState } from 'react'
import Button from '../common/Button'
import Success from '../common/Success'

let outer_circle = {
  //fill: '#fff',
  stroke: 'rgb(34 197 94)',
  strokeDasharray: 166,
  strokeDashoffset: 166,
  animation: 'stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards infinite',
}

function Animations() {
  const [isSuccessful, setIsSuccessful] = useState(false)

  return (
    <>
      <section className='my-6 py-4 border-b border-t border-red-500'>
        <h1 className='text-bold pb-2'>Success Animation</h1>

        <div className='relative min-h-[190px]'>
          <div
            className={`bg-theme-senary min-h-[190px] absolute top-0 left-0 w-full flex flex-wrap items-center border border-green-500 rounded-md transition-all duration-1000 ${
              isSuccessful ? 'visible opacity-100' : 'invisible opacity-0'
            }`}
          >
            <div className='w-full flex items-center justify-center'>
              <Success isActive={isSuccessful} setIsActive={setIsSuccessful} />
            </div>
            <p className='text-green-500 w-full text-center -mt-6'>Success</p>
          </div>
        </div>

        <div className='flex w-2/3 space-x-2 mt-2'>
          <Button
            label='Success'
            className='!bg-green-600 hover:!bg-green-500 !justify-end'
            onClick={() => setIsSuccessful(!isSuccessful)}
          />
        </div>
      </section>

      <section className='my-6 py-4 border-b border-t border-red-500'>
        <h1 className='text-bold pb-2'>Default Tailwind Keyframes</h1>

        <div className='flex space-x-2'>
          <div className='h-32 w-32 bg-blue-500 animate-pulse flex items-center justify-center'>
            pulse
          </div>
          <div className='h-32 w-32 bg-red-500 animate-ping flex items-center justify-center'>
            ping
          </div>
          <div className='h-32 w-32 bg-green-500 animate-bounce flex items-center justify-center'>
            bounce
          </div>
          <div className='h-32 w-32 bg-fuchsia-500 animate-spin flex items-center justify-center'>
            spin
          </div>
        </div>
      </section>

      <section className='my-6 py-4 border-b border-t border-red-500'>
        <h1 className='text-bold pb-2'>Custom Tailwind Keyframes</h1>

        <div className='flex space-x-2'>
          <div className='h-32 w-32 bg-blue-500 animate-wiggle flex items-center justify-center'>
            wiggle
          </div>

          <div className='h-32 w-32 border border-red-500 rounded-md animate-stroke flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 52 52'
              strokeWidth={2}
            >
              <circle style={outer_circle} cx='26' cy='26' r='25' fill='none' />
            </svg>
          </div>
          <div className='h-32 w-32 bg-green-500 animate-scale flex items-center justify-center'>
            scale
          </div>
          <div className='h-32 w-32 bg-fuchsia-500 animate-flash flex items-center justify-center'>
            flash
          </div>
        </div>
      </section>
    </>
  )
}

export default Animations
