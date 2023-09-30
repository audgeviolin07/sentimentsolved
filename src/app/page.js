import Image from 'next/image'
import Cam from './cam/page'
import './globals.css'
import Link from 'next/link';
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4 } from '@/components/typography';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <div className='border-[1px] h-[500px] w-full min-w-full relative top-[175px] border-dash overflow-hidden'>
        <div className='bg-[#EAE4E9] absolute h-[750px] w-[750px] left-[250px] top-[-300px] rounded-full blur-lg opacity-40'></div>
        <div className='bg-[#FFF1E6] absolute h-[750px] w-[750px] left-[450px] top-[350px] rounded-full blur-lg opacity-20'></div>
        <div className='bg-[#FDE2E4] absolute h-[750px] w-[750px] left-[1000px] top-[200px] rounded-full blur-lg opacity-20'></div>
        <div className='bg-[#E2ECE9] absolute h-[750px] w-[750px] left-[500px] top-[50px] rounded-full blur-lg opacity-20'></div>
        <div className='bg-[#FAD2E1] absolute h-[750px] w-[750px] left-[0px] top-[150px] rounded-full blur-lg opacity-20'></div>
        <div className='bg-[#CDDAFD] absolute h-[750px] w-[750px] left-[1450px] top-[-150px] rounded-full blur-lg opacity-20'></div>
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
