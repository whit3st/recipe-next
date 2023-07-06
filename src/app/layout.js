import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Recipe App',
  description: 'Recipe app by Alican Akyıldız',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + 'flex flex-col items-center justify-center pt-10 px-3 bg-bg'}>
        {children}
        </body>
    </html>
  )
}
