import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <section>
                <Image
                    src="/svg/logo.svg"
                    alt="Bespoke Programming Logo"
                    className="col-span-12 size-12 md:size-16 lg:size-20"
                    width={80}
                    height={80}
                />
            </section>
        </nav>
    )
}
