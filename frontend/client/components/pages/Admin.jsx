import React, {useEffect, useState} from 'react'


const mockdata = [
  {title: 'monday'},
  {title: 'tuesday'},
  {title: 'wednesday'},
  {title: 'thursday'},
  {title: 'friday'},
]

export default function Admin(props) {
  useEffect(() => {document.title = props.title || "UI"}, [props.title])

  const [data, setData] = useState(mockdata)

  const handleClick = () => {
    const newValue = {title: 'saturday'}
    setData(data => [...data, newValue])
  }

  const handleChange = (e) => {
    console.log('e.target', e.target)
    e.target.style.backgroundColor = "green"
  }

  return (
    <>
      <h1>Title: {props.title}</h1>

        {data.map((item, index) => {
          return(
            <div 
              key={index}
              className="bg-red-500"
              onChange={(e) => handleChange(e)}
            >
              {item.title}
            </div>
          )})
        }
        <button
          className='p-2 bg-blue-500'
          onClick={() => handleClick()}
        >
          Add Saturday
        </button>
    </>
  )
}

//https://beta.reactjs.org/learn/updating-arrays-in-state