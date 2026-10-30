"use client"
import { motion } from "framer-motion"
import MaterialIcon from "@/components/material-icon"

const VERIFY_PILLS = [
    { icon: "verified", label: "Accurate Conversion (1943+)" },
    { icon: "code", label: "TypeScript Support" },
    { icon: "check_circle", label: "Zero Dependencies" },
    { icon: "translate", label: "Multi-language" },
]

export default function Features() {
    return (
        <section id="features" className="w-full py-12 lg:py-16">
            <div className="page-container flex flex-col gap-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-[11px] leading-[14px] font-bold uppercase text-primary tracking-[0.12em]">
                            Key Features &amp; Architecture
                        </span>
                        <h2 className="font-headline text-[28px] leading-[34px] md:text-[40px] md:leading-[46px] font-bold text-on-surface uppercase">
                            Core Features
                        </h2>
                        <p className="text-[15px] leading-6 text-on-surface-variant max-w-xl">
                            Engineered for mission-critical banking portals, HR systems, government services, and
                            modern SaaS dashboards.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {VERIFY_PILLS.map((pill) => (
                            <span
                                key={pill.label}
                                className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs leading-4 font-semibold flex items-center gap-1.5"
                            >
                                <MaterialIcon name={pill.icon} className="text-[16px] text-primary" />
                                {pill.label}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bento grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Big card with code snippet */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 bg-surface-container-lowest rounded-3xl p-8 shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between gap-4"
                    >
                        <div className="flex flex-col gap-1">
                            <span className="text-[11px] leading-[14px] font-bold uppercase text-outline tracking-[0.12em]">
                                Conversion Engine
                            </span>
                            <h3 className="font-headline text-[26px] leading-8 font-semibold tracking-[0.01em] text-on-surface">
                                AD to BS &amp; BS to AD
                            </h3>
                            <p className="text-[15px] leading-6 text-on-surface-variant">
                                Convert AD (Gregorian) dates to BS (Bikram Sambat) and vice versa with precision.
                            </p>
                        </div>
                        <div className="bg-inverse-surface rounded-2xl p-5 text-inverse-on-surface overflow-x-auto shadow-inner">
                            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                                <span className="text-[11px] leading-[14px] font-bold uppercase text-outline-variant">
                                    TypeScript Execution
                                </span>
                                <span className="text-xs leading-4 font-semibold text-secondary-fixed">0.18ms</span>
                            </div>
                            <pre className="text-xs leading-5 font-mono"><code>{`adToBs(new Date('2026-02-12'));
// Result: { year: 2082, month: 10, day: 29 }`}</code></pre>
                        </div>
                    </motion.div>

                    {/* Multiple formats */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between gap-4"
                    >
                        <div className="flex flex-col gap-1">
                            <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-primary mb-2">
                                <MaterialIcon name="format_shapes" className="text-[22px]" />
                            </div>
                            <h3 className="font-headline text-[20px] leading-7 font-bold text-on-surface">
                                Multiple Formats
                            </h3>
                            <p className="text-[15px] leading-6 text-on-surface-variant">
                                Format dates in YYYY-MM-DD, DD-MM-YYYY, DD/MM/YYYY, and custom configurations.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {["YYYY-MM-DD", "DD/MM/YYYY", "Custom Delimiters"].map((f) => (
                                <span
                                    key={f}
                                    className="px-3 py-1 rounded-lg bg-surface-container-low text-on-surface text-xs leading-4 font-semibold"
                                >
                                    {f}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Localization */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between gap-4"
                    >
                        <div className="flex flex-col gap-1">
                            <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-primary mb-2">
                                <MaterialIcon name="language" className="text-[22px]" />
                            </div>
                            <h3 className="font-headline text-[20px] leading-7 font-bold text-on-surface">Localization</h3>
                            <p className="text-[15px] leading-6 text-on-surface-variant">
                                Display Nepali dates with numeric, short, or long month names, and Nepali numerals
                                (०१२३४५६७८९).
                            </p>
                        </div>
                        <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                            <span className="text-xs leading-4 font-semibold text-on-surface">देवनागरी अंक</span>
                            <span className="font-headline text-[20px] leading-7 font-bold text-primary">
                                ० १ २ ३ ४ ५ ६ ७ ८ ९
                            </span>
                        </div>
                    </motion.div>

                    {/* Nepali DatePicker */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between gap-4"
                    >
                        <div className="flex flex-col gap-1">
                            <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-primary mb-2">
                                <MaterialIcon name="widgets" className="text-[22px]" />
                            </div>
                            <h3 className="font-headline text-[20px] leading-7 font-bold text-on-surface">
                                Nepali DatePicker
                            </h3>
                            <p className="text-[15px] leading-6 text-on-surface-variant">
                                React component with powerful theming, accessibility, and localization support
                                built-in.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-primary text-xs leading-4 font-semibold">
                            <MaterialIcon name="verified" className="text-[18px]" />
                            Drop-in JSX &amp; TSX support
                        </div>
                    </motion.div>

                    {/* Fully typed */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between gap-4"
                    >
                        <div className="flex flex-col gap-1">
                            <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-primary mb-2">
                                <MaterialIcon name="data_object" className="text-[22px]" />
                            </div>
                            <h3 className="font-headline text-[20px] leading-7 font-bold text-on-surface">Fully Typed</h3>
                            <p className="text-[15px] leading-6 text-on-surface-variant">
                                First-class TypeScript support for robust development and auto-completion.
                            </p>
                        </div>
                        <span className="px-3 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] leading-[14px] font-bold uppercase tracking-[0.12em] w-fit">
                            TypeScript v5.x Ready
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
