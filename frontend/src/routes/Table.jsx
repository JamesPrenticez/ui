import React, { useEffect, useState } from 'react'
import { QueryClient, useQuery } from '@tanstack/react-query'

import { number2words } from '../utilities/number2words'

import { fetchListItems } from '../fetchers/listItems'

// const mockdata = [
//   {id: 1, title: 'one'},
//   {id: 2, title: 'two'},
//   {id: 3, title: 'three'},
//   {id: 4, title: 'four'},
//   {id: 5, title: 'five'}
// ]

export default function Table(props) {
  document.title = props.title

  const { isError, isSuccess, isLoading, data, error } = useQuery({
    queryKey: ['listItems', 1],
    queryFn: fetchListItems,
    retry: 10,
    staleTime: 60000,
  })

  useEffect(() => {
    console.log('Component Mounted')
  }, [])

  // const [lastItemAddedId, setLastItemAddedId] = useState(null)
  // const [counter, setCounter] = useState(data?.length)

  // const [items, setItems] = useState(data)

  // const addItem = () => {
  //   let nextId = counter + 1
  //   console.log('nextId', nextId)
  //   let newItem = {id: nextId, title: number2words(nextId)}

  //   setItems(items => [...items, newItem])

  //   setLastItemAddedId(newItem.id)
  //   setCounter(newItem.id)
  // }

  if (isLoading) {
    console.log('Loading...')
    return <div>Loading...</div>
  }

  if (isSuccess) {
    console.log('Success...')
  }

  if (isError) {
    console.log('Error...')
    return <div>Error...</div>
  }

  return (
    <>
      <h1>Title: {props.title}</h1>

      {data &&
        data.map((item) => {
          return (
            <p
              key={item.id}
              //className={`bg-red-500 hover:bg-blue-500 ${lastItemAddedId == item.id && 'animate-flash1'}`}
            >
              {item.title}
            </p>
          )
        })}

      {/* <button className='p-2 bg-blue-500' onClick={() => addItem()}>
        Add
      </button> */}
    </>
  )
}

//https://beta.reactjs.org/learn/updating-arrays-in-state
