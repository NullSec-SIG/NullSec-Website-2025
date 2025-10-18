import Image from "next/image";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
    title: "NullSec",
    description: "For a secure future",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`antialiased flex flex-col min-h-svh`}
            >
                <Navbar />
                <main className="flex-1 min-h-full flex flex-col">{children}</main>
                <div className="flex flex-col items-center mb-15 gap-10">
                    <Image src="/Line 1.png" width={1081} height={1} alt="border" className="mx-auto w-4/5" />
                    <h1 className="text-5xl font-bold font-[IBMPlexSans]">FIND US ONLINE!</h1>
                    <div className="flex flex-row gap-14">
                        <div className="flex flex-col justify-end items-end gap-11 flex-wrap w-1/2">
                            <a href="mailto:nullsec.sig@gmail.com" target="blank" className="flex flex-row items-center border-[#F7C3BE] border-1 rounded-sm cursor-pointer">
                                <Image src="/email.png" width={37.5} height={50} alt="email" className="ml-3" />
                                <div className="border-[#F7C3BE] border-1 h-[49.5px] mx-3"></div>
                                <p className="text-[#F7C3BE] text-xl mr-3">Send us an email!</p>
                            </a>
                            <a href="https://github.com/NullSec-SIG" target="blank" className="flex flex-row items-center border-[#D9D9D9] border-1 rounded-sm cursor-pointer">
                                <Image src="/github.png" width={37.5} height={50} alt="github" className="ml-3" />
                                <div className="border-[#D9D9D9] border-1 h-[49.5px] mx-3"></div>
                                <p className="text-[#D9D9D9] text-xl mr-3">View our projects on GitHub!</p>
                            </a>
                        </div>
                        <div className="flex flex-row justify-start items-start gap-11 flex-wrap w-1/2">
                            <a href="https://instagram.com/nullsec.sig" target="blank" className="flex flex-row items-center border-[#F7BEDC] border-1 rounded-sm cursor-pointer">
                                <Image src="/instagram.png" width={37.5} height={50} alt="instagram" className="ml-3" />
                                <div className="border-[#F7BEDC] border-1 h-[49.5px] mx-3"></div>
                                <p className="text-[#F7BEDC] text-xl mr-3">Follow us on Instagram!</p>
                            </a>
                            <a href="https://discord.gg/PEkgGHWjDq" target="blank" className="flex flex-row items-center border-[#E0E3FF] border-1 rounded-sm cursor-pointer">
                                <Image src="/discord.png" width={37.5} height={50} alt="discord" className="ml-3" />
                                <div className="border-[#E0E3FF] border-1 h-[49.5px] mx-3"></div>
                                <p className="text-[#E0E3FF] text-xl mr-3">Join our Discord!</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-black/70 flex flex-col justify-center items-center p-8 gap-5">
                    <div className="flex flex-row gap-5">
                        <Image src="/Logomark 1.svg" width={54} height={78} alt="footer logo" />
                        <div className="flex flex-col justify-center">
                            <p>© 2025, NullSec</p>
                            <p>All Rights Reserved</p>
                        </div>
                    </div>
                    {/* <a href="np.edu.sg" className="font-[IBMPlexSans]"><u>Visit the Ngee Ann Polytechnic Website</u></a> */}
                </div>
            </body>
        </html>
    );
}
