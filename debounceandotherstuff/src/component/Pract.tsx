import React from 'react'
import List from './List'
import Arrow from './Arrow'

function Pract() {
    const left:string[] = ['1','2','3']
    const right:string[] = ['4']
  return (
    <div>
        <div>
            Prac
        </div>
        <List
        {...left}
        ></List>
        <Arrow
        {...left}{...right}
        ></Arrow>
        <List
        {...right}
        ></List>
    </div>
  )
}

export default Pract