import Image from "next/image";
import TeamCard from "../components/teamCard";

export default function AboutPage() {
    return (
        <div className="px-6 min-h-full flex-1">
            <div className="flex flex-col justify-center items-center min-h-[90svh]">
                <h1 className="font-[IBMPlexSans] text-4xl font-bold mb-6">ABOUT US</h1>
                <Image src="/IMG_5617-Enhanced-NRe.jpg" width={6000} height={4000} alt="about us" className="w-4xl" />
            </div>
            <Image src="/Line 1.png" width={1081} height={1} alt="border" className="bottom-0 mx-auto w-4/5"/>
            <div className="flex flex-col items-center min-h-svh mt-10 mb-10">
                <h1 className="font-[IBMPlexSans] text-4xl font-bold mb-10">MEET THE TEAM</h1>
                <div className="flex flex-col w-4/5 gap-10">
                    <div className="flex flex-row justify-center items-center gap-15">
                        <TeamCard name="RAVIN NAGPAL" role="President" picture="/team/Ravin.jpg" description="" />
                        <TeamCard name="DAKSH THAPAR" role="Vice-President" picture="/team/Daksh.jpg" description="" />
                    </div>
                    <div className="flex flex-row justify-center items-center gap-15">
                        <TeamCard name="TAN CHIN RAY" role="Head of Technology" picture="/team/Chin Ray.png" description="" />
                        <TeamCard name="TAN JUN WEI" role="Tech EXCO" picture="/team/Jun Wei.jpg" description="" />
                        <TeamCard name="DAMIAN KOH" role="Vice-President" picture="/team/Damian.png" description="" />
                    </div>
                    <div className="flex flex-row justify-center items-center gap-15">
                        <TeamCard name="QUAN YU" role="Head of SecOps" picture="/team/Quan Yu.jpg" description="" />
                        <TeamCard name="RYAN TAN" role="SecOps EXCO" picture="/team/Ryan Tan.png" description="" />
                        <TeamCard name="RYAN LOW" role="SecOps EXCO" picture="/team/Ryan Low.jpg" description="" />
                    </div>
                    <div className="flex flex-row justify-center items-center gap-15">
                        <TeamCard name="ALOYSIUS LUKE TAY SHI YUAN" role="Head of Publicity" picture="/team/Aloysius.png" description="" />
                        <TeamCard name="RYAN WEE WEI YAN" role="Publicity EXCO" picture="/team/Chin Ray.png" description="" />
                        <TeamCard name="POOK XUAN TONG" role="Publicity EXCO" picture="/team/Chin Ray.png" description="" />
                        <TeamCard name="KOH BOCK CHOW" role="Publicity EXCO" picture="/team/Chin Ray.png" description="" />
                    </div>
                </div>
            </div>
        </div>
    )
}