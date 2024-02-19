
import React, { useEffect, useState } from 'react'
import useSearch from '../hooks/useSearch'

function SearchBar() {
    const [val, setVal] = useState('')
    const data = useSearch(val);
    const [output, setOutput] = useState('')

    

  return (
    <>
        <input
        type='text'
        onChange={(e) => (setVal(e.target.value))}></input>
        <span>{data}</span>
    </>
    
  )
}

export default SearchBar