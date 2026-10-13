'use client'

import dynamic from 'next/dynamic'

const TodoStats = dynamic(() => import('@/components/TodoStats'), {
  ssr: false,
  loading: () => <p>読み込み中…</p>,
})

export default function StatsPage() {
    return (
    <main className="container">
      <h1>統計</h1>
      <TodoStats />
    </main>
    )
}