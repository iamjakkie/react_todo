import { useState } from 'react'

export default function TodoInput (props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    return (
        <header>
            <input value={todoValue} placeholder="What needs to be done?" onChange={(e) => {setTodoValue(e.target.value)}}/>
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}