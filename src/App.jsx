import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  const persistData = (newList) => {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  const handleAddTodos = (newTodos) => {
    const newTodoList = [...todos, newTodos]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((todo, i) => i !== index)
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  const handleEditTodo = (index) => {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos){
      return
    }
      localTodos = JSON.parse(localTodos).todos
      setTodos(localTodos)
  }, [])

  return (
    <main>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </main>
  )
}

export default App
