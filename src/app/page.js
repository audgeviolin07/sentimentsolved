import Image from 'next/image'
import './globals.css'
import { TypographyH2, TypographyH3, TypographyH1, TypographyP } from '@/components/typography';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      {<Image
      src={'/blurry.svg'}
      alt={'Background'}

      width={1000}
      height={1000}
      className={'w-full pointer-events-none h-screen absolute top-0 left-0 object-cover select-none'}
  />}
      <div className='h-screen flex items-center justify-center w-full relative'>
       
        <div className='flex flex-col gap-4 max-w-2xl'>
          <div className={'flex flex-col gap-4'}>
            <TypographyH3 className={'bg-medium-purple-200 w-fit p-2 px-3 rounded-md text-xl text-medium-purple-900'}>sentimentSolved</TypographyH3>
            <TypographyH1>Envision a world of emotion</TypographyH1>
          </div>

          <TypographyP className={'text-lg'}>
            A platform to assist individuals with social-emotional agnosia in interpreting the world around them.
            We use machine learning to analyze the sentiment of real-time video input, and provide
            a visual representation of the emotional state of the user.
          </TypographyP>


          <div className={'flex items-center gap-4'}>
            <Link href={'/app'}>

              <Button>
                <TypographyP>Get Started</TypographyP>
              </Button>
            </Link>
            <Link href={'https://github.com/audgeviolin07/sentimentsolved'}>
              <Button className={'flex items-center gap-2'}>
                <Image
                  src={'/github.svg'}
                  alt={'GitHub'}
                  width={24}
                  height={24}
                  className={''}
                />
                Source

              </Button>
            </Link>
          </div>
          <hr className={'border-medium-purple-200'} />
          <div className={'flex flex-col gap-2'}>
            <TypographyH2 className={''}>How it works</TypographyH2>
            <TypographyP>
              The user's face is captured via webcam and analyzed using a machine learning model.
              The model outputs a sentiment score for each of the 7 basic emotions (anger, disgust, fear, happiness, sadness, surprise, and neutral).
              The sentiment scores are then mapped to a color palette, and the resulting color is displayed on the screen.
            </TypographyP>
          </div>
          
        </div>
      </div>
    </main>
  )
}
