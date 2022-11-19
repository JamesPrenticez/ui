import React, { useState } from 'react'
import useDarkMode from '../../hooks/useDarkMode'
import { SunIcon, MoonIcon } from '../../icons/theme'

const ThemeToggle = () => {
  const [colorTheme, setTheme] = useDarkMode()
  const [darkSide, setDarkMode] = useState(
    colorTheme === 'light' ? true : false
  )

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme)
    setDarkMode(checked)
  }

  return (
    <>
      {colorTheme === 'dark' ? (
        <button onClick={() => toggleDarkMode()}>
          <SunIcon className='h-6 md:inline-flex cursor-pointer transform transition-all hover:scale-110 duration-150 ease-out' />
        </button>
      ) : (
        <button onClick={() => toggleDarkMode()}>
          <MoonIcon className='h-6 md:inline-flex cursor-pointer transform transition-all hover:scale-110 duration-150 ease-out' />
        </button>
      )}
    </>
  )
}

export default ThemeToggle
