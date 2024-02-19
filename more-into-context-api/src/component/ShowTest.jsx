import React from 'react'
import { useTest } from '../context/textContext'

function ShowTest() {
    const {test, lightTheme, darkTheme} = useTest()
    console.log(useTest())
    console.log('ShowTest',test)
  return (
    <div>ShowTest</div>
  )
}

export default ShowTest