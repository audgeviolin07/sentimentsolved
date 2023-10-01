'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Link } from 'react-router-dom';

//the href is the path you want to redirect to. The name is what it will be called
export const navigations= [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Meetings',
        href: '/',
    },
    {
        name: 'About Us',
        href: '/',
    },
]

export function Navbar(){
    return(
        <IterateItems/>
    );
}

function IterateItems(){
    return (
    <div className="bg-black w-full h-[80px] flex justify-around items-center fixed top-0 left-0">
        <div className={'h-full hidden items-center gap-4 text-md sm:flex'}>
        {navigations.map((value, index) => (
            <NavbarItem key={index} value={value} />
        ))}
        </div>
    </div>
    )
    
}


const NavbarItem = ({value}) => {
    const [hovered, setHovered] = useState(false);
    const onMouseEnter = () => setHovered(true);
    const onMouseLeave = () => setHovered(false);
    return (
        <Link
        href={value.href}
        className={'text-inactive-txt hover:text-white transition-colors pointer-events-auto cursor-pointer flex'}
        >
            <div className={'relative'}>
            {`${value.name}`}
                <div
                    className={`h-[1px] absolute bottom-1 left-[50%] translate-x-1/2 transition-all mx-auto bg-red-50 opacity-0 ${
                        (hovered && 'opacity-100 w-[80%]') || 'w-0'
                    }`}
                />
            </div>
        </Link>
    )
}