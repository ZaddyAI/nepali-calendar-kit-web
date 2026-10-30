"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import MaterialIcon from "@/components/material-icon"

const INSTALL_CMD = "npm i @gambhirpoudel/nepali-calendar-kit"

const STATS = [
    { value: "1943–2043", label: "Verified Historical Range", highlight: true },
    { value: "0 Deps", label: "Lightweight & Self-contained", highlight: false },
    { value: "100% Typed", label: "Full TypeScript Support", highlight: false },
    { value: "< 0.4µs", label: "High-performance Core", highlight: true },
]

const PILLARS = [
    {
        icon: "sync_alt",
        title: "AD ↔ BS Conversion",
        desc: "Seamlessly convert between Gregorian and Nepali calendars with verified accuracy.",
    },
    {
        icon: "edit_calendar",
        title: "Interactive DatePicker",
        desc: "React component for selecting Nepali dates with full customization options.",
    },
    {
        icon: "tune",
        title: "Flexible Formatting",
        desc: "Multiple formatting options with Nepali numerals and localized month names.",
    },
]

export default function Hero() {
    const [copied, setCopied] = useState(false)

    const copyInstall = () => {
        navigator.clipboard?.writeText(INSTALL_CMD)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section className="relative w-full overflow-hidden pt-6 pb-16 lg:pb-24">
            {/* Subtle ambient sky decoration */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[480px] bg-gradient-to-b from-secondary-container/15 via-primary-fixed/20 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />

            <div className="page-container flex flex-col gap-10">
                {/* Hero showcase card */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-surface-container-lowest rounded-3xl p-6 sm:p-10 md:p-14 shadow-[0_20px_50px_rgba(0,97,148,0.06)] flex flex-col lg:flex-row items-center justify-between gap-10"
                >
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-3 py-1.5 rounded-full w-fit">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-[11px] leading-[14px] font-bold uppercase tracking-[0.12em]">
                                v2.0 is now live
                            </span>
                            <span className="text-on-secondary-fixed/50">•</span>
                            <span className="text-xs leading-4 font-semibold">
                                Pure TypeScript, zero deps &amp; React picker
                            </span>
                        </div>

                        <h1 className="font-headline text-4xl sm:text-5xl lg:text-[56px] lg:leading-[60px] font-bold text-on-surface tracking-[0.02em] uppercase leading-none">
                            The Professional <br />
                            <span className="text-primary">Nepali Calendar Kit</span>
                        </h1>

                        <p className="text-[18px] leading-7 text-on-surface-variant max-w-xl">
                            High-performance library for converting between Gregorian (AD) and Nepali (BS) dates.
                            Includes an interactive date picker with full TypeScript support.
                        </p>

                        <div className="flex flex-wrap items-center gap-2 pt-2">
                            <a
                                href="#date-conversion"
                                className="px-7 py-3.5 rounded-full bg-primary text-on-primary text-sm leading-5 font-semibold tracking-[0.01em] shadow-[0_8px_20px_rgba(0,97,148,0.28)] hover:bg-primary-container transition-all hover:-translate-y-0.5 flex items-center gap-2"
                            >
                                <span>Get Started</span>
                                <MaterialIcon name="arrow_forward" className="text-[18px]" />
                            </a>
                            <a
                                href="#getting-started"
                                className="px-7 py-3.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface text-sm leading-5 font-semibold tracking-[0.01em] transition-all shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                            >
                                View Documentation
                            </a>
                            <button
                                onClick={copyInstall}
                                className="group hidden sm:flex items-center gap-2 px-4 py-3 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface-variant text-xs leading-4 font-semibold transition-colors max-w-full"
                            >
                                <MaterialIcon name={copied ? "check" : "terminal"} className="text-[16px] text-primary shrink-0" />
                                <code className="font-mono truncate">{INSTALL_CMD}</code>
                                {!copied && (
                                    <MaterialIcon name="content_copy" className="text-[16px] text-outline group-hover:text-primary transition-colors" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Himalayan showcase visual */}
                    <div className="w-full lg:w-[480px] shrink-0">
                        <div className="relative rounded-2xl overflow-hidden bg-primary shadow-xl">
                            <div
                                className="bg-cover bg-center w-full h-[280px] relative"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYkPZMQ_Mc_N44yP7FR7ETzcLItKqRD1d1NKOjAfm3VjQWf84iFqL2Y5B2gJgVDaZBl6m_F6lncQ2iSk_FFHCa7wiE3SiD49iDmd33e6tOyTuAyu8D69P9ClijMvjkxgqKmkc5se2RH3WI_n1nIU7wBr9j6d94V5XhYXDKKkmXTz-j6Ym8ID9crvqYkWI8spGg-6BJ9h-UkF9dKH5cLAyCTXXxx7T63stRy9gi6TA')",
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent flex flex-col justify-end p-6 text-on-primary">
                                    <span className="text-[11px] leading-[14px] font-bold tracking-[0.12em] uppercase text-secondary-fixed">
                                        Verified Bikram Sambat Engine
                                    </span>
                                    <span className="font-headline text-[26px] leading-8 font-semibold tracking-[0.01em] uppercase mt-1">
                                        २०८२ - २०८३ PANCHANG READY
                                    </span>
                                    <div className="flex items-center justify-between text-surface-container-low text-[13px] leading-5 mt-2 pt-2 border-t border-white/20">
                                        <span>Kathmandu Standard Time (GMT +5:45)</span>
                                        <span className="inline-flex items-center gap-1 text-xs leading-4 font-semibold">
                                            <span className="w-2 h-2 rounded-full bg-secondary-container" />
                                            Synchronized
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Quick highlights stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-surface-container-lowest rounded-2xl px-6 py-8 md:px-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8"
                >
                    {STATS.map((stat) => (
                        <div key={stat.label} className="flex flex-col gap-1 min-w-0">
                            <span
                                className={`font-headline text-[26px] leading-tight md:text-[40px] md:leading-[46px] font-bold tracking-[0.01em] break-words ${stat.highlight ? "text-primary" : "text-on-surface"
                                    }`}
                            >
                                {stat.value}
                            </span>
                            <span className="text-[11px] leading-[14px] font-bold uppercase tracking-[0.12em] text-outline">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Three key pillar cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PILLARS.map((pillar, idx) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                            className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_40px_rgba(0,97,148,0.10)] transition-all hover:-translate-y-1 flex flex-col gap-2 group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-secondary-fixed flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                                <MaterialIcon name={pillar.icon} className="text-[26px]" />
                            </div>
                            <h3 className="font-headline text-[20px] leading-7 font-bold text-on-surface">
                                {pillar.title}
                            </h3>
                            <p className="text-[15px] leading-6 text-on-surface-variant">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
