'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/typography";
import { useState } from "react";

export default function generateMeeting(){
    const roomId = Math.random().toString(36).substring(2, 7);
    const [name, setName] = useState('');
    
    return(
        <div className={'h-screen flex flex-col items-center justify-center lg:flex-row'}>
            <section className={'h-screen flex-1 flex items-center justify-center'}>
                <div className={'w-full flex items-center justify-center flex-col max-w-md lg:max-w-sm gap-4'}>
                    <div className={'text-center w-full mt-4'}>
                        <TypographyH2>Room Code: {roomId}</TypographyH2>
                        <TypographyP>
                            Share this link with your friends to invite them to your room: <br />
                            <Link href={`/room?room=${roomId}?&name=${name}`}>https://sentimentsolved.com/room?room={roomId}</Link>
                        </TypographyP>
                    </div>
                    <div className={'w-full'}>
                        <Input placeholder={'Name'} type="name" value={name} onChange ={e => setName(e.target.value)} name="name" />
                    </div>
                    <Button className={'w-full text-md'}>
                        <Link href={`/room?room=${roomId}?&name=${name}`}>Join Room</Link>
                    </Button>
                </div>
            </section>
        </div>
        
    )

}