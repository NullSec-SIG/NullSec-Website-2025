"use client"

import { motion } from "motion/react";
import Image from "next/image";

export default function GalleryCard({ fileName }) {
    console.log(`/events/${fileName}`)

    return (
        <motion.div className="w-[640px] h-[960px] rounded-2xl overflow-clip cursor-pointer relative">
            <Image src={`/events/${fileName}`} width={640} height={960} alt="image"/>
        </motion.div>
    )
}