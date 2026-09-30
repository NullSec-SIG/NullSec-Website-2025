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
                        <TeamCard name="RIAN TAN" role="President" picture="/team/Rian.png" description="" />
                        <TeamCard name="AATHITHYA JEGATHEESAN" role="Vice-President" picture="/team/Aathithya.png" description="" />
                    </div>
                    <div className="flex flex-row justify-center items-center gap-15 flex-wrap">
                        <TeamCard name="EBEN LIM" role="Head of Technology" picture="/team/Eben.png" description="" />
                        <TeamCard name="SEAN CHUA" role="Tech EXCO" picture="/team/Sean.jpg" description="" />
                        <TeamCard name="GUAN JIA HONG" role="Tech EXCO" picture="/team/JiaHong.jpg" description="" />
                        <TeamCard name="ALEX KOH" role="Tech EXCO" picture="/team/Alex.jpg" description="" />
                        <TeamCard name="JAMES LI" role="Tech EXCO" picture="/team/James.jpg" description="" />
                    </div>
                    <div className="flex flex-row justify-center items-center gap-15 flex-wrap">
                        <TeamCard name="TRISTAN CHAY" role="Head of SecOps" picture="/team/Tristan.png" description="" />
                        <TeamCard name="CHEE WEN YONG" role="SecOps EXCO" picture="/team/WenYong.jpg" description="" />
                        <TeamCard name="LUCAS POON" role="SecOps EXCO" picture="/team/Lucas.jpg" description="" />
                        <TeamCard name="SERAPHIM TAN" role="SecOps EXCO" picture="/team/Seraphim.jpg" description="" />
                        <TeamCard name="DARIUS TAN" role="SecOps EXCO" picture="/team/NULL.png" description="" />
                    </div>
                    <div className="flex flex-row justify-center items-center gap-15 flex-wrap">
                        <TeamCard name="HARRIS SUFYAN" role="Head of Publicity" picture="/team/Harris.png" description="" />
                        <TeamCard name="NG JING ZHONG" role="Publicity EXCO" picture="/team/JingZhong.jpg" description="" />
                        <TeamCard name="JAYDEN NG" role="Publicity EXCO" picture="/team/Jayden.jpg" description="" />
                        <TeamCard name="CADEN FAY" role="Publicity EXCO" picture="/team/Caden.jpg" description="" />
                        <TeamCard name="ARAVIND NANDAKUMAR" role="Publicity EXCO" picture="/team/NULL.png" description="" />
                    </div>
                </div>
            </div>
        </div>
    )
}