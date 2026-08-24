"use client"

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import GalleryIndividualCard from "./galleryIndividualCard";

export default function GalleryCard({ fileName, data }) {
    const [showIndividualCard, setShowIndividualCard] = useState(false)

    return (
        <div>
            <motion.div className="w-[360px] h-60 rounded-2xl overflow-clip cursor-pointer relative" onClick={() => setShowIndividualCard(true)}>
                <Image src={`/events/${fileName}`} width={360} height={240} alt="image" />
            </motion.div>
            {
                showIndividualCard && (
                    <GalleryIndividualCard fileName={fileName} showIndividualCard={showIndividualCard} setShowIndividualCard={setShowIndividualCard} data={data}/>
                )
            }
        </div>
    )
}