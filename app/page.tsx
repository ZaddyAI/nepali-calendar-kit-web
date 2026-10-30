"use client"
import Header from "@/components/header"
import Hero from "@/components/sections/hero"
import Features from "@/components/sections/features"
import GettingStarted from "@/components/sections/get-started"
import DateConversionDemo from "@/components/sections/date-conversion-demo"
import DatePickerComponentDemo from "@/components/sections/date-picker-component-demo"
import PropsTable from "@/components/sections/props-table"
import ThemeOptions from "@/components/sections/theme-options"
import NepaliDateSection from "@/components/sections/nepali-date"
import SupportedFormats from "@/components/sections/supported-formats"
import ExampleOutput from "@/components/sections/example-output"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import { motion } from "framer-motion"

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7 },
}

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-on-surface relative selection:bg-primary/20 selection:text-primary">
            <Header />
            <main className="w-full pt-16 bg-background min-h-screen flex flex-col">
                <Hero />
                <motion.div {...fadeUp}>
                    <Features />
                </motion.div>
                <motion.div {...fadeUp}>
                    <GettingStarted />
                </motion.div>
                <motion.div {...fadeUp}>
                    <DateConversionDemo />
                </motion.div>
                <motion.div {...fadeUp}>
                    <DatePickerComponentDemo />
                </motion.div>
                <motion.div {...fadeUp}>
                    <PropsTable />
                </motion.div>
                <motion.div {...fadeUp}>
                    <ThemeOptions />
                </motion.div>
                <motion.div {...fadeUp}>
                    <NepaliDateSection />
                </motion.div>
                <motion.div {...fadeUp}>
                    <SupportedFormats />
                </motion.div>
                <motion.div {...fadeUp}>
                    <ExampleOutput />
                </motion.div>
            </main>
            <Footer />
            <BackToTop />
        </div>
    )
}
