import React, { useState, useRef, useEffect } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useKeyPressed } from '../../hooks/useKeyPressed'

function SearchSelect({ data, selected, setSelected }) {
  const [filteredArray, setFilteredArray] = useState(
    data.map((item) => item.name)
  )
  const [toggle, setToggle] = useState(false)
  const [cursor, setCursor] = useState(0)

  const dropDownRef = useRef()
  useClickOutside(dropDownRef, setToggle)

  const downArrowPressed = useKeyPressed('ArrowDown')
  const upArrowPressed = useKeyPressed('ArrowUp')
  const enterPressed = useKeyPressed('Enter')

  useEffect(() => {
    setTimeout(() => {
      if (toggle && downArrowPressed)
        setCursor((prevState) =>
          prevState < data.length - 1 ? prevState + 1 : prevState
        )
    }, 100)
  }, [downArrowPressed, cursor])

  useEffect(() => {
    setTimeout(() => {
      if (toggle && upArrowPressed)
        setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState))
    }, 100)
  }, [upArrowPressed, cursor])

  useEffect(() => {
    if (toggle && enterPressed) {
      handleSelection()
    }
  }, [enterPressed, cursor])

  const updateFilteredArray = (value) => {
    let filteredArr = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredArray(filteredArr.map((item) => item.name))
  }

  const handleChange = (e) => {
    setToggle(true)
    setCursor(0)
    setSelected(e.target.value)
    updateFilteredArray(e.target.value)
  }

  const handleSelection = () => {
    setSelected(filteredArray[cursor])
    updateFilteredArray(filteredArray[cursor])
    setCursor(0)
    setToggle(false)
  }

  return (
    <>
      {/* Search */}
      <div
        className='hover:cursor-pointer relative my-1 rounded-md'
        onClick={() => setToggle(!toggle)}
      >
        <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
          <svg
            className='cursor-pointer h-6 w-6 text-gray-500 '
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>

        <input
          type='text'
          name='selected'
          value={selected}
          placeholder='Search for Customer...'
          className='bg-white block w-full pl-10 py-1 text-lg border-2 border-blue-900 outline-blue-500 rounded-md'
          onChange={handleChange}
        />

        <div className='absolute right-2 inset-y-0 pl-3 flex items-center  pointer-events-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`h-6 w-6 text-gray-500 ${
              !toggle && 'transfrom rotate-90'
            }`}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </div>
      </div>

      {toggle && (
        <div
          className='bg-white cursor-pointer border-2 border-blue-500 rounded-sm'
          ref={dropDownRef}
        >
          {[...data]
            .filter((item) => filteredArray.includes(item.name))
            .map((item, index) => {
              return (
                <div
                  key={item.name}
                  className={`${cursor == index && 'bg-blue-500 text-white'} `}
                  onMouseOver={() => setCursor(index)}
                  onMouseDown={handleSelection}
                >
                  <span className='pl-3 font-medium'>{index}. &nbsp;</span>
                  <span className='pl-6'>{item.name}</span>
                </div>
              )
            })}
        </div>
      )}

      {/* <p>cursor {cursor}</p>
      <p>selected {selected}</p>
      <p>filteredArray {JSON.stringify(filteredArray)}</p> */}
    </>
  )
}

export default SearchSelect
