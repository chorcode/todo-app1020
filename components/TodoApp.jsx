'use client'

import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  function addTodo(text) {
    const newTodo = { id: crypto.randomUUID(), text, done: false }
    setTodos([...todos, newTodo])
  }
  function toggleTodo(id) {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)))
  }
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const remaining = todos.filter((todo) => !todo.done).length
  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <p>残り {remaining} 件</p>
    </div>
  )
}
