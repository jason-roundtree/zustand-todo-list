import { useState } from 'react'
import useStore from './zustandStore'
import { v4 as uuid } from 'uuid'
import './App.css'

function App() {
  const [todoText, setTodoText] = useState('')
  const todos = useStore(({ todos }) => todos)
  const addTodo = useStore(({ addTodo }) => addTodo)

  function handleAddTodo() {
    const todo = {
      id: uuid(),
      text: todoText
    }
    addTodo(todo)
    setTodoText('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Zustand Todo List</h1>
        <input 
          type='text'
          placeholder='Add todo...'
          value={todoText}
          onChange={e => setTodoText(e.target.value)}
        />

        <button onClick={handleAddTodo}>
          add to list
        </button>

        <ul>
          {todos.map(todo => {
            return (
              <li key={todo.id}>
                <p>{todo.text}</p>
              </li>
            )
          })}
        </ul>
      </header>
    </div>
  );
}

export default App
