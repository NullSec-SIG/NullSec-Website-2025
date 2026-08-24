import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

export default function GalleryIndividualCard({ fileName, showIndividualCard, setShowIndividualCard, data }) {

    const [file, setFile] = useState(fileName)
    const [index, setIndex] = useState(data.indexOf(file))
    
    const [isLoading, setIsLoading] = useState(true)

    const changePicture = (direction) => {
        let newIndex;

        if (index === 0 && direction === -1)
            newIndex = data.length - 1
        else if (index === data.length - 1 && direction === 1)
            newIndex = 0
        else newIndex = index + direction

        setFile(data[newIndex])
        setIndex(newIndex)

        setIsLoading(true)
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 0.5 }} className="fixed inset-0 z-50 flex flex-col items-center bg-black/80 select-none" onClick={() => setShowIndividualCard(false)}>
            <div className="flex items-center top-0 w-full min-h-12 max-h-12 px-3 m-2" onClick={e => e.stopPropagation()}>
                <a className="w-12 h-12 hover:bg-gray-600 active:bg-gray-700 rounded-lg flex justify-center items-center cursor-pointer" href={`/events/${file}`} download>
                    {/* Download button */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V15.0858L7.70711 11.7929C7.31658 11.4024 6.68342 11.4024 6.29289 11.7929C5.90237 12.1834 5.90237 12.8166 6.29289 13.2071L11.2929 18.2071C11.6834 18.5976 12.3166 18.5976 12.7071 18.2071L17.7071 13.2071C18.0976 12.8166 18.0976 12.1834 17.7071 11.7929C17.3166 11.4024 16.6834 11.4024 16.2929 11.7929L13 15.0858V3ZM5 20C4.44772 20 4 20.4477 4 21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20H5Z" fill="#ffffff" />
                    </svg>
                </a>
                <h1 className="text-center w-full">{file}</h1>
                <div className="w-12 h-12 hover:bg-gray-600 active:bg-gray-700 rounded-lg flex justify-center items-center cursor-pointer" onClick={() => setShowIndividualCard(false)}>
                    {/* Close button */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.2097 4.3871L4.29289 4.29289C4.65338 3.93241 5.22061 3.90468 5.6129 4.2097L5.70711 4.29289L12 10.585L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L13.415 12L19.7071 18.2929C20.0676 18.6534 20.0953 19.2206 19.7903 19.6129L19.7071 19.7071C19.3466 20.0676 18.7794 20.0953 18.3871 19.7903L18.2929 19.7071L12 13.415L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L10.585 12L4.29289 5.70711C3.93241 5.34662 3.90468 4.77939 4.2097 4.3871L4.29289 4.29289L4.2097 4.3871Z" fill="#ffffff" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center h-full flex-1 min-h-0 overflow-clip">
                <div className="fixed left-0 z-50 w-1/20 flex justify-center items-center">
                    <div className="hover:bg-gray-600 active:bg-gray-700 p-4 rounded-lg cursor-pointer" onClick={(e) => { e.stopPropagation(); changePicture(-1) }}>
                        {/* Left arrow button */}
                        <svg width="40" height="40" fill="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" fill="#ffffff" stroke="#ffffff" strokeWidth="2" /></svg>
                    </div>
                </div>
                <div className="max-w-[1600px] w-full h-full flex justify-center items-center">
                    <Image key={file} className="w-full h-full object-contain" src={`/events/${file}`} width={720} height={480} sizes="100%" alt={file} onClick={(e) => e.stopPropagation()} onLoad={() => setIsLoading(false)}/>
                </div>
                <div className="fixed right-0 z-50 w-1/20 flex justify-center items-center">
                    <div className="hover:bg-gray-600 active:bg-gray-700 p-4 rounded-lg cursor-pointer" onClick={(e) => { e.stopPropagation(); changePicture(1) }}>
                        {/* Right arrow button */}
                        <svg width="40" height="40" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.293 4.293a1 1 0 0 0 0 1.414L14.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.414 0Z" fill="#ffffff" stroke="#ffffff" strokeWidth="2" /></svg>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}