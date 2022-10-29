import React, {useEffect} from 'react'

export default function Admin(props) {

  useEffect(() => {document.title = props.title || "UI"}, [props.title])

  return (
    <>
      <h1>Title: {props.title}</h1>
    </>
  )
}