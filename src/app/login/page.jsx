'use client';

import { TypographyH2, TypographyP } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

import { signIn } from 'next-auth/react'

export default function LoginPage() {

    const googleSignIn = () => {
        signIn('google', {
            redirect: false,
            callbackUrl: `http://localhost:3000`,
        })
    }

    const emailSignIn = () => {
        signIn('email-password')
    }

    return (
        <div className={'h-screen flex flex-col items-center justify-center lg:flex-row'}>
            <section className={'h-screen flex-1 flex items-center justify-center'}>
                <div className={'w-full flex items-center justify-center flex-col max-w-md lg:max-w-sm gap-4'}>

                    <TypographyP>
                        Welcome back! Please log in to your account.
                    </TypographyP>

                    <TypographyH2>
                        Log In
                    </TypographyH2>
                    <div className={'w-full mt-4'}>
                        <Input placeholder={'Email'} type="email" name="email"/>
                    </div>
                    <div className={'w-full'}>
                        <Input placeholder={'Password'} type="password" name="password" />
                    </div>
                    
                    <Button className={'w-full text-md'}>
                        Log In
                    </Button>
                    <div className={'flex flex-row w-full gap-4 items-center'}>
                        <div className={'w-full flex-1 h-px bg-gray-200'}/>
                        <TypographyP>
                            or
                        </TypographyP>
                        <div className={'w-full flex-1 h-px bg-gray-200'}/>
                    </div>
                        
                    <Button onClick={googleSignIn} className={'w-full bg-transparent border text-pastel-blue hover:bg-gray-50 text-md border-pastel-blue flex items-center justify-center'}>
                        
                        <Image src={'/google.svg'} width={20} height={20} className={'mr-2'}/>
                        <span> Sign In With Google </span>
                    </Button>

                    <TypographyP>
                        Don't have an account? <Button variant={'link'} className={'text-pastel-blue font-semibold pl-1 text-md'}><Link href={'/register'}>Register</Link></Button>
                    </TypographyP>
                </div>
            </section>

            <section className={'h-screen flex-1 bg-pastel-blue hidden lg:block'}>
            </section>
        </div>
    )
}
