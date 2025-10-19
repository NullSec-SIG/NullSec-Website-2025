"use client"

import Image from "next/image"
import { motion } from "motion/react"

export default function SocialsFooter() {
    return (
        <div className="flex flex-col items-center mb-15 gap-10">
            <Image src="/Line 1.png" width={1081} height={1} alt="border" className="mx-auto w-4/5" />
            <h1 className="md:text-5xl text-3xl font-bold font-[IBMPlexSans]">FIND US ONLINE!</h1>
            <div className="flex md:flex-row flex-col px-6 md:gap-14 gap-11 w-full">
                <div className="flex flex-col justify-end md:items-end items-center gap-11 flex-wrap md:w-1/2 w-full">
                    <motion.a initial={{ y: 0 }} whileHover={{ y: -5 }} href="mailto:nullsec.sig@gmail.com" target="blank" className="flex flex-row items-center border-[#F7C3BE] border-1 rounded-sm cursor-pointer md:w-fit w-full">
                        <Image src="/email.png" width={37.5} height={50} alt="email" className="ml-3 md:w-[37.5px] w-[30px]" />
                        <div className="border-[#F7C3BE] border-1 h-[49.5px] mx-3"></div>
                        <p className="text-[#F7C3BE] md:text-xl text-sm mr-3">Send us an email!</p>
                    </motion.a>
                    <motion.a initial={{ y: 0 }} whileHover={{ y: -5 }} href="https://github.com/NullSec-SIG" target="blank" className="flex flex-row items-center border-[#D9D9D9] border-1 rounded-sm cursor-pointer md:w-fit w-full">
                        <Image src="/github.png" width={37.5} height={50} alt="github" className="ml-3 md:w-[37.5px] w-[30px]" />
                        <div className="border-[#D9D9D9] border-1 h-[49.5px] mx-3"></div>
                        <p className="text-[#D9D9D9] md:text-xl text-sm mr-3">View our projects on GitHub!</p>
                    </motion.a>
                </div>
                <div className="flex flex-col justify-start md:items-start items-center gap-11 flex-wrap md:w-1/2 w-full">
                    <motion.a initial={{ y: 0 }} whileHover={{ y: -5 }} href="https://instagram.com/nullsec.sig" target="blank" className="flex flex-row items-center border-[#F7BEDC] border-1 rounded-sm cursor-pointer md:w-fit w-full">
                        <Image src="/instagram.png" width={37.5} height={50} alt="instagram" className="ml-3 md:w-[37.5px] w-[30px]" />
                        <div className="border-[#F7BEDC] border-1 h-[49.5px] mx-3"></div>
                        <p className="text-[#F7BEDC] md:text-xl text-sm mr-3">Follow us on Instagram!</p>
                    </motion.a>
                    <motion.a initial={{ y: 0 }} whileHover={{ y: -5 }} href="https://discord.gg/PEkgGHWjDq" target="blank" className="flex flex-row items-center border-[#E0E3FF] border-1 rounded-sm cursor-pointer md:w-fit w-full">
                        <Image src="/discord.png" width={37.5} height={50} alt="discord" className="ml-3 md:w-[37.5px] w-[30px]" />
                        <div className="border-[#E0E3FF] border-1 h-[49.5px] mx-3"></div>
                        <p className="text-[#E0E3FF] md:text-xl text-sm mr-3">Join our Discord!</p>
                    </motion.a>
                </div>
            </div>
        </div>
    )
}