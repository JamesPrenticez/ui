import React, { useState } from 'react'
import Select from '../components/common/Select'
import {SearchSelect} from '../components/common/SearchSelect'

const mockdata = [
  { label: 'one', value: '1' },
  { label: 'two', value: '2' },
  { label: 'three', value: '3' },
  { label: 'four', value: '4' },
  { label: 'five', value: '5' },
]

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
]

export default function Inputs(props) {
  document.title = 'inputs'

  const [selectedValue, setSelectedValue] = useState({ label: 'hi', value: 'hi' })
  const [value1, setValue1] = useState([options[0]])

  return (
    <>
      <h1>Title: {props.title}</h1>

      <Select
        options={mockdata}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        placeholder=''
      />

      {/* <SearchSelect
        multiple
        options={options}
        value={value1}
        onChange={o => setValue1(o)}
      /> */}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit sem, commodo vitae placerat elementum, consequat a magna. Vivamus efficitur augue id neque pretium, sit amet maximus magna mollis. Nullam iaculis ex nunc, eu consequat est porttitor quis. Suspendisse potenti. Morbi quis imperdiet metus. Nulla tincidunt nulla aliquet nisi maximus pharetra. Duis aliquet dolor mauris, a fringilla est condimentum at. Nullam tristique ligula ut tellus volutpat aliquet. Pellentesque sodales quis sem in interdum.
        Fusce volutpat lacus eu mattis scelerisque. Suspendisse nec tempus urna, eget luctus quam. In elementum quis purus eu finibus. Aliquam purus dui, ullamcorper et vehicula vel, malesuada in dolor. Nunc dignissim molestie velit id tincidunt. Vestibulum sed turpis sit amet ligula ultrices commodo. Fusce bibendum accumsan viverra.
        Etiam sit amet purus sed neque sollicitudin rutrum a eu quam. Proin quis odio quis ex pharetra elementum sit amet id augue. Nunc ultrices tellus elit, ut dapibus magna dapibus vitae. Sed facilisis sed sem id egestas. Aenean egestas, mauris ut luctus feugiat, justo metus placerat justo, eu sodales elit erat nec lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla non pulvinar velit, et hendrerit nibh. Morbi et felis eros. Vivamus ornare lectus et malesuada imperdiet. Nulla facilisi. Vivamus in vestibulum lorem, sit amet pulvinar ligula. Integer tempor nisl et orci ultrices tincidunt. Nunc dictum elementum elit. Nullam vel nulla et enim consequat volutpat. Sed in vulputate nunc, vel fermentum turpis. Morbi et erat id risus dapibus convallis.
        Vestibulum sollicitudin orci eget libero suscipit, in dapibus tortor maximus. Etiam tristique, leo sed cursus pharetra, lectus lacus semper massa, quis laoreet tellus orci eu diam. Vivamus justo sem, efficitur ut aliquet a, placerat ut nisi. Praesent malesuada a augue eget aliquet. Sed finibus sem sed augue iaculis, ac imperdiet enim tincidunt. Nam dignissim a lectus eget ornare. Suspendisse eleifend sem eu venenatis finibus. Praesent blandit metus vel libero gravida tempor. Cras non vulputate mauris. Suspendisse volutpat ante mi, non ullamcorper eros consectetur ut. Suspendisse semper gravida libero, ac varius ligula. Aliquam erat volutpat. Pellentesque non posuere lacus. Sed ut eleifend mi. Proin at mauris a sem venenatis tempus. Aenean interdum iaculis neque, eu dictum risus tincidunt id.
        Duis semper, ante et laoreet laoreet, sem orci accumsan dolor, nec condimentum ante neque quis neque. Curabitur ac turpis vitae arcu semper commodo in sed risus. Quisque tincidunt dapibus luctus. Nullam orci neque, ultrices finibus metus nec, finibus cursus metus. Morbi ut ultrices sem. Donec consequat neque a purus mollis iaculis. Etiam sit amet semper risus, eget ultricies eros. Fusce blandit nisi nec velit sodales sagittis. Integer pharetra dolor vitae turpis congue, et facilisis tortor placerat.
      </p>

    </>
  )
}

//https://beta.reactjs.org/learn/updating-arrays-in-state
