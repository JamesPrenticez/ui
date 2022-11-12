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
        //alert(`Selected ${filteredArray[activeIndex]}`)
        setSelectedValue(filteredArray[activeIndex])
        setSearchValue("")
        setIsOpen(false)
        inputRef.current.blur()
        break
      case "Escape":
        setIsOpen(false)
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
      my-1
      bg-theme-primary
      text-theme-secondary
      w-full
      py-2
      px-[3rem]       
      ring-[0.05rem]
      ring-theme-tertiary
      focus:ring-theme-quaternary
      cursor-pointer
      rounded-sm
      "
      onClick={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      // tabIndex={0}
    >
      {/* <div className="bg-red-500 w-[3rem] flex items-center justify-center pointer-events-none ">
        <svg height={22} width={22} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>     
      </div> */}
      {/* {console.log("searchvalue", searchValue)} */}

      <div className='h-[1rem] py-2'>

        <input 
          ref={inputRef} 
          type="text"
          onKeyDown={(e) => handleArrowKeys(e)}
          value={searchValue}
          className='bg-transparent py-2 absolute left-[3rem] right-[3rem] inset-y-0 outline-none z-50'
          onChange={(e) => handleUpdate(e)}
        />

        <p 
          className='absolute flex items-center left-[3rem] right-[3rem] inset-y-0 pointer-events-none'
          >
            {searchValue.length > 0 ? "" : value.label.length > 0 ? value.label : placeholder || "Select..."}
        </p>
      </div>

      {/*
      <div 
        className="absolute bg-red-500 w-[3rem] right-0 inset-y-0 flex items-center justify-center pointer-events-none"
        onClick={() => console.log("here")}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          className={`${!isOpen && "transfrom rotate-90 transition-transform ease-in-out duration-200"}`}
          height={22}
          width={22}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div> */}

    </div>

    {isOpen && 
      <div 
        className="bg-theme-primary text-theme-secondary cursor-pointer border-[0.05rem] border-theme-quaternary rounded-sm"
      >
        {[...options]
          .filter(item => filteredArray.includes(item))
          .map((item, index) => {
            return(
              <div 
                key={item.value}
                className={`${activeIndex == index && "bg-theme-tertiary"}`}
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
