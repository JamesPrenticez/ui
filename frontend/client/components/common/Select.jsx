import React, {useState, useEffect, useRef} from 'react'
import { useKeyPressed } from "../../hooks/useKeyPressed"

export default function Select({options, value, setValue, placeholder}) {
  const containerRef = useRef(null)
  
  const [isOpen, setIsOpen] = useState(false)
  const [filteredArray, setFilteredArray] = useState(options)
  const [activeIndex, setActiveIndex] = useState(0)

  const downArrowPressed = useKeyPressed("ArrowDown")

  useEffect(() => {
    if(isOpen) return
    if(downArrowPressed && !isOpen) {setIsOpen(true),  containerRef.current.focus()}
  }, [downArrowPressed])

  const handleArrowKeys = (e) => {
    switch(e.key){
      case "ArrowUp":
        setActiveIndex(activeIndex === 0 ? filteredArray.length - 1 : activeIndex - 1) // If the index goes below 0, wrap around
        break
      case "ArrowDown":
        setActiveIndex(activeIndex === filteredArray.length - 1 ? 0 : activeIndex + 1) // If the index goes above the length of the array, wrap around
        break
      case "Enter":
        //alert(`Selected ${filteredArray[activeIndex]}`)
        console.log(`Selected ${filteredArray[activeIndex].label}`)
        break
      case "Escape":
        setIsOpen(false)
        containerRef.current.blur()
        break
    }
  }

  const updateFilteredArray = (value) => {
    let filteredArr = options.filter(item => item.label.toLowerCase().includes(value.toLowerCase()))
    setFilteredArray(filteredArr.map(item => item))
  }

  return (
    <>
    <div
      ref={containerRef}
      className="hover:cursor-pointer relative my-1 rounded-md"
      onClick={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      onKeyDown={(e) => handleArrowKeys(e)}
      tabIndex={0}
    >

      <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
        <svg  className="cursor-pointer h-6 w-6 text-gray-500 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>     
      </div>

      <input  
        type="text"
        name="selected"
        value={value}
        placeholder={placeholder || "Select..."}
        className="bg-white text-black block w-full pl-10 py-1 text-lg border-2 border-blue-900 outline-blue-500 rounded-md"
        onChange={(e) => {setValue(e.target.value), updateFilteredArray(e.target.value)}}
      />
      
      <div className="absolute right-2 inset-y-0 pl-3 flex items-center  pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          className={`${!isOpen && "transfrom rotate-90 transition-transform ease-in-out duration-200"}`}
          height={24}
          width={24}
          fill="none"
          viewBox="0 0 24 24"
          stroke="rgb(107 114 128)"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>

    {isOpen && 
      <div 
        className="bg-white text-black cursor-pointer border-2 border-blue-500 rounded-sm"
      >
        {[...options]
          .filter(item => filteredArray.includes(item))
          .map((item, index) => {
            return(
              <div 
                key={item.value}
                className={`${activeIndex == index && "bg-blue-500 text-white"} `}
              >
                <span className="pl-2">{item.label}</span>
              </div>
            )
          })
        }

      </div>
    }
  </>
  )
}

//https://codesandbox.io/s/dropdown-arrow-keys-selection-vg5l8?from-embed=&file=/src/index.js:818-833
