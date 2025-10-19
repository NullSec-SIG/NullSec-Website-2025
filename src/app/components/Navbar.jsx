"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "motion/react"
import { useEffect, useState } from "react"

export default function Navbar() {
    const router = useRouter()
    const [isWide, setIsWide] = useState(false)

    useEffect(() => {
        const check = () => setIsWide(typeof window !== 'undefined' && window.innerWidth >= 640)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    return (
        <div>
            <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="fixed w-full max-h-[10vh] z-50">
                <div className="lg:m-5 md:m-5 m-3 flex flex-row justify-between items-center bg-white/10 rounded-2xl drop-shadow-2xl backdrop-blur-sm p-5">
                    {isWide ? (
                        <Image src="/Home Logo.svg" width={180} height={36} alt="logo" className="cursor-pointer hover:fill-gray-400 md:w-[180px] md:h-[36px] w-[120px] h-[24px]" onClick={() => router.push("/")} />
                    ) : (
                        <svg width="28" height="41" viewBox="0 0 54 79" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={() => router.push("/")}>
                            <g clipPath="url(#clip0_79_56)">
                                <path d="M22.5012 0.808105L3.49195 9.99435L0.308472 49.8681" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M3.27508 10.0159L13.6901 24.5797L13.907 24.1767L0.268799 50.028" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M0.268799 49.5942L37.3371 78.2543" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M29.2532 57.1807L37.3371 78.2543" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M35.6262 40.894L37.3371 78.2543" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M53.7037 3.91528L37.3372 78.2543" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M22.5012 0.808105L53.7036 3.91531" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M13.6902 24.5797L22.5013 0.808105" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M53.7037 3.91528L13.6902 24.5797" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M35.6262 40.8941L53.7036 3.91528" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M13.6902 24.5798L35.6263 40.8942" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M0.268799 49.5942L35.6262 40.894" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M29.4364 57.6607L0.268799 49.5942" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M35.6262 40.894L29.4364 57.6606" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                            </g>
                            <defs>
                                <clipPath id="clip0_79_56">
                                    <rect width="54" height="78" fill="white" transform="translate(0 0.500488)" />
                                </clipPath>
                            </defs>
                        </svg>
                    )}
                    <div className="flex flex-row items-center text-center gap-8 pr-3">
                        <div className="cursor-pointer text-gray-300 hover:text-gray-100 active:text-gray-400" onClick={() => router.push("/hnf2025")}>HACK N FLAG</div>
                        <div className="cursor-pointer text-gray-300 hover:text-gray-100 active:text-gray-400" onClick={() => router.push("/gallery")}>GALLERY</div>
                        <div className="cursor-pointer text-gray-300 hover:text-gray-100 active:text-gray-400" onClick={() => router.push("/about")}>ABOUT</div>
                    </div>
                </div>
            </motion.div>
            {/* <div className="w-full max-h-[10vh] flex flex-row justify-center items-center mt-28 absolute">
                <div className="lg:mx-5 md:mx-5 mx-3 p-3 w-full bg-yellow-200 rounded-2xl flex flex-row justify-center items-center gap-5">
                    <Image src="/workman-1024-4285793479.png" width={50} height={50} alt="construction" />
                    <p className="text-black text-2xl">This website is still under development. Stay tuned for updates!</p>
                </div>
            </div> */}
        </div>
    )
}