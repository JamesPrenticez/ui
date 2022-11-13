import React, {useState, useEffect, useRef} from 'react'
import { useKeyPressed } from "../../hooks/useKeyPressed"

export default function Select({options, value, setSelectedValue, placeholder}) {
  const inputRef = useRef(null)
  
  const [isOpen, setIsOpen] = useState(false)
  const [filteredArray, setFilteredArray] = useState(options)
  const [activeIndex, setActiveIndex] = useState(0)
  const [searchValue, setSearchValue] = useState("")

  const downArrowPressed = useKeyPressed("ArrowDown")
  const enterPressed = useKeyPressed("Enter")

  useEffect(() => {
    if(isOpen) return
    if(downArrowPressed && !isOpen) {setIsOpen(true),  inputRef.current.focus()}
    enterPressed //prevent default so contentEditable doesnt create a new line in the input box
  }, [downArrowPressed, enterPressed])

  const handleArrowKeys = (e) => {
    switch(e.key){
      case "ArrowUp":
          //setActiveIndex(activeIndex === 0 ? filteredArray.length - 1 : activeIndex - 1) // If the index goes below 0, wrap around
          setActiveIndex(prevState => (prevState > 0 ? prevState - 1 : prevState))
        break
        case "ArrowDown":
          //setActiveIndex(activeIndex === filteredArray.length - 1 ? 0 : activeIndex + 1) // If the index goes above the length of the array, wrap around
          setActiveIndex(prevState => prevState < filteredArray.length - 1 ? prevState + 1 : prevState)
        break
      case "Enter":
        //check is value ty
        setSelectedValue(filteredArray[activeIndex])
        setIsOpen(false)
        setSearchValue("")
        setFilteredArray(options)
        inputRef.current.blur()
        break
      case "Escape":
        setIsOpen(false)
        setSearchValue("")
        setFilteredArray(options)
        inputRef.current.blur()
        break
    }
  }

  const updateFilteredArray = (value) => {
    let filteredArr = options.filter(item => item.label.toLowerCase().includes(value.toLowerCase()))
    setFilteredArray(filteredArr.map(item => item))
  }
  
  const handleUpdate = (e) => {
    setActiveIndex(0)
    setSearchValue(e.target.value)
    updateFilteredArray(e.target.value)
  }

  return (
    <>
    <div
      className="
      relative
      flex
      my-1
      bg-theme-primary
      text-theme-secondary
      w-full
      py-2
      ring-[0.05rem]
      ring-theme-tertiary
      focus:ring-theme-quaternary
      cursor-pointer
      rounded-sm
      "
      //onClick={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      // tabIndex={0}
    >
      <div className="w-[2rem] flex items-center justify-center pointer-events-none ">
        <svg height={20} width={20} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>     
      </div>
      {/* {console.log("searchvalue", searchValue)} */}

        <input 
          ref={inputRef} 
          type="text"
          onKeyDown={(e) => handleArrowKeys(e)}
          value={searchValue}
          className='absolute flex items-center left-[2rem] right-[2rem] inset-y-0 outline-none z-50 bg-transparent'
          onChange={(e) => handleUpdate(e)}
        />
        <input 
          type="text"
          placeholder={searchValue.length > 0 ? "" : value.label.length > 0 ? value.label : placeholder || "Select..."}
          className='absolute flex items-center left-[2rem] right-[2rem] inset-y-0 outline-none bg-transparent placeholder:text-white pointer-events-none'
        />

      
      <div 
        className="absolute bg-red-500 w-[2rem] right-0 inset-y-0 flex items-center justify-center pointer-events-none"
        onClick={() => console.log("here")}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          className={`${isOpen ? '-rotate-90' : 'rotate-0'} 'transition transform ease-in-out duration-200`}
          height={20}
          width={20}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
         <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </div>

      {isOpen && 
        <div 
          className="absolute top-12 right-0 left-0 bg-theme-primary text-theme-secondary cursor-pointer border-[0.05rem] border-theme-quaternary rounded-sm"
        >
          {options.length > 0 ?
            [...options]
              .filter(item => filteredArray.includes(item))
              .map((item, index) => {
                return(
                  <div 
                    key={item.value}
                    className={`${activeIndex == index && "bg-theme-tertiary"} py-2`}
                  >
                    <span className="pl-2">{item.label}</span>
                  </div>
                )
              })
          :
          <div></div>
        }

        </div>
      }
    </div>
  </>
  )
}

//https://codesandbox.io/s/dropdown-arrow-keys-selection-vg5l8?from-embed=&file=/src/index.js:818-833
