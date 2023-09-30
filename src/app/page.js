import Image from 'next/image'
import Cam from './cam/page'
import './globals.css'
import Link from 'next/link';
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4 } from '@/components/typography';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <div className='border-[1px] h-[500px] w-full relative top-[175px] border-dash'>
        <div className='absolute left-[250px] top-[-300px] min-w-[550px] '>
          <Image 
          src={'/blob2.svg'}
          width={550}
          height={250}
          />
        </div>
        <div className='absolute left-[450px] top-[350px] min-w-[550px]'>
          <Image 
          src={'/blob (1).svg'}
          width={550}
          height={250}
          />
        </div>

        <div className='absolute left-[1000px] top-[200px] min-w-[550px]'>
          <Image 
          src={'/blob1.svg'}
          width={550}
          height={250}/>
        </div>
        <div className='bg-[#E2ECE9] absolute left-[300px] h-[150px] w-[150px] top-[50px] rounded-full'>
        </div>
        <Cam />
        <Link href="/cam">What</Link>
        <div className='flex absolute flex-col items-center w-full justify-center top-[150px] gap-16'>
          <TypographyH2>Expression AI</TypographyH2>
          
          <TypographyH3>An AI made to help people with ASD understand emotions</TypographyH3>
        </div>
        
      </div>
    </main>
  )
}
