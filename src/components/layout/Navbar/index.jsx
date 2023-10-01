'use client';

import Image from 'next/image'
import Link from 'next/link'

import { usePathname } from 'next/navigation';

const MainNavbarVariant = () => {
    return (
        <div className={'flex justify-around items-center fixed w-full'}>
            <div className={'p-4 cursor-pointer'}>
                <Link
                href={'/'}
                >
                    <Image src="/templogo.svg" alt="Logo" width={40} height={50} />
                </Link>
                
            </div>

            <div className={'h-full'}>
                <ul className={'flex h-full  gap-8'}>
                    <li className={''}>
                       <Link href="/login">Login</Link>
                    </li>
                    <li className={''}>
                        <Link href="/register">Register</Link>
                    </li>
                    <li className={''}>
                        <Link href="/meeting/create">Create meeting</Link>
                    </li>
                    <li className={''}>
                        <Link href="/meeting/create">Open playground</Link>
                    </li>
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
}

export default function Navbar () {
    const pathname = usePathname()

    if (pathname in Navigations) {
        return Navigations[pathname]
    }

    return <MainNavbarVariant/>
}