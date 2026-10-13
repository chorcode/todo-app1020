import './globals.css'

export const metadata = {
  title: 'TODOアプリ',
  description: 'Next.js で作る TODO アプリ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
