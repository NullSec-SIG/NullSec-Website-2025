"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "motion/react"

export default function Navbar() {
    const router = useRouter()

    return (
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="fixed w-full z-50">
            <div className="lg:m-5 md:m-5 m-3 flex flex-row justify-between items-center bg-white/10 rounded-2xl drop-shadow-2xl backdrop-blur-sm p-5">
                <Image src="/Home Logo.svg" width={180} height={36} alt="logo" className="cursor-pointer hover:fill-gray-400 lg:w-[180px] lg:h-[36px] md:w-[180px] md:h-[36px] w-[120px] h-[24px]" onClick={() => router.push("/")} />
                <div className="flex flex-row items-center gap-8 pr-3">
                    <div className="cursor-pointer text-gray-300 hover:text-gray-100 active:text-gray-400" onClick={() => router.push("/gallery")}>GALLERY</div>
                    <div className="cursor-pointer text-gray-300 hover:text-gray-100 active:text-gray-400" onClick={() => router.push("/about")}>ABOUT</div>
                </div>
            </div>
        </motion.div>
    )
}