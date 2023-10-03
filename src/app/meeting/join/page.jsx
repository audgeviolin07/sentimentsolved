'use client';
import { TypographyH2, TypographyP } from '../../../components/typography';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import Image from 'next/image';

export default function JoinPage() {
    const [roomId, setRoomId] = useState('');
    const [name, setName] = useState('');
    return (
        <div className={'h-screen flex flex-col items-center justify-center lg:flex-row'}>
          
            <section className={'h-screen flex-1 flex items-center justify-center'}>
                <div className={'w-full flex items-center justify-center flex-col lg:max-w-sm gap-4'}>

                    <TypographyH2>
                        Join this meeting?
                    </TypographyH2>
                    <div className={'w-full mt-8'}>
                    <Input placeholder={'Room Code'} type="room code" value={roomId} onChange ={e => setRoomId(e.target.value)} name="code" />
                    </div>
                    <div className={'w-full'}>
                        <Input placeholder={'Name'} type="name" value={name} onChange ={e => setName(e.target.value)} name="name" />
                    </div>

                    <Link href={`/room?room=${roomId}?&name=${name}`}
                    className={'w-full'}
                    >
                        <Button className={'w-full text-md'}>
                            Join Room
                        </Button>
                    </Link>
                    
                </div>
            </section>

            <section className={'h-screen flex-1 bg-pastel-blue hidden lg:block'}>
            </section>
        </div>
    )
}