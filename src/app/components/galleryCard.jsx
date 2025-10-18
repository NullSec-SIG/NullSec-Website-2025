"use client"

import { motion } from "motion/react";
import Image from "next/image";

export default function GalleryCard({ fileName }) {
    console.log(`/events/${fileName}`)

    return (
        <motion.div className="w-[360px] h-[240px] rounded-2xl overflow-clip cursor-pointer relative">
            <Image src={`/events/${fileName}`} width={480} height={320} alt="image"/>
        </motion.div>
    )
}