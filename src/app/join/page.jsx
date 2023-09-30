import { TypographyH2, TypographyP } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function JoinPage() {
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
                        <Input placeholder={'Name here'}/>
                    </div>
                    
                    <Button className={'w-full text-md'}>
                        Join room
                    </Button>
                </div>
            </section>

            <section className={'h-screen flex-1 bg-pastel-blue hidden lg:block'}>
            </section>
        </div>
    )
}