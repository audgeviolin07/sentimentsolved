import Image from 'next/image'

export default function Navbar () {
    return (
        <div>
            <div>
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
            </div>
        </div>
    )
}