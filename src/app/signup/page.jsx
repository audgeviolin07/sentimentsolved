import { TypographyH2, TypographyP } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignUpPage() {
    return (
        <div className={'h-screen flex flex-col items-center justify-center lg:flex-row'}>
            <section className={'h-screen flex-1 flex items-center justify-center'}>
                <div className={'w-full flex items-center justify-center flex-col lg:max-w-sm gap-4'}>

                    <TypographyP>
                        Create An Account
                    </TypographyP>

                    <TypographyH2>
                        Sign up
                    </TypographyH2>
                    <div className={'w-full mt-4'}>
                        <Input placeholder={'Email Address'} type="email"/>
                    </div>
                    <div className={'w-full mt-4'}>
                        <Input placeholder={'Create Password'} type="password"/>
                    </div>
                    <div className={'w-full mt-4'}>
                        <Input placeholder={'Confirm Password'} type="password"/>
                    </div>
                    
                    <Button className={'w-full text-md'}>
                        Sign up
                    </Button>
                    <Button className={'w-full text-md bg-[#1877F2] flex items-center justify-center'}>
                        <span> Sign In With Google </span>
                        <img
                            src="/google.svg"
                            className="w-8 h-8 ml-2"
                        />
                    </Button>
                </div>
            </section>

            <section className={'h-screen flex-1 bg-pastel-blue hidden lg:block'}>
            </section>
        </div>
    )
}
