import Image from "next/image";
import Navbar from "./components/Navbar";
import { motion } from "motion/react";
import "./globals.css";
import SocialsFooter from "./components/socialsFooter";

export const metadata = {
    title: "NullSec",
    description: "For a secure future",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`backdrop-ios antialiased flex flex-col min-h-svh`}
            >
                <Navbar />
                <div className="backdrop inset-0 fixed h-svh -z-10" />
                <main className="flex-1 min-h-full max-h-full overflow-auto flex flex-col">{children}</main>
                <SocialsFooter />
                <div className="bg-black/70 flex flex-col justify-center items-center p-8 gap-5">
                    <div className="flex flex-row gap-5">
                        <Image src="/Logomark 1.svg" width={54} height={78} alt="footer logo" />
                        <div className="flex flex-col justify-center">
                            <p>© 2025, NullSec</p>
                            <p>All Rights Reserved</p>
                        </div>
                    </div>
                    {/* <a href="np.edu.sg" className="font-[IBMPlexSans]"><u>Visit the Ngee Ann Polytechnic Website</u></motion.a> */}
                </div>
            </body>
        </html>
    );
}
