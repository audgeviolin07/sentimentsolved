
import Image from 'next/image'
import Cam from './cam.js'
import './globals.css'
import Link from 'next/link';

export default function Home() {
  return (
    <h1 >
    Read <Link href="/src/app/cam">this page!</Link>
  </h1>
  )
}
