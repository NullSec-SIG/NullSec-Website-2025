"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import GalleryCard from "../components/galleryCard";

export default function GalleryPage() {
    const searchParams = useSearchParams();
    const event = searchParams.get("event")
    const router = useRouter();

    const [dataFetched, setDataFetched] = useState(false);
    const [rawData, setRawData] = useState(null);
    const [data, setData] = useState([]);

    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        const getEventNames = async () => {
            const response = await fetch("/events/events.json")
            const events = await response.json();
            setEventData(events)
        }
        if (!dataFetched) getEventNames();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/photos${event ? "?event=" + event : ""}`)
            const eventData = await response.json();
            setRawData(eventData.data)
            setData(eventData.data)
            setDataFetched(true)
        }
        if (!dataFetched) fetchData();
    }, [event])

    useEffect(() => {
        const filterImages = async () => {
           setData(rawData.filter(item => item.name === event))
        }
        if (rawData) filterImages();
    }, [event])

    const onDropdownChange = (option) => {
        setDataFetched(false)
        if (option.target.value === "0") return router.push("/gallery")
        return router.push(`/gallery?event=${option.target.value}`)
    }

    return (
        <div className="flex flex-col items-center px-6 min-h-svh">
            <h1 className="text-4xl mt-36 mb-10 font-[IBMPlexSans] font-bold">GALLERY</h1>
            <div className="flex flex-row items-center w-4/5 whitespace-pre">
                <h3 className="text-2xl">WORKSHOP: </h3>
                <div className="relative text-lg">
                    <select onChange={(e) => onDropdownChange(e)} className="bg-white text-black border-1 rounded-sm px-3 py-1 mr-3">
                        <option value={0}>Select workshop...</option>
                        {
                            eventData.map((item, i) => {
                                const id = item.image.split(".")[0]
                                return <option key={id} value={id} selected={id === event}>{item.name}</option>
                            })
                        }
                    </select>
                    {/* <select className="bg-white text-black border-1 rounded-sm px-3 py-1">
                        <option value={0}>test</option>
                    </select> */}
                </div>
            </div>
            <div className="w-4/5 grid justify-items-center gap-10 mt-10 mb-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))' }}>
                {
                    dataFetched && data.map(item => {
                        return item.photos.map(image => {
                            return <GalleryCard key={image} fileName={`${item.id}/${image}`}/>
                        })
                    })
                }
            </div>
        </div>
    )
}