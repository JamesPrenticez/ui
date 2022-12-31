import React, { useState, useEffect, useRef } from 'react'
// import { useKeyPressed } from '../../hooks/useKeyPressed'

export default function Select(props) {
  const { options, selectedValue, setSelectedValue, placeholder, renderIcon} = props
  let icon = renderIcon()

  const containerRef = useRef(null)
  const inputRef = useRef(null)
  const itemsRef = useRef([])

  const [isOpen, setIsOpen] = useState(false)

  const [filteredArray, setFilteredArray] = useState(options)
  const [activeIndex, setActiveIndex] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  let filteredOptions = options.filter((item) => filteredArray.includes(item))

  // const downArrowPressed = useKeyPressed('ArrowDown')
  // const enterPressed = useKeyPressed('Enter')

  // useEffect(() => {
  //   if (isOpen) return
  //   if (downArrowPressed && !isOpen) {
  //     setIsOpen(true), inputRef.current.focus()
  //   }
  //   enterPressed //prevent default so contentEditable doesnt create a new line in the input box
  // }, [downArrowPressed, enterPressed])

  const scrollIntoView = (direction) => {
    switch (direction){
      case 'up':
        let diffUp = (activeIndex === 0 ? filteredArray.length - 1 : -1)
        itemsRef.current[activeIndex + diffUp].scrollIntoView({ behavior: "auto", block: "nearest", inline: "nearest" })
        break
      case 'down':
        let diffDown = (activeIndex === filteredArray.length - 1 ? -activeIndex : 1)
        itemsRef.current[activeIndex + diffDown].scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" })
        break
    }
  }

  const handleArrowKeys = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        setActiveIndex(activeIndex === 0 ? filteredArray.length - 1 : activeIndex - 1) // If the index goes below 0, send to the bottom
        scrollIntoView("up")
        break
      case 'ArrowDown':
        setActiveIndex(activeIndex === filteredArray.length - 1 ? 0 : activeIndex + 1) // If the index goes above the length of the array, send to top
        scrollIntoView("down")
        break
      case 'Enter':
        setSelectedValue(filteredArray[activeIndex])
        setSearchValue('')
        setFilteredArray(options)
        setIsOpen(false)
        inputRef.current.blur()
        break
      case 'Escape':
        setIsOpen(false)
        setSearchValue('')
        setFilteredArray(options)
        inputRef.current.blur()
        break
    }
  }

  const updateFilteredArray = (value) => {
    let filteredArr = options.filter((item) =>
      item.label.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredArray(filteredArr.map((item) => item))
  }

  const handleUpdate = (e) => {
    setActiveIndex(0)
    setSearchValue(e.target.value)
    updateFilteredArray(e.target.value)
  }



  return (
    <>
      <div
        // className={styles.container}
        ref={containerRef}
        className={`${isOpen && 'ring-1 ring-theme-quaternary'} relative flex my-1 bg-theme-primary text-theme-secondary w-full py-2 ring-[0.05rem] cursor-pointer rounded-sm`}
        tabIndex={0}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      >
        {/* Icon */}
        <div className='w-[2rem] flex items-center justify-center pointer-events-none '>
          {icon}
        </div>

        {/* Text Input / Search Box */}
        <input
          ref={inputRef}
          type='text'
          onKeyDown={(e) => handleArrowKeys(e)}
          value={searchValue}
          className='absolute flex items-center left-[2rem] right-[2rem] inset-y-0 outline-none z-50 bg-transparent placeholder:text-theme-secondary'
          onChange={(e) => handleUpdate(e)}
          placeholder={
            searchValue.length > 0
              ? ''
              : selectedValue.label.length > 0
              ? selectedValue.label
              : placeholder || 'Select...'
          }
        />

        {/* Carret */}
        <div
          className='absolute w-[2rem] right-0 inset-y-0 flex items-center justify-center'
          onMouseDown={() => {document.activeElement === containerRef.current && isOpen ? setIsOpen(false) : setIsOpen(true)}}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`${
              isOpen ? '-rotate-90' : 'rotate-0'
            } 'transition transform ease-in-out duration-200`}
            height={20}
            width={20}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </div> 

        {options && (
          <div 
            className={`${isOpen ? 'block' : 'hidden'} absolute top-10 right-0 left-0 bg-theme-primary text-theme-secondary cursor-pointer ring-1 ring-theme-quaternary rounded-sm max-h-[10rem] overflow-y-scroll`}
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((item, index) => {
                return (
                  <div
                    key={item.value}
                    ref={ele => itemsRef.current[index] = ele} 
                    // className={`${ activeIndex == index && 'bg-theme-tertiary'} py-2`}
                    className={`${ activeIndex == index && 'bg-red-700 text-white'} py-2`}
                    onMouseMove={() => setActiveIndex(index)}
                    onClick={() => {
                      setSelectedValue(filteredArray[activeIndex])
                      setSearchValue('')
                      setFilteredArray(options)
                      setIsOpen(false)
                    }}
                  >
                    <span className='pl-2'>{item.label}</span>
                  </div>
                )
              })
              ) : (
              <div className='py-2'>
                <span className='pl-2'>There are no results for your search...</span>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}


// https://stackoverflow.com/questions/42036865/react-how-to-navigate-through-list-by-arrow-keys
// https://codesandbox.io/s/dropdown-arrow-keys-selection-vg5l8?from-embed=&file=/src/index.js:818-833
// https://stackoverflow.com/questions/57867894/how-to-scroll-a-list-item-into-view-using-scrollintoview-method-using-reactjs
// https://stackoverflow.com/questions/54633690/how-can-i-use-multiple-refs-for-an-array-of-elements-with-hooks
// https://github.com/JamesPrenticez/multiplayer_fighter_game/blob/master/client/components/Chat/ChatRoom.jsx
// https://www.developerway.com/posts/react-component-as-prop-the-right-way