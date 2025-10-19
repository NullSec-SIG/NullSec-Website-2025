"use client"

import Image from "next/image";
import CountdownCard from "../components/countdownCard";
import { motion, steps, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export default function HNF2025Page() {
    const [isVisible, setIsVisible] = useState(true)

    const [playButtonHover, setPlayButtonHover] = useState(false)

    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (current => {
        return setIsVisible(current <= 400)
    }))

    return (
        <div className="flex flex-col">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="flex md:flex-row flex-col-reverse justify-center items-center min-h-svh md:gap-10 p-12">
                <div className="flex flex-col md:text-left text-center px-6">
                    <h1 className="md:text-4xl text-xl font-bold mb-5">Cybersecurity, gamified.</h1>
                    <h2 className="md:text-2xl text-md text-gray-400">Gain hands on experience in key areas like web, forensics and pwn.</h2>
                    <h2 className="md:text-2xl text-md text-gray-400 mt-2 mb-5">Plus a new HTB style boot2root infra hacking category.</h2>
                    <CountdownCard />
                    <div className="flex flex-row md:justify-start justify-center mt-5 gap-5">
                        <motion.a target="blank" href="https://hnf25.nullsecsig.com" onHoverStart={() => setPlayButtonHover(true)} onHoverEnd={() => setPlayButtonHover(false)} className="flex flex-row gap-2 border-2 border-[#02f053] text-[#02f053] hover:text-black hover:bg-[#02f053] active:text-black active:bg-[#02f053] rounded-md text-xl w-fit px-6 py-2 cursor-pointer select-none">
                            {
                                playButtonHover ? (
                                    <Image src="/HNF-flag-black.png" width={25} height={25} alt="hnf flag black" />
                                ) : (
                                    <Image src="/HNF-flag-green.png" width={25} height={25} alt="hnf flag green"/>
                                )
                            }
                            Play Now!
                        </motion.a>
                        <a target="blank" href="https://forms.cloud.microsoft/r/mPrGngMKdi" className="border-2 text-[#28c6f9] border-[#28c6f9] hover:text-black hover:bg-[#28c6f9] active:text-black active:bg-[#28c6f9] rounded-md text-xl w-fit px-6 py-2 cursor-pointer select-none">
                            Sign Up
                        </a>
                    </div>
                </div>
                <Image src="/HNF-logo.png" width={1500} height={1500} alt="hnf logo" className="w-2xl animate-pulse" />
            </motion.div>

            <motion.div animate={{ opacity: isVisible ? 1 : 0 }} className="md:absolute bottom-6 flex flex-col justify-center items-center w-full">
                <svg width={30} height={30} className="fill-gray-400 animate-bounce">
                    <path d="M15 23.75L7.5 16.25L9.25 14.5L15 20.2188L20.75 14.5L22.5 16.25L15 23.75ZM15 16.25L7.5 8.75L9.25 7L15 12.7188L20.75 7L22.5 8.75L15 16.25Z" />
                </svg>
                <p className="lg:text-lg md:text-lg text-sm text-gray-400">SCROLL FOR MORE DETAILS</p>
            </motion.div>

            <Image src="/Line 1.png" width={1081} height={1} alt="border" className="mt-20 mx-auto w-4/5" />

            <div className="flex flex-col items-center mt-10 min-h-svh">
                <h1 className="md:text-5xl text-3xl font-bold mb-10">DETAILS</h1>
                <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.8, once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-5 md:gap-x-14 md:w-4/5 items-start">
                    <h2 className="md:text-2xl text-xl font-bold md:text-right text-center">Start Date/Time</h2>
                    <h2 className="md:text-2xl text-xl md:text-left text-center">28 October 2025 9.00am</h2>

                    <h2 className="md:text-2xl text-xl font-bold md:text-right text-center">Scoreboard Freeze Date/Time</h2>
                    <h2 className="md:text-2xl text-xl md:text-left text-center">29 October 2025 4.00pm</h2>

                    <h2 className="md:text-2xl text-xl font-bold md:text-right text-center">End Date/Time</h2>
                    <h2 className="md:text-2xl text-xl md:text-left text-center">29 October 2025 5.00pm</h2>

                    <h2 className="md:text-2xl text-xl font-bold md:text-right text-center">Medium</h2>
                    <h2 className="md:text-2xl text-xl md:text-left text-center">Online (28 Oct), Physical (29 Oct)</h2>

                    <h2 className="md:text-2xl text-xl font-bold md:text-right text-center">Location</h2>
                    <h2 className="md:text-2xl text-xl md:text-left text-center">NP LT58C (29 Oct)</h2>

                    <h2 className="md:text-2xl text-xl font-bold md:text-right text-center">Challenge Types</h2>
                    <h2 className="md:text-2xl text-xl md:text-left text-center">Web, Infra, Pwn, Forensics, Misc, Crypto, Rev, OSINT</h2>

                    <h2 className="md:text-2xl text-xl font-bold md:text-right text-center">Categories</h2>
                    <h2 className="md:text-2xl text-xl md:text-left text-center">NP Students, Open</h2>
                </motion.div>
                <Image src="/Line 1.png" width={1081} height={1} alt="border" className="mt-20 mx-auto w-4/5" />
                <h1 className="md:text-5xl text-3xl font-bold my-10">HOW TO PLAY</h1>
                <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.2, once: true }} className="md:grid md:justify-items-center flex flex-col text-center md:w-4/5 w-full px-10 mb-10 gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
                    <div className="flex flex-col items-center md:border-1 rounded-2xl p-10 md:w-md gap-5">
                        <h2 className="font-bold text-3xl">01</h2>
                        <Image src="/hnf-step1.png" width={766} height={530} alt="hnf-step1" className="md:h-[330px]" />
                        <p className="text-2xl font-bold">Solve Challenges</p>
                        <p className="text-center">Do as many as you can once the CTF starts</p>
                    </div>
                    <div className="flex flex-col items-center md:border-1 rounded-2xl p-10 md:w-md gap-5">
                        <h2 className="font-bold text-3xl">02</h2>
                        <Image src="/hnf-step2.png" width={766} height={530} alt="hnf-step2" className="md:h-[330px]" />
                        <p className="text-2xl font-bold">Get Flags</p>
                        <p className="text-center bottom-0">{"The challenge will automatically give you a flag enclosed with HNF25{} if you solved it"}</p>
                    </div>
                    <div className="flex flex-col items-center md:border-1 rounded-2xl p-10 md:w-md gap-5">
                        <h2 className="font-bold text-3xl">03</h2>
                        <Image src="/hnf-step3.png" width={766} height={530} alt="hnf-step3" className="md:h-[330px]" />
                        <p className="text-2xl font-bold">Submit Flags and Rate</p>
                        <p className="text-center bottom-0">Each solve is worth 1000 points, subject to a logarithmic decay to a minimum of 250 based on the number of other successful solves</p>
                    </div>
                    <div className="flex flex-col items-center md:border-1 rounded-2xl p-10 md:w-md gap-5">
                        <h2 className="font-bold text-3xl">04</h2>
                        <Image src="/hnf-step4.png" width={766} height={530} alt="hnf-step4" className="md:h-[330px]" />
                        <p className="text-2xl font-bold">Compete For the Top</p>
                        <p className="text-center bottom-0">The team with the highest score by the end of the CTF wins</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}