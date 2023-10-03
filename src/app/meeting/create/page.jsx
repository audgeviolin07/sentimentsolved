import { TypographyH2, TypographyP } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CreateMeetingPage() {
    return (
        <div className={'h-screen flex flex-col items-center justify-center lg:flex-row'}>
            <section className={'h-screen flex-1 flex items-center justify-center'}>
                <div className={'w-full flex items-center justify-center flex-col lg:max-w-sm gap-4'}>

                    

                    <TypographyH2>
                        Create a meeting
                    </TypographyH2>
                    
                    <TypographyP>
                        Harness the power of AI with our meeting services.
                    </TypographyP>

                    <Link href={'/meeting/generate'} className={'w-full'}>
                        <Button className={'w-full text-md'}>
                            Create
                        </Button>
                    </Link>
                    

                    <Button variant={'link'} href={'/bruh'}>
                        <Link
                        href={'/meeting/join'}
                        >
                            Join room
                        </Link>
                    </Button>
                </div>
            </section>

            <section className={'h-screen flex-1 bg-pastel-blue hidden lg:block'}>
            </section>
        </div>
    )
}