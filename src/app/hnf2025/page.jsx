import Image from "next/image";

export default function HNF2025Page() {
    return (
        <div className="flex flex-row justify-center items-center min-h-svh">
            <div className="w-1/2">
                
            </div>
            <Image src="/HNF-logo.png" width={1500} height={1500} alt="hnf logo" className="w-2xl animate-pulse"/>
        </div>
    )
}