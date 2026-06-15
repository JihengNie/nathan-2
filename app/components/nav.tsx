import Link from 'next/link'
import Image from "next/image";


export default function Navigation() {
    return (
        <div className='sticky top-0 left-0 w-full grid grid-cols-3 px-20'>
            <ul className='flex items-center gap-20'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                {/* <li>
                    <Link href="/swiper">Swiper</Link>
                </li> */}
            </ul>

            <div className='flex justify-center items-center'>
                <Link href="/">
                    <div className='aspect-square h-[60px] w-[60px]'>
                        <Image
                            className="flex h-full w-full object-contain"
                            src="/images/nathan-sketch.png"
                            alt="Simpson Wave"
                            width={30}
                            height={30}
                            unoptimized
                        />
                    </div>
                </Link>
            </div>
        </div>
    )
};