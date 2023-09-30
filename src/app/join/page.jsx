import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function JoinPage() {
    return (
        <section className={'h-screen flex items-center justify-center'}>
            <div className={'w-full flex items-center justify-center flex-col max-w-sm gap-4'}>
                <h1 className={'text-3xl font-bold'}>
                    Join this meeting?
                </h1>
                <Input label={'Test'}/>
                <Button className={'w-full text-md'}>
                    Join room
                </Button>
            </div>
        </section>
    )
}