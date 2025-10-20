"use client"
import { useState, useEffect } from "react";

export default function CountdownCard() {

    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const targetDate = new Date("2025-10-28T09:00:00.000");
            const currentDate = new Date();
            const difference = targetDate - currentDate;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24))
            const hours = Math.floor(difference / (1000 * 60 * 60)) - Math.floor(days * 24)
            const minutes = Math.floor(difference / (1000 * 60)) - Math.floor(days * 24 * 60) - Math.floor(hours * 60)
            const seconds = Math.floor(difference / 1000) - Math.floor(days * 24 * 60 * 60) - Math.floor(hours * 60 * 60) - Math.floor(minutes * 60)

            setTime({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex lg:justify-start justify-center">
            <div className="flex flex-row items-start justify-between w-fit gap-5">
                <div className="flex flex-col items-center border-gray-200 shadow-xl rounded-lg md:p-4 p-2 md:w-24">
                    <h1 id="days" className="font-bold md:text-4xl text-2xl">{time.days}</h1>
                    <h6 className="">DAYS</h6>
                </div>
                <div className="flex flex-col items-center border-gray-200 shadow-xl rounded-lg md:p-4 p-2 md:w-24">
                    <h1 id="hours" className="font-bold md:text-4xl text-2xl">{time.hours}</h1>
                    <h6 className="">HOURS</h6>
                </div>
                <div className="flex flex-col items-center border-gray-200 shadow-xl rounded-lg md:p-4 p-2 md:w-24">
                    <h1 id="minutes" className="font-bold md:text-4xl text-2xl">{time.minutes}</h1>
                    <h6 className="">MINUTES</h6>
                </div>
                <div className="flex flex-col items-center border-gray-200 shadow-xl rounded-lg md:p-4 p-2 md:w-24">
                    <h1 id="seconds" className="font-bold md:text-4xl text-2xl">{time.seconds}</h1>
                    <h6 className="">SECONDS</h6>
                </div>
            </div>
        </div>
    )
}