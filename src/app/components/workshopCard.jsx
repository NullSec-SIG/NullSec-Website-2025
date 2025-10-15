import Image from "next/image";

export default function WorkshopCard({ name, image, date, time, status }) {
    return (
        <div className="bg-[#04AF9B] w-[384px] h-[480px] rounded-2xl overflow-clip">
            <Image src={`/events/${image}`} width={384} height={512} alt={name}/>
        </div>
    )
}