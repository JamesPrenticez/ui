import React, {useEffect} from 'react'

export default function Home(props) {

  useEffect(() => {document.title = props.title || "UI"}, [props.title])

  return (
    <>
      <h1>Title: {props.title}</h1>
    </>
  )
}