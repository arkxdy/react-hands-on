import React from 'react'
import useLeft from '../hooks/useLeft'

function Arrow(left:string[],right:string[]) {
   
    const newLeft = useLeft(left,right,['1','4'],true)
    console.log(newLeft)
  return (
    <div>Arrow</div>
  )
}

export default Arrow;