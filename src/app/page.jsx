"use client"

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { useEffect, useState } from "react";
import WorkshopCard from "./components/workshopCard";
import GlitchedTitle from "./components/glitchedTitle";

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
    const [superSmallSize, setSuperSmallSize] = useState(false);
    const [asciiCompletedCount, setAsciiCompletedCount] = useState(0);
    const [asciiPulseEnabled, setAsciiPulseEnabled] = useState(false);

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
            setLargeSize(window.innerWidth >= 1536 && window.innerHeight >= 860)
            setSuperSmallSize(window.innerHeight < 720)
        }
        changeSize();
        window.addEventListener("resize", changeSize);
        return () => window.removeEventListener("resize", changeSize);
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
        <div className="px-6 min-h-full flex-1 overflow-clip">
            <div className="flex flex-col justify-center items-center min-h-svh overflow-clip">
                {/* <Image src="/Logo ASCII.svg" width={644} height={968} alt="logo-ascii" /> */}
                {ascii.split("\n").map((line, i) => {
                    const totalLines = ascii.split("\n").length;
                    return (
                        <motion.pre
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.05, delay: i * 0.05 }}
                            onAnimationComplete={() => {
                                setAsciiCompletedCount((c) => {
                                    const next = c + 1;
                                    if (next >= totalLines) setAsciiPulseEnabled(true);
                                    return next;
                                })
                            }}
                            className={`font-[CommitMono] font-bold ${largeSize ? "text-lg/4" : superSmallSize ? "text-[0.5rem]/2" : "text-xs/3"}  text-[#BFDBF7] ${asciiPulseEnabled ? 'animate-pulse' : ''}`}>
                            {line}
                        </motion.pre>
                    )
                })}
                <GlitchedTitle />
                <h2 className="font-[IBMPlexSans] lg:text-2xl md:text-xl text-md text-center mt-8">The Cybersecurity Special Interest Group of Ngee Ann Polytechnic.</h2>

                <motion.div animate={{ opacity: isVisible ? 1 : 0 }} className="absolute bottom-6 flex flex-col justify-center items-center">
                    <svg width={30} height={30} className="fill-gray-400 animate-bounce">
                        <path d="M15 23.75L7.5 16.25L9.25 14.5L15 20.2188L20.75 14.5L22.5 16.25L15 23.75ZM15 16.25L7.5 8.75L9.25 7L15 12.7188L20.75 7L22.5 8.75L15 16.25Z" />
                    </svg>
                    <p className="lg:text-lg md:text-lg text-sm text-gray-400">SCROLL TO SEE WHAT'S UP</p>
                </motion.div>
            </div>

            <Image src="/Line 1.png" width={1081} height={1} alt="border" className="mt-20 mx-auto w-4/5" />

            <div className="flex flex-col items-center min-h-svh mt-10 gap-10">
                <h1 className="font-bold font-[IBMPlexSans] md:text-5xl text-3xl">EVENTS</h1>
                <div className="flex flex-col md:w-4/5 md:items-start items-center h-full">
                    <div className="flex flex-row md:justify-start justify-center items-center whitespace-pre select-none">
                        <h3 className="md:text-2xl text-lg">FILTER: </h3>
                        <div className="grid grid-cols-2 auto-cols-max border-white border-2 overflow-clip rounded-3xl">
                            <input id="past" checked={pastChecked} className="text-lg text-center sr-only peer/past" type="checkbox" onChange={(e) => { setPastChecked(e.target.checked); e.target.checked & setUpcomingChecked(false) }} />
                            <label htmlFor="past" className="text-center md:px-5 px-3 py-1 md:text-lg text-sm border-r-2 hover:bg-[#04AF98] peer-checked/past:bg-[#04AF9B] transition-all duration-100 cursor-pointer">
                                PAST
                            </label>
                            <input id="upcoming" checked={upcomingChecked} className="md:text-lg text-sm text-center sr-only peer/upcoming" type="checkbox" onChange={(e) => { setUpcomingChecked(e.target.checked); e.target.checked & setPastChecked(false) }} />
                            <label htmlFor="upcoming" className="text-center md:px-5 px-3 py-1 md:text-lg text-sm hover:bg-[#04AF98] peer-checked/upcoming:bg-[#04AF9B] transition-all duration-100 cursor-pointer">
                                UPCOMING
                            </label>
                        </div>
                    </div>
                    <motion.div className="w-full h-full mt-10 mb-20">
                        <div className="grid w-full h-full md:justify-items-start justify-items-center gap-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(384px, 1fr))' }}>
                            {
                                workshops && workshops.map((workshop) => {
                                    return <WorkshopCard key={workshop.name} name={workshop.name} image={workshop.image} date={workshop.date} time={workshop.time} status={workshop.status} description={workshop.description} location={workshop.location} />
                                })
                            }
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
