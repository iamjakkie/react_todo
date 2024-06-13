import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {
    let todos = [
        'Project 1',
        'Project 2'
    ]
  return (
    <ul className='main'>
        {todos.map((todo, index) => {
            return (
                <TodoCard key={index}>
                    <p>{todo}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}
