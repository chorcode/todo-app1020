'use client'

import { useEffect, useState } from 'react'
import { loadTodos } from '@/lib/storage'

export default function TodoStats() {
    const [stats, setStats] = useState({ total: 0, completed: 0, rate: 0 })

    useEffect(() => {
        const todos = loadTodos()
        const total = todos.length
        const completed = todos.filter((todo) => todo.done).length
        const rate = total > 0 ? Math.round((completed / total) * 100) : 0
        setStats({ total, completed, rate })
    }, [])

    return (
        <div>
            <p>
                全 {stats.total} 件 / 完了 {stats.completed} 件 / 達成率 {stats.rate} %
            </p>
        </div>
    )
}