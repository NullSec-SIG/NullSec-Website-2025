"use client"

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(true);

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
        console.log(current)
        return setIsVisible(current <= 300)
    }))

    const past = useRef();
    const upcoming = useRef();
    
    useEffect(() => {
        
    }, [past, upcoming])

    return (
        <div className="px-6 min-h-full flex-1">
            <div className="flex flex-col justify-center items-center min-h-svh">
                {/* <Image src="/Logo ASCII.svg" width={644} height={968} alt="logo-ascii" /> */}
                {ascii.split("\n").map((line, i) => {
                    return (
                        <motion.pre key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.05, delay: i * 0.05 }} className="font-[CommitMono] font-bold 3xl:text-2xl/7 xl:text-xl/6 lg:text-lg/5 md:text-md/4 text-sm/4 text-[#BFDBF7] ">
                            {line}
                        </motion.pre>
                    )
                })}
                <div className="flex flex-row mt-12">
                    <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold whitespace-pre">This is </h1>
                    <span className="lg:text-6xl md:text-5xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#04AF9B] to-white from-40%">NullSec.</span>
                </div>
                <h2 className="font-[IBMPlexSans] lg:text-2xl md:text-xl text-md text-center mt-8">The Cybersecurity Special Interest Group of Ngee Ann Polytechnic.</h2>

                <motion.div animate={{ opacity: isVisible ? 1 : 0 }} className="absolute bottom-10 flex flex-col justify-center items-center">
                    <svg width={30} height={30} className="fill-gray-400">
                        <path d="M15 23.75L7.5 16.25L9.25 14.5L15 20.2188L20.75 14.5L22.5 16.25L15 23.75ZM15 16.25L7.5 8.75L9.25 7L15 12.7188L20.75 7L22.5 8.75L15 16.25Z" />
                    </svg>
                    <p className="lg:text-lg md:text-lg text-sm text-gray-400">SCROLL TO SEE WHAT'S UP</p>
                </motion.div>
            </div>

            <div className="flex flex-col items-center min-h-svh mt-20 gap-10">
                <h1 className="font-bold font-[IBMPlexSans] text-5xl">WORKSHOPS</h1>
                <div className="flex flex-col w-4/5">
                    <div className="flex flex-row items-center whitespace-pre">
                        <h3 className="text-2xl">FILTER: </h3>
                        <div className="grid grid-cols-2 auto-cols-max border-white border-2 overflow-clip rounded-3xl">
                            <input id="past" className="text-lg text-center sr-only peer/past" type="checkbox" />
                            <label htmlFor="past" className="text-center px-5 text-lg border-r-2 peer-checked/past:bg-[#04AF9B]">
                                PAST
                            </label>
                            <input id="upcoming" className="text-lg text-center sr-only peer/upcoming" type="checkbox" />
                            <label htmlFor="upcoming" className="text-center px-5 text-lg peer-checked/upcoming:bg-[#04AF9B]">
                                UPCOMING
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-between flex-wrap w-full h-full mt-10 gap-10">
                        <div className="bg-red-100 w-[384px] h-[384px]">

                        </div>
                        <div className="bg-red-100 w-[384px] h-[384px]">

                        </div>
                        <div className="bg-red-100 w-[384px] h-[384px]">

                        </div>
                        <div className="bg-red-100 w-[384px] h-[384px]">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
