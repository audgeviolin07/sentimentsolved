import { TypographyH2, TypographyP } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
    return (
        <div className={'h-screen flex flex-col items-center justify-center lg:flex-row'}>
            <section className={'h-screen flex-1 flex items-center justify-center'}>
                <div className={'w-full flex items-center justify-center flex-col lg:max-w-sm gap-4'}>

                    <TypographyP>
                        Welcome back! Please log in to your account.
                    </TypographyP>

                    <TypographyH2>
                        Log In
                    </TypographyH2>
                    <div className={'w-full mt-4'}>
                        <Input placeholder={'Email'} type="email"/>
                    </div>
                    <div className={'w-full mt-4'}>
                        <Input placeholder={'Password'} type="password"/>
                    </div>
                    
                    <Button className={'w-full text-md'}>
                        Log In
                    </Button>
                </div>
            </section>

            <section className={'h-screen flex-1 bg-pastel-blue hidden lg:block'}>
            </section>
        </div>
    )
}
