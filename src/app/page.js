
import Image from 'next/image'
import Cam from './cam'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Cam />
    </main>
  )
}
