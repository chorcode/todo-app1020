import { countRemaining } from './todos'

test('未完了の TODO の数を返す', () => {
  const todos = [
    { id: '1', text: '牛乳を買う', done: false },
    { id: '2', text: 'レポート提出', done: true },
    { id: '3', text: '部屋の掃除', done: false },
  ]
  const result = countRemaining(todos)
  expect(result).toBe(2)
})
