export const metadata = {
  title: 'このアプリについて | TODOアプリ',
}

export default function AboutPage() {
  return (
    <main className="container">
      <h1>このアプリについて</h1>
      <p>Next.js の練習用 TODO アプリです。</p>
      <ul>
        <li>Next.js（App Router）</li>
        <li>データはブラウザの localStorage に保存</li>
      </ul>
    </main>
  )
}
