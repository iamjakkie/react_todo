import React from 'react'

export default function TodoCard(props) {
    const {children} = props
    return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
        </div>
    </li>
  )
}
