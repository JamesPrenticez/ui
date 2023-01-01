import React, {useState} from 'react'

function Button({ className, color, onClick, label }) {

  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
     setIsHover(true)
  }
  const handleMouseLeave = () => {
     setIsHover(false)
  }

  const boxStyle = {
    backgroundColor: isHover ? color : 'rgb(15 23 42)',
  }


  return (
    <button
      name={label}
      className={`text-md p-2 text-theme-secondary text-center hover:bg-secondaryMinus rounded-md select-none whitespace-nowrap bg-slate-900 ${className}`}
      style={boxStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
