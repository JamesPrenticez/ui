import React from 'react'

function Button({ className, color, onClick, label }) {
  return (
    <button
      name={label}
      className={`text-md p-2 text-theme-secondary text-center bg-theme-secondary hover:bg-secondaryMinus rounded-md select-none justify-end whitespace-nowrap ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
