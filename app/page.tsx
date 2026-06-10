"use client"
import Header from "@/components/header"
import Hero from "@/components/sections/hero"
import Features from "@/components/sections/features"
import DateConversionDemo from "@/components/sections/date-conversion-demo"
import DatePickerComponentDemo from "@/components/sections/date-picker-component-demo"
import PropsTable from "@/components/sections/props-table"
import ThemeOptions from "@/components/sections/theme-options"
import SupportedFormats from "@/components/sections/supported-formats"
import ExampleOutput from "@/components/sections/example-output"
import Footer from "@/components/footer"
import GettingStarted from "@/components/sections/get-started"
import NepaliDateSection from "@/components/sections/nepali-date"
import { motion } from "framer-motion"

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground relative selection:bg-primary selection:text-primary-foreground">
            {/* Minimalist Grid Background */}
            <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-[0.15]" />

            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-24 space-y-32">
                    <Hero />
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <Features />
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <GettingStarted />
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <DateConversionDemo />
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <DatePickerComponentDemo />
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="space-y-32"
                    >
                        <PropsTable />
                        <ThemeOptions />
                        <NepaliDateSection />
                        <SupportedFormats />
                        <ExampleOutput />
                    </motion.div>
                </main>
                <Footer />
            </div>
        </div>
    )
}
