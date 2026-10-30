"use client"
import { motion } from "framer-motion"
import MaterialIcon from "@/components/material-icon"
import Logo from "@/components/logo"

const EXAMPLE_CARDS = [
    {
        title: "AD to BS Conversion",
        code: `adToBs(new Date('2002-08-17'));\n// Result:\n// { year: 2059, month: 5, day: 1 }`,
    },
    {
        title: "Nepali Numerals",
        code: `formatBs(\n  { year: 2082, month: 10, day: 1 },\n  'DD-MM-YYYY'\n);\n// Result: "१-१०-२०८२"`,
    },
]

const RESULT_OBJECT = `const result = {
  bs: '2082-10-29',
  ad: 'Thu Feb 12 2026',
  nepali: '२०८२-१०-२९'
}`

export default function ExampleOutput() {
    return (
        <section className="w-full py-12 pb-24">
            <div className="page-container flex flex-col gap-10">
                {/* Real-world examples card */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-[0_12px_40px_rgba(15,23,42,0.04)] flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-1">
                        <span className="text-[11px] leading-[14px] font-bold uppercase text-primary tracking-[0.12em]">
                            Data Structure
                        </span>
                        <h2 className="font-headline text-[28px] leading-[34px] md:text-[40px] md:leading-[46px] font-bold text-on-surface uppercase">
                            Real-world Examples
                        </h2>
                        <p className="text-[15px] leading-6 text-on-surface-variant max-w-xl">
                            See how the library parses and outputs data in different scenarios.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {EXAMPLE_CARDS.map((card) => (
                            <div
                                key={card.title}
                                className="bg-surface-container-low p-6 rounded-2xl flex flex-col justify-between gap-4"
                            >
                                <div>
                                    <span className="text-[11px] leading-[14px] font-bold uppercase text-primary tracking-[0.12em]">
                                        Core Logic
                                    </span>
                                    <h4 className="font-headline text-[20px] leading-7 font-bold text-on-surface mt-1">
                                        {card.title}
                                    </h4>
                                </div>
                                <pre className="bg-inverse-surface text-inverse-on-surface p-4 rounded-xl text-xs leading-5 font-mono whitespace-pre-wrap break-words">
                                    <code>{card.code}</code>
                                </pre>
                            </div>
                        ))}

                        <div className="bg-surface-container-low p-6 rounded-2xl flex flex-col justify-between gap-4">
                            <div>
                                <span className="text-[11px] leading-[14px] font-bold uppercase text-primary tracking-[0.12em]">
                                    Core Logic
                                </span>
                                <h4 className="font-headline text-[20px] leading-7 font-bold text-on-surface mt-1">
                                    Rich Result Object
                                </h4>
                            </div>
                            <pre className="bg-inverse-surface text-inverse-on-surface p-4 rounded-xl text-xs leading-5 font-mono whitespace-pre-wrap break-words">
                                <code>{RESULT_OBJECT}</code>
                            </pre>
                        </div>
                    </div>

                    <p className="text-[15px] leading-6 text-on-surface-variant italic">
                        The component returns a comprehensive object containing all necessary formats to minimize manual
                        parsing.
                    </p>
                </motion.div>

                {/* Grand CTA banner */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-gradient-to-r from-primary via-primary-container to-secondary-container rounded-3xl p-8 md:p-14 shadow-[0_24px_60px_rgba(0,97,148,0.22)] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
                >
                    <div className="flex flex-col gap-2 max-w-2xl z-10">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full w-fit text-white">
                            <Logo size={24} className="rounded-md" />
                            <span className="text-[11px] leading-[14px] font-bold uppercase tracking-[0.12em]">
                                Nepali Calendar Kit
                            </span>
                        </div>
                        <h2 className="font-headline text-[28px] leading-tight sm:text-5xl sm:leading-none font-bold uppercase tracking-[0.02em] text-white">
                            Start building localized <br />
                            experiences today.
                        </h2>
                        <p className="text-[18px] leading-7 text-white/90">
                            The definitive calendar toolkit for modern Nepali applications. Reliable, lightweight, and
                            incredibly easy to integrate.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-2 shrink-0 z-10 w-full md:w-auto">
                        <a
                            className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-surface-container-lowest text-primary text-sm leading-5 font-semibold shadow-lg hover:bg-surface transition-all hover:scale-105"
                            href="https://www.npmjs.com/package/@gambhirpoudel/nepali-calendar-kit"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Install via NPM
                        </a>
                        <a
                            className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-on-background/20 hover:bg-on-background/30 text-white text-sm leading-5 font-semibold transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                            href="https://github.com/ZaddyAI/nepali-calendar-kit"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Source on GitHub
                            <MaterialIcon name="open_in_new" className="text-[16px]" />
                        </a>
                    </div>

                    <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                </motion.div>
            </div>
        </section>
    )
}
