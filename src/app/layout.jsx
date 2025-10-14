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
