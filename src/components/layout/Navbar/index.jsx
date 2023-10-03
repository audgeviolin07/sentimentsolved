'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link'

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const MainNavbarVariant = () => {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
    })

    return (
        <div className={`flex justify-around items-center fixed w-full transition-colors z-10 ${scroll > 10 ? 'bg-white' : 'bg-transparent'}`}>
            <div className={'p-2 cursor-pointer'}>
                <Link
                href={'/'}
                className={'flex items-center gap-4'}
                >
                    <Image src="/templogo.svg" alt="Logo" width={25} height={35} />
                    sentimentSolved
                </Link>
            </div>

            <div className={'h-full text-black text-[.93rem]'}>
                <ul className={'flex h-full items-center gap-8'}>
                    
                    <Button
                    variant={'ghost'}
                    className={'hover:bg-medium-purple-200'}
                    >
                        <Link
                        href={'/meeting/join'}
                        >
                            Join meeting
                        </Link>
                        
                    </Button>
                    <Button
                    variant={'ghost'}
                    className={'hover:bg-medium-purple-200'}
                    >
                        <Link
                        href={'/meeting/create'}
                        >
                            Create meeting
                        </Link>
                    </Button>
                    <Button>
                        <Link
                        href={'/register'}
                        >
                            Register
                        </Link>
                        
                    </Button>
                </ul>
            </div>
        </div>
    )
}

const LoginNavbarVariant = () => {
    return (
        <div className={'flex justify-start px-8 items-center fixed w-full'}>
            <div className={'p-4'}>
            <Link
                href={'/'}
                >
                    <Image src="/templogo.svg" alt="Logo" width={40} height={50} />
                </Link>
            </div>
            <div>
                
            </div>
        </div>
    )
}

const Navigations = {
    '/': <MainNavbarVariant/>,
    '/login': <LoginNavbarVariant/>,
    '/register': <LoginNavbarVariant/>,
    '/meeting/create': <LoginNavbarVariant/>,
    '/meeting/join': <LoginNavbarVariant/>,
}

export default function Navbar () {
    const pathname = usePathname()

    if (pathname in Navigations) {
        return Navigations[pathname]
    }

    return <MainNavbarVariant/>
}