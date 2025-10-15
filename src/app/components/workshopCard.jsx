import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

export default function WorkshopCard({ name, image, date, time, status }) {
    const [hover, setHover] = useState(false)

    return (
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.6, once: true }} onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)} className="w-[384px] h-[480px] rounded-2xl overflow-clip relative">
            <motion.img src={`/events/${image}`} width={384} height={512} alt={name} initial={{ filter: "blur(0px)" }} animate={{ filter: hover ? "blur(6px)" : "blur(0px)" }} className="absolute"/>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: hover ? 1 : 0 }} className="bg-[#101010] absolute w-full h-2/5 bottom-0">

            </motion.div>
        </motion.div>
    )
}