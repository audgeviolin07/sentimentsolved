'use client';
import { TypographyH2, TypographyP } from '../../../components/typography';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";


export default function JoinPage() {
    const [roomId, setRoomId] = useState();
    const [name, setName] = useState('');
    return (
        <div className={'h-screen flex flex-col items-center justify-center lg:flex-row'}>
            <section className={'h-screen flex-1 flex items-center justify-center'}>
                <div className={'w-full flex items-center justify-center flex-col lg:max-w-sm gap-4'}>

                    <TypographyP>
                        You are invited to join a meeting by <span className={'font-semibold'}>John Doe</span>
                    </TypographyP>
                    

                    <TypographyH2>
                        Join this meeting?
                    </TypographyH2>
                    <div className={'w-full mt-8'}>
                    <Input placeholder={'Room Code'} type="room code" onChange ={e => setRoomId(e.target.value)} name="code" />
                    </div>
                    <div className={'w-full'}>
                        <Input placeholder={'Name'} type="name" onChange ={e => setName(e.target.value)} name="name" />
                    </div>
                    
                    <Button className={'w-full text-md'}>
                        <Link href={`/room?room=${roomId}?&name=${name}`}>Join Room</Link>
                    </Button>
                </div>
            </section>

            <section className={'h-screen flex-1 bg-pastel-blue hidden lg:block'}>
            </section>
        </div>
    )
}