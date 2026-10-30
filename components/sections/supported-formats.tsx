"use client"
import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { adToBs, formatBs, type DateFormat, type FormatPart } from "@gambhirpoudel/nepali-calendar-kit"
import MaterialIcon from "@/components/material-icon"

const DATE_FORMATS: DateFormat[] = ["YYYY-MM-DD", "DD-MM-YYYY", "DD/MM/YYYY", "YYYY/MM/DD"]
const MONTH_PARTS: FormatPart[] = ["numeric", "short", "long"]
const DAY_PARTS: FormatPart[] = ["numeric", "short", "long"]

const FORMAT_LABELS: Record<DateFormat, string> = {
    "YYYY-MM-DD": "Standard ISO",
    "DD-MM-YYYY": "European",
    "DD/MM/YYYY": "Slash Delimited",
    "YYYY/MM/DD": "Chronological",
}

const PART_LABELS: Record<FormatPart, string> = {
    numeric: "Number",
    short: "Short",
    long: "Long",
}

const FORMAT_PILL_BASE =
    "px-4 py-3 rounded-2xl text-xs leading-4 font-semibold text-left transition-all"

export default function SupportedFormats() {
    const todayBS = useMemo(() => adToBs(new Date()), [])

    const [format, setFormat] = useState<DateFormat>("YYYY-MM-DD")
    const [monthFmt, setMonthFmt] = useState<FormatPart>("numeric")
    const [dayFmt, setDayFmt] = useState<FormatPart>("numeric")

    const formatted = useMemo(
        () => formatBs(todayBS, format, monthFmt, dayFmt),
        [todayBS, format, monthFmt, dayFmt],
    )

    const sourceCode = `formatBs(
  { year: ${todayBS.year}, month: ${todayBS.month}, day: ${todayBS.day} },
  '${format}',
  '${monthFmt}',
  '${dayFmt}',
)`

    return (
        <section className="w-full py-12">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="page-container bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-[0_12px_40px_rgba(15,23,42,0.04)] flex flex-col gap-6"
            >
                <div className="flex flex-col gap-1">
                    <span className="text-[11px] leading-[14px] font-bold uppercase text-primary tracking-[0.12em]">
                        Flexible Formatting
                    </span>
                    <h2 className="font-headline text-[28px] leading-[34px] md:text-[40px] md:leading-[46px] font-bold text-on-surface uppercase">
                        Date Format Playground
                    </h2>
                    <p className="text-[15px] leading-6 text-on-surface-variant max-w-xl">
                        Mix and match date layouts with numeric, short, and long representations for months and days.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Controls */}
                    <div className="lg:col-span-6 flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <span className="text-[11px] leading-[14px] font-bold uppercase text-outline tracking-[0.12em]">
                                Date Format
                            </span>
                            <div className="grid grid-cols-2 gap-2">
                                {DATE_FORMATS.map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setFormat(f)}
                                        className={`${FORMAT_PILL_BASE} ${
                                            format === f
                                                ? "bg-primary text-on-primary"
                                                : "bg-surface-container-low text-on-surface hover:bg-surface-container"
                                        }`}
                                    >
                                        <div className="font-bold">{FORMAT_LABELS[f]}</div>
                                        <div className="text-[11px] opacity-80 font-mono">{f}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="text-[11px] leading-[14px] font-bold uppercase text-outline tracking-[0.12em]">
                                Month Display
                            </span>
                            <div className="inline-flex bg-surface-container-low p-1 rounded-full w-fit">
                                {MONTH_PARTS.map((p) => (
                                    <button
                                        key={p}
                                        onClick={() => setMonthFmt(p)}
                                        className={`px-4 py-1.5 rounded-full text-xs leading-4 font-semibold transition-colors ${
                                            monthFmt === p
                                                ? "bg-primary text-on-primary"
                                                : "text-on-surface-variant hover:text-on-surface"
                                        }`}
                                    >
                                        {PART_LABELS[p]}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="text-[11px] leading-[14px] font-bold uppercase text-outline tracking-[0.12em]">
                                Day Display
                            </span>
                            <div className="inline-flex bg-surface-container-low p-1 rounded-full w-fit">
                                {DAY_PARTS.map((p) => (
                                    <button
                                        key={p}
                                        onClick={() => setDayFmt(p)}
                                        className={`px-4 py-1.5 rounded-full text-xs leading-4 font-semibold transition-colors ${
                                            dayFmt === p
                                                ? "bg-primary text-on-primary"
                                                : "text-on-surface-variant hover:text-on-surface"
                                        }`}
                                    >
                                        {PART_LABELS[p]}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Live output + code */}
                    <div className="lg:col-span-6 flex flex-col gap-4">
                        <div className="bg-surface-container-low rounded-2xl p-6 flex flex-col gap-4">
                            <span className="text-[11px] leading-[14px] font-bold uppercase text-outline tracking-[0.12em]">
                                Today is
                            </span>
                            <div className="font-headline text-[32px] leading-tight sm:text-5xl sm:leading-none font-bold text-primary tracking-tight break-words">
                                {formatted}
                            </div>
                            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-surface-container-high text-center">
                                {[
                                    { label: "Year", value: todayBS.year },
                                    { label: "Month", value: todayBS.month },
                                    { label: "Day", value: todayBS.day },
                                ].map((item) => (
                                    <div key={item.label} className="bg-surface-container-lowest p-3 rounded-xl">
                                        <span className="text-[11px] leading-[14px] font-bold uppercase text-outline block">
                                            {item.label}
                                        </span>
                                        <span className="font-headline text-[20px] leading-7 font-bold text-on-surface">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-inverse-surface rounded-2xl p-6 text-inverse-on-surface shadow-xl">
                            <span className="text-[11px] leading-[14px] font-bold uppercase text-outline-variant block mb-2">
                                Equivalent Code
                            </span>
                            <pre className="text-xs leading-5 font-mono text-tertiary-fixed overflow-x-auto">
                                <code>
                                    {sourceCode}
                                    {"\n// Result: "}
                                    <span className="text-secondary-fixed">&quot;{formatted}&quot;</span>
                                </code>
                            </pre>
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-secondary-fixed/50">
                            <MaterialIcon name="terminal" className="text-primary text-[22px] shrink-0" />
                            <p className="text-[13px] leading-5 text-on-surface-variant">
                                Every combination above maps 1:1 to a <code className="font-mono">formatBs</code> call —
                                no extra parsing required.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
