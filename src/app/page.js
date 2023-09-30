
import Image from 'next/image'
import Cam from './cam/page'
import './globals.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <div className='bg-[#EAE4E9] h-[500px] w-full relative top-[175px] overflow-hidden'>
        <div className='absolute left-[250px] top-[-325px]'>
          <Image 
          src={"/blob1.svg"}
          width={550}
          height={250}
          />
        </div>
        <div className='absolute left-[950px] top-[250px]'>
          <Image 
          src={"/blob2.svg"}
          width={550}
          height={250}/>
        </div>
        <Cam />
        <Link href="/cam">What</Link>
      </div>
    </main>
  );
}
