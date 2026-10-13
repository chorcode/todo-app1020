'use client'

import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const visibleTodos =
    filter === 'active' ? todos.filter((todo) => !todo.done) : filter === 'done' ? todos.filter((todo) => todo.done) : todos
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
  function clearDone() {
    if (!window.confirm('完了済みのTODOを削除しますか？')) return
    setTodos(todos.filter((todo) => !todo.done))
  }
  const doneCount = todos.filter((todo) => todo.done).length
  const remaining = todos.length - doneCount

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoFilter value={filter} onChange={setFilter} />
      <TodoList todos={visibleTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
      {todos.length > 0 && (
        <p>
          全 {todos.length} 件 / 完了 {doneCount} 件 / 残り {remaining} 件
        </p>
      )}
      <button onClick={clearDone} disabled={doneCount === 0}>
        完了済みを削除
      </button>
    </div>
  )
}
