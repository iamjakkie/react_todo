import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  const handleAddTodos = (newTodos) => {
    const newTodoList = [...todos, newTodos]
    setTodos(newTodoList)
  }

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((todo, i) => i !== index)
    setTodos(newTodoList)
  }

  const handleEditTodo = (index) => {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  return (
    <main>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </main>
  )
}

export default App
