"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import MaterialIcon from "@/components/material-icon"

export default function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 480)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 16 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label="Back to top"
                    className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 w-12 h-12 rounded-full bg-primary text-on-primary shadow-[0_8px_24px_rgba(0,97,148,0.35)] hover:bg-primary-container transition-colors flex items-center justify-center"
                >
                    <MaterialIcon name="keyboard_arrow_up" className="text-[24px]" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
