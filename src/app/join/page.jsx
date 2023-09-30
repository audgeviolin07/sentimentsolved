import { TypographyH2 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function JoinPage() {
    return (
        <section className={'h-screen flex items-center justify-center'}>
            <div className={'w-full flex items-center justify-center flex-col max-w-sm gap-4'}>
                <TypographyH2>
                    Join this meeting?
                </TypographyH2>
                <Input label={'Test'}/>
                <Button className={'w-full text-md'}>
                    Join room
                </Button>
            </div>
        </section>
    )
}