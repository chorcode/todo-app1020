'use client'

import { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { loadTodos } from '@/lib/storage'

const STORAGE_KEY = 'todos'

export default function TodoApp() {
  const [todos, setTodos] = useState(loadTodos)
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
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

  function clearAll() {
    if (!window.confirm('すべての TODO を削除しますか？')) return
    setTodos([])
  }


  const total = todos.length
  const completed = todos.filter((todo) => todo.done).length
  const remaining = total - completed

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <p>全 {total} 件 / 完了 {completed} 件 / 残り {remaining} 件</p>
      <button onClick={clearAll} disabled={todos.length === 0}>
        すべて削除
      </button>
    </div>
  )
}
