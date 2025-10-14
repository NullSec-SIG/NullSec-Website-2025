"use client"

import Image from "next/image";
import { motion } from "motion/react";

export default function TeamCard({ name, role, picture, description }) {
    return (
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.6, once: true }} className="relative rounded-lg overflow-clip h-[577px] w-[336px]">
            <Image src={picture} width={2552} height={3828} alt={name}/>
            <div className="bg-[#181818] h-full w-[150%] rotate-[8deg] absolute bottom-[-290px] right-[-120px]"></div>
            <div className="flex flex-col absolute top-5/9 px-6">
                <h2 className="text-3xl">{name}</h2>
                <h3 className="text-md text-gray-400 mb-5">{role}</h3>
                <p>{description ? description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in eleifend odio, in eleifend elit. Pellentesque mollis ornare tellus sit."}</p>
            </div>
        </motion.div>
    )
}