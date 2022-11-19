import React, { useEffect, useState } from 'react'
import Select from '../common/Select'

const mockdata = [
  { label: 'one', value: '1' },
  { label: 'two', value: '2' },
  { label: 'three', value: '3' },
  { label: 'four', value: '4' },
  { label: 'five', value: '5' },
]

export default function Inputs(props) {
  document.title = 'inputs'

  const [selected, setSelectedValue] = useState({ label: '', value: '' })

  return (
    <>
      <h1>Title: {props.title}</h1>

      <Select
        options={mockdata}
        value={selected}
        setSelectedValue={setSelectedValue}
        placeholder=''
      />
    </>
  )
}

//https://beta.reactjs.org/learn/updating-arrays-in-state
