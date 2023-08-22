import './globals.css'
import { Work_Sans } from 'next/font/google'

const work_sans = Work_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Nyukeit | Front-End Developer - UX Designer - DevOps Engineer',
  description: 'I love creating beautiful yet functional designs with a purpose of engagement, exuberance & existence.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={work_sans.className}>{children}</body>
    </html>
  )
}
