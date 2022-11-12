import { useState, useEffect } from "react"

export const useKeyPressed = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false)

  const handleKeyDown = (e) => {
    e.preventDefault()
    if(e.repeat) return 
    e.key === targetKey && setKeyPressed(true)
  }
 
  const handleKeyUp = (e) => {
    e.key === targetKey && setKeyPressed(false)
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  })
  return keyPressed
}