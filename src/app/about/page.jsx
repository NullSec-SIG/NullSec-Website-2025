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
            <Image src="/Line 1.png" width={1081} height={1} alt="border" className="bottom-0 mx-auto w-4/5"/>
            <div className="flex flex-col items-center min-h-svh mt-10 mb-10">
                <h1 className="font-[IBMPlexSans] text-4xl font-bold mb-10">MEET THE TEAM</h1>
                <div className="flex flex-col w-4/5 gap-10">
                    <div className="flex flex-row justify-center items-center gap-15 flex-wrap">
                        <TeamCard name="RAVIN NAGPAL" role="President" picture="/team/Ravin.jpg" description="Ravin oversees general operations, with a particular focus on the publicity side of things. He is an avid fan of OSINT and steganography." />
                        <TeamCard name="DAKSH THAPAR" role="Vice-President" picture="/team/Daksh.jpg" description="Daksh oversees general operations, with a particular focus on the technical side of things. He also has a keen interest in programming, scripting and software engineering." />
                    </div>
                    <div className="flex flex-row justify-center items-center gap-15 flex-wrap">
                        <TeamCard name="TAN CHIN RAY" role="Head of Technology" picture="/team/Chin Ray.png" description="Chin Ray administers NullSec's servers, software and other digital infrastructure. He also helps coordinate content for NullSec's workshops and events." />
                        <TeamCard name="TAN JUN WEI" role="Tech EXCO" picture="/team/Jun Wei.jpg" description="Jun Wei works on the ideation and creation of content, including slides, materials and challenges. He has created the most CTF challenges individually in both YCEP 2025 and HNF 2025." />
                        <TeamCard name="DAMIAN KOH" role="Tech EXCO" picture="/team/Damian.jpg" description="Damian works on the ideation and creation of content, including slides, materials and challenges. He has great experience administering SIEM systems and web app penetration testing." />
                    </div>
                    <div className="flex flex-row justify-center items-center gap-15 flex-wrap">
                        <TeamCard name="QUAN YU" role="Head of SecOps" picture="/team/Quan Yu.jpg" description="Quan Yu coordinates NullSec's administrative tasks, including room booking, form creation and logistics. She came in clutch during the Kali workshop, successfully booking LT79 within a day's notice." />
                        <TeamCard name="RYAN TAN" role="SecOps EXCO" picture="/team/Ryan Tan.jpg" description="Ryan Tan mainly handles logistics and administrative matters, but also assisted in executing the OSINT workshop and challenge creation. He makes sure that you're never solving his OSINT challenges." />
                        <TeamCard name="RYAN LOW" role="SecOps EXCO" picture="/team/Ryan Low.jpg" description="Ryan Low is a Tech turned SecOps EXCO who now handles logistics and administrative matters. Being highly involved in GIAC, he has experience in system hacking, and is currently exploring AI." />
                    </div>
                    <div className="flex flex-row justify-center items-center gap-15 flex-wrap">
                        <TeamCard name="ALOYSIUS LUKE TAY SHI YUAN" role="Head of Publicity" picture="/team/Aloysius.jpg" description="Aloysius coordinates NullSec's publicity and administers NullSec's Instagram. He has an eye for the latest trends in social media which he uses for our reel production." />
                        <TeamCard name="RYAN WEE WEI YAN" role="Publicity EXCO" picture="/team/Ryan Wee.jpg" description="Ryan helps with the designing of publicity materials, including posters, stickers, and even this website. He also loves cybersecurity and plays the occasional CTF in his free time." />
                        <TeamCard name="POOK XUAN TONG" role="Publicity EXCO" picture="/team/Xuan Tong.jpg" description="Xuan Tong develops creative visuals for publicity, combining design skills and ideas to engage audiences and share content. She also has experience across a broad range of design work." />
                        <TeamCard name="KOH BOCK CHOW" role="Photographer" picture="/team/Bock Chow.jpg" description="Bock Chow captures and records eventful moments for publicity by combining communication and photography skills. He also has experience as a photographer in multiple events." />
                    </div>
                </div>
            </div>
        </div>
    )
}