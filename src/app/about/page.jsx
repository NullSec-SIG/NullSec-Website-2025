"use client"

import Image from "next/image";
import TeamCard from "../components/teamCard";
import { useEffect, useState } from "react";

export default function AboutPage() {
    const [isTall, setIsTall] = useState(false)

    useEffect(() => {
        const check = () => setIsTall(typeof window !== 'undefined' && window.innerHeight >= 800)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    return (
        <div className={`px-6 min-h-full flex-1 ${isTall ? "mt-20": "mt-15"}`}>
            <div className={`flex flex-col justify-center items-center ${isTall ? "min-h-[80svh]" : "min-h-svh"}`}>
                <h1 className="font-[IBMPlexSans] text-4xl font-bold mb-6">ABOUT US</h1>
                <Image src="/IMG_5617-Enhanced-NRe.jpg" width={6000} height={4000} alt="about us" className="lg:w-[40vw] w-2xl" />
                <p className={`text-xl font-[IBMPlexSans] ${isTall ? "my-10" : "mt-5 mb-5"} md:text-center md:w-3/5`}>We are a community of cybersecurity enthusiasts united by a shared passion for learning and innovation. Our mission is to foster knowledge sharing, skill development, and collaboration through a range of engaging activities and initiatives within the cybersecurity field.</p>
            </div>
            <Image src="/Line 1.png" width={1081} height={1} alt="border" className="bottom-0 mx-auto w-4/5 select-none"/>
            <div className="flex flex-col items-center min-h-svh mt-10 mb-10">
                <h1 className="font-[IBMPlexSans] text-4xl font-bold mb-10">MEET THE TEAM</h1>
                <div className="flex flex-col w-4/5 gap-10">
                    <div className="flex flex-row justify-center items-center gap-15 flex-wrap">
                        <TeamCard name="Tan Jun Yu Rian" role="President" picture="" description="" />
                        <TeamCard name="Aathithya Jegatheesan" role="Vice-President" picture="" description="" />
                    </div>
                    <div className="flex flex-row justify-center items-center gap-15 flex-wrap">
                        <TeamCard name="Lim Yi Ren Eben" role="Head of Technology" picture="" description="" />
                        <TeamCard name="Li Yanjie James" role="Tech EXCO" picture="" description="" />
                        <TeamCard name="Guan Jiahong" role="Tech EXCO" picture="" description="" />
                        <TeamCard name="Koh Zihao Alexander" role="Tech EXCO" picture="" description="" />
                        <TeamCard name="Sean Ulric Buguina Chua" role="Tech EXCO" picture="" description="" />
                    </div>
                    <div className="flex flex-row justify-center items-center gap-15 flex-wrap">
                        <TeamCard name="Chay Yu Hung Tristan" role="Head of SecOps" picture="" description="" />
                        <TeamCard name="Bellam Nandakumar Aravind" role="SecOps EXCO" picture="" description="" />
                        <TeamCard name="Chee Wen Yong" role="SecOps EXCO" picture="" description="" />
                        <TeamCard name="Poon Kar Ngai Lucas" role="SecOps EXCO" picture="" description="" />
                        <TeamCard name="Darius Tan Kaifeng" role="SecOps EXCO" picture="" description="" />
                    </div>
                    <div className="flex flex-row justify-center items-center gap-15 flex-wrap">
                        <TeamCard name="Muhammad Harris Sufyan Bin Azhari" role="Head of Publicity" picture="" description="" />
                        <TeamCard name="Ng Jing Zhong" role="Publicity EXCO" picture="" description="" />
                        <TeamCard name="Caden Anthony Fay Teng Aik" role="Publicity EXCO" picture="" description="" />
                        <TeamCard name="Tan Hai Ye, Seraphim" role="Publicity EXCO" picture="" description="" />
                        <TeamCard name="Jayden Ng Kwan Zi" role="Publicity EXCO" picture="" description="" />
                    </div>
                </div>
            </div>
        </div>
    )
}