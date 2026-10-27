export function countRemaining(todos) {
  return todos.filter((todo) => !todo.done).length
}
