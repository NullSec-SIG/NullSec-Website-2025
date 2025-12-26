"use client"

import { useRouter, useSearchParams } from "next/navigation"
import React, { use, useEffect, useMemo, useState } from "react";
import GalleryCard from "@/app/components/galleryCard";

export default function GalleryPage() {
    const searchParams = useSearchParams();
    const event = searchParams.get("event")
    const router = useRouter();

    const [data, setData] = useState(null);
    const [eventsData, setEventsData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const eventsResponse = await fetch("/api/events");
            const eventsResponseData = await eventsResponse.json();
            setEventsData(eventsResponseData.data);
        }
        fetchData();
    }, [])

    useEffect(() => {
        const retrievePhotos = async () => {
            const response = await fetch(`/api/photos${event ? "?event=" + event : ""}`)
            const eventData = await response.json();
            setData(eventData.data)
        }
        retrievePhotos();
    }, [event])

    const flattenedData = useMemo(() => {
        if (!data) return []
        let tempFlatData = []
        data.forEach(item => item.photos.forEach(i => tempFlatData.push(`${item.id}/${i}`)))
        return tempFlatData.flat()
    }, [data])

    const onDropdownChange = (option) => {
        if (option.target.value === "0") return router.push("/gallery")
        return router.push(`/gallery?event=${option.target.value}`)
    }

    return (
        <div className="flex flex-col items-center md:px-6 min-h-svh">
            <h1 className="text-4xl mt-36 mb-10 font-[IBMPlexSans] font-bold">GALLERY</h1>
            <div className="flex flex-row items-center md:w-4/5 whitespace-pre">
                <h3 className="md:text-2xl text-lg">WORKSHOP: </h3>
                <div className="relative md:text-lg text-sm">
                    <select onChange={(e) => onDropdownChange(e)} value={event ?? ""} className="bg-white text-black border rounded-sm px-3 py-1 mr-3">
                        <option value={0}>Select workshop...</option>
                        {eventsData &&
                            eventsData.map((item, i) => {
                                const id = item.image.split(".")[0]
                                return <option key={id} value={id}>{item.name}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="md:w-4/5 grid md:justify-items-start justify-items-center gap-10 mt-10 mb-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
                {
                    data && data.map(item => {
                        return item.photos.map(image => {
                            return <GalleryCard key={image} fileName={`${item.id}/${image}`} data={flattenedData} />
                        })
                    })
                }
            </div>
        </div>
    )
}