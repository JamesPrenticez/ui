import { useState, useEffect } from 'react'

export const useKeyPressed = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false)

  const handleKeyDown = (e) => {
    if (e.repeat) return
    if (e.key === 'ArrowUp') e.preventDefault()
    if (e.key === targetKey) {
      e.preventDefault()
      setKeyPressed(true)
    }
  }

  const handleKeyUp = (e) => {
    e.preventDefault()
    e.key === targetKey && setKeyPressed(false)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  })
  return keyPressed
}

// HTML is retared as fuck and you need to prevent the up arrow key resetting the cursor position ..... literally no other application has this fucking stupid behaviour
