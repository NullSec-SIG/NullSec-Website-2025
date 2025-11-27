import Image from "next/image";
import { useState } from "react";

export default function GalleryIndividualCard({ fileName, setShowIndividualCard, data }) {

    const [file, setFile] = useState(fileName)

    const changePicture = (direction) => {
        const currentIndex = data.indexOf(file)
        let newIndex;

        if (currentIndex === 0 && direction === -1)
            newIndex = data.length - 1
        else newIndex = data.indexOf(file) + direction

        setFile(data[newIndex])
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 select-none" onClick={() => setShowIndividualCard(false)}>
            <div className="fixed left-0 z-50 w-3/20 flex justify-center items-center">
                <div className="hover:bg-gray-600 p-4 rounded-lg cursor-pointer" onClick={(e) => { e.stopPropagation(); changePicture(-1) }}>
                    <svg width="40" height="40" fill="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" fill="#ffffff" stroke="#ffffff" strokeWidth="2" /></svg>
                </div>
            </div>
            <div className="w-7/10 flex justify-center items-center">
                <Image src={`/events/${file}`} width={720} height={480} alt={file} onClick={(e) => e.stopPropagation()} />
            </div>
            <div className="fixed right-0 z-50 w-3/20 flex justify-center items-center">
                <div className="hover:bg-gray-600 p-4 rounded-lg cursor-pointer" onClick={(e) => { e.stopPropagation(); changePicture(1) }}>
                    <svg width="40" height="40" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.293 4.293a1 1 0 0 0 0 1.414L14.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.414 0Z" fill="#ffffff" stroke="#ffffff" strokeWidth="2" /></svg>
                </div>
            </div>
        </div>
    )
}