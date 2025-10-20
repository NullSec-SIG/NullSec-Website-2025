"use client"

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function WorkshopCard({ name, image, date, time, status, description, location }) {
    const [hover, setHover] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)
    const router = useRouter();

    return (
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.6, once: true }} onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)} onClick={() => setHover(!hover)} className="md:min-w-[384px] md:max-w-[384px] h-[480px] w-4/5 rounded-2xl overflow-clip cursor-pointer relative">
            <motion.img src={`/events/${image}`} width={384} height={512} alt={name} initial={{ filter: "blur(0px)" }} animate={{ filter: hover ? "blur(6px)" : "blur(0px)" }} className="absolute rounded-2xl" />
            <div className="absolute min-h-1/2 w-full flex justify-center items-center">
                <motion.button initial={{ visibility: "hidden", opacity: 0 }} animate={{ visibility: hover ? "visible" : "hidden", opacity: hover ? 1 : 0 }} className="bg-[#101010] p-4 rounded-lg border-1 cursor-pointer" id="galleryButton" type="button" onClick={() => {console.log(image.split(".")[0]);router.push(`/gallery?event=${image.split(".")[0]}`)}}>
                    <label htmlFor="galleryButton" className="cursor-pointer">
                        OPEN IN GALLERY
                    </label>
                </motion.button>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: hover ? 1 : 0 }} className="bg-[#101010] absolute w-full min-h-1/2 bottom-0">
                <div className="flex flex-col m-6 gap-2">
                    <h3 className="text-2xl">{name}</h3>
                    {
                        status && (status === "upcoming") ? (
                            <>
                                <div className="bg-blue-500 px-3 rounded-md font-[IBMPlexSans] w-fit">Upcoming</div>
                            </>
                        ) : (
                            <>
                                <div className="bg-purple-500 px-3 rounded-md font-[IBMPlexSans] w-fit">Past</div>
                            </>
                        )
                    }
                    <p className="font-[IBMPlexSans] text-gray-400">{date} • {time} • {location}</p>
                    <p className="font-[IBMPlexSans]">{description}</p>
                </div>
            </motion.div>
        </motion.div>
    )
}