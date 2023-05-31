import './globals.css'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import NavBar from './Components/NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gilberto Asuaje',
  description: 'Portfolio Gilberto Asuaje',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
