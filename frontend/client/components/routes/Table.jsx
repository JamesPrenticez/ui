import React, {useEffect, useState} from 'react'
import { number2words } from '../../../utilities/number2words'

const mockdata = [
  {id: 1, title: 'one'},
  {id: 2, title: 'two'},
  {id: 3, title: 'three'},
  {id: 4, title: 'four'},
  {id: 5, title: 'five'}
]

export default function Table(props) {
  useEffect(() => {document.title = props.title || "UI"}, [props.title])

  const [data, setData] = useState(mockdata)
  const [lastItemAddedId, setLastItemAddedId] = useState(null)
  const [counter, setCounter] = useState(mockdata.length)

  const addItem = () => {
    let nextId = counter + 1
    console.log('nextId', nextId)
    let newItem = {id: nextId, title: number2words(nextId)}

    setData(data => [...data, newItem])
    
    setLastItemAddedId(newItem.id)
    setCounter(newItem.id)
  }


  return (
    <>
      <h1>Title: {props.title}</h1>

        {data.map((item, index) => {
          return(
            <div 
              key={index}
              className={`bg-red-500 hover:bg-blue-500 ${lastItemAddedId == item.id && 'animate-flash1'}`}
            >
              {item.title}
            </div>
          )})
        }
        <button
          className='p-2 bg-blue-500'
          onClick={() => addItem()}
        >
          Add
        </button>
    </>
  )
}

//https://beta.reactjs.org/learn/updating-arrays-in-state