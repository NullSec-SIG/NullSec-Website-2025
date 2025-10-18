"use client"

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react";
import WorkshopCard from "./components/workshopCard";
import { useRouter } from "next/navigation";

export default function Home() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(true);

    const [pastChecked, setPastChecked] = useState(false)
    const [upcomingChecked, setUpcomingChecked] = useState(false)

    const ascii = `
                                          ++++                                         
                                     ++++++++++++++++++++++++++                        
                                 +++++  ++                +++++                        
                             +++++     ++             +++++ +++                        
                            +++       +++          +++++   ++++                        
                            ++++      ++        ++++      ++++                         
                            ++ +++   ++     +++++         ++++                         
                            ++   ++ +++  ++++            ++++                          
                            ++    ++++++++              ++ ++                          
                           +++     +++                 ++ +++                          
                           ++     ++ ++++             +++ ++                           
                           ++    ++     +++          ++   ++                           
                           ++   +++       ++++      +++  +++                           
                           ++  +++          ++++    ++   ++                            
                           ++ +++              ++++++   +++                            
                           +++++               +++++    ++                             
                           ++++       ++++++++++ +++    ++                             
                           +++++++++++++        ++++   ++                              
                           +++++               +++++   ++                              
                            +++++++++++        ++ ++  +++                              
                               +++    ++++++  ++  ++  ++                               
                                 ++++      +++++  ++  ++                               
                                   +++        +++ ++  ++                               
                                      +++      ++ +  ++                                
                                        +++    ++++  ++                                
                                          ++++  +++ ++                                 
                                            ++++ + +++                                 
                                               ++++++                                  
                                                 +++                                   

`

    useMotionValueEvent(scrollY, "change", (current => {
        return setIsVisible(current <= 400)
    }))

    const [rawWorkshops, setRawWorkshops] = useState(null);
    const [workshops, setWorkshops] = useState([]);

    const [largeSize, setLargeSize] = useState(false);

    useEffect(() => {
        const fetchData = () => {
            fetch("/events/events.json")
                .then(response => response.json())
                .then(result => {
                    result.reverse()
                    setRawWorkshops(result)
                    setWorkshops(result)
                })
        }
        if (!rawWorkshops) fetchData()

        const changeSize = () => {
            if (window.screen.width >= 1536 && window.screen.height >= 860) setLargeSize(true)
        }
        changeSize();
    }, [])

    useEffect(() => {
        if (rawWorkshops)
            setWorkshops(rawWorkshops.filter((event) => {
                if (!pastChecked && !upcomingChecked) return event
                else if (pastChecked) return event.status === "past" ? event : null
                else return event.status === "upcoming" ? event : null
            }))
    }, [pastChecked, upcomingChecked])

    return (
        <div className="px-6 min-h-full flex-1">
            <div className="w-[98vw] p-3 mt-30 bg-yellow-200 rounded-2xl absolute flex flex-row justify-center items-center gap-5">
                <Image src="/workman-1024-4285793479.png" width={50} height={50} alt="construction" />
                <p className="text-black text-2xl">This website is still under development. Stay tuned for updates!</p>
            </div>
            <div className="flex flex-col justify-center items-center min-h-svh">
                {/* <Image src="/Logo ASCII.svg" width={644} height={968} alt="logo-ascii" /> */}
                {ascii.split("\n").map((line, i) => {
                    return (
                        <motion.pre key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.05, delay: i * 0.05 }} className={`font-[CommitMono] font-bold ${largeSize ? "text-lg/4" : "text-xs/3"}  text-[#BFDBF7] animate-pulse`}>
                            {line}
                        </motion.pre>
                    )
                })}
                <div className="flex flex-row mt-12">
                    <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold whitespace-pre">This is </h1>
                    <span className="lg:text-6xl md:text-5xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#04AF9B] to-white from-40%">NullSec.</span>
                </div>
                <h2 className="font-[IBMPlexSans] lg:text-2xl md:text-xl text-md text-center mt-8">The Cybersecurity Special Interest Group of Ngee Ann Polytechnic.</h2>

                <motion.div animate={{ opacity: isVisible ? 1 : 0 }} className="absolute bottom-6 flex flex-col justify-center items-center">
                    <svg width={30} height={30} className="fill-gray-400 animate-bounce">
                        <path d="M15 23.75L7.5 16.25L9.25 14.5L15 20.2188L20.75 14.5L22.5 16.25L15 23.75ZM15 16.25L7.5 8.75L9.25 7L15 12.7188L20.75 7L22.5 8.75L15 16.25Z" />
                    </svg>
                    <p className="lg:text-lg md:text-lg text-sm text-gray-400">SCROLL TO SEE WHAT'S UP</p>
                </motion.div>
            </div>

            <div className="flex flex-col items-center min-h-svh mt-20 gap-10">
                <h1 className="font-bold font-[IBMPlexSans] text-5xl">WORKSHOPS</h1>
                <div className="flex flex-col w-4/5">
                    <div className="flex flex-row items-center whitespace-pre select-none">
                        <h3 className="md:text-2xl text-xl">FILTER: </h3>
                        <div className="grid grid-cols-2 auto-cols-max border-white border-2 overflow-clip rounded-3xl">
                            <input id="past" checked={pastChecked} className="text-lg text-center sr-only peer/past" type="checkbox" onChange={(e) => { setPastChecked(e.target.checked); e.target.checked & setUpcomingChecked(false) }} />
                            <label htmlFor="past" className="text-center md:px-5 px-3 py-1 md:text-lg text-sm border-r-2 peer-checked/past:bg-[#04AF9B] transition-all duration-100 cursor-pointer">
                                PAST
                            </label>
                            <input id="upcoming" checked={upcomingChecked} className="text-lg text-center sr-only peer/upcoming" type="checkbox" onChange={(e) => { setUpcomingChecked(e.target.checked); e.target.checked & setPastChecked(false) }} />
                            <label htmlFor="upcoming" className="text-center md:px-5 px-3 py-1 md:text-lg text-sm peer-checked/upcoming:bg-[#04AF9B] transition-all duration-100 cursor-pointer">
                                UPCOMING
                            </label>
                        </div>
                    </div>
                    <motion.div className="flex basis-auto flex-wrap w-full h-full mt-10 mb-20 2xl:gap-10 gap-5">
                        {
                            workshops && workshops.map((workshop) => {
                                return <WorkshopCard key={workshop.name} name={workshop.name} image={workshop.image} date={workshop.date} time={workshop.time} status={workshop.status} description={workshop.description} location={workshop.location} />
                            })
                        }
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
