import './globals.css'
import { Inter, Open_Sans } from 'next/font/google'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })
const open_sans = Open_Sans({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
    
          <Navbar />
          {children}
         <Footer />
      </body>
    </html>
  )
}


