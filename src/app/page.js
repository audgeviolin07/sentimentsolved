
import Image from 'next/image'
import Cam from './cam/page'
import './globals.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Cam />
     <Link href="/cam">What</Link>
    </main>
  )
}
