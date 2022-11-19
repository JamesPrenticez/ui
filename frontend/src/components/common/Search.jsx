import React, { useState } from 'react'

export default function Search() {
  const [query, setQuery] = useState('')

  const searchClick = () => {
    if (query) {
      requestSearch(query)
    }
  }

  const updateQuery = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <input
        type='text'
        name='search'
        placeholder='Search...'
        value={query}
        onChange={updateQuery}
      />

      <button onClick={searchClick}>Go</button>
    </div>
  )
}
