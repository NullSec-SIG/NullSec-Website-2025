import { useEffect } from "react";
import { motion } from "motion/react";

export default function GlitchedTitle() {
    useEffect(() => {
        const el = document.getElementById("glitchText");
        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};:,.<>?";
        const originalText = el.textContent;
        let iteration = 0;

        const interval = setInterval(() => {
            el.textContent = originalText
                .split("")
                .map((letter, i) => {
                    if (i < iteration) return originalText[i];
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");

            if (iteration >= originalText.length) {
                clearInterval(interval);
                el.textContent = originalText;
            }

            iteration += 1 / 4;
        }, 40);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} className="flex flex-row mt-12">
            <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold whitespace-pre">This is </h1>
            <span
                id="glitchText"
                className="lg:text-6xl md:text-5xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#04AF9B] to-white from-40%"
            >
                NullSec.
            </span>
        </motion.div>
    );
}
