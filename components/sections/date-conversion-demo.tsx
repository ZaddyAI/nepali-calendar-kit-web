"use client"
import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { adToBs, bsToAd } from "@gambhirpoudel/nepali-calendar-kit"
import MaterialIcon from "@/components/material-icon"

type Mode = "AD_TO_BS" | "BS_TO_AD"
type OutputFormat = "nepali_devanagari" | "english_iso" | "words_full"

const NEPALI_MONTHS_EN = [
    "Baishakh", "Jestha", "Ashar", "Shrawan", "Bhadra", "Ashwin",
    "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra",
]

const NEPALI_MONTHS_NP = [
    "बैशाख", "जेठ", "असार", "श्रावण", "भदौ", "असोज",
    "कात्तिक", "मंसिर", "पुस", "माघ", "फागुन", "चैत",
]

const RITU_BY_MONTH: Record<number, string> = {
    1: "Grishma (ग्रीष्म)", 2: "Grishma (ग्रीष्म)",
    3: "Barsha (वर्षा)", 4: "Barsha (वर्षा)",
    5: "Sharad (शरद)", 6: "Sharad (शरद)",
    7: "Hemant (हेमन्त)", 8: "Hemant (हेमन्त)",
    9: "Shishir (शिशिर)", 10: "Shishir (शिशिर)",
    11: "Basant (बसन्त)", 12: "Basant (बसन्त)",
}

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const toDevanagari = (value: string | number) =>
    String(value).replace(/[0-9]/g, (d) => "०१२३४५६७८९"[Number(d)])

const pad = (n: number) => String(n).padStart(2, "0")

export default function DateConversionDemo() {
    const today = useMemo(() => new Date(), [])
    const todayAD = today.toISOString().split("T")[0]
    const todayBS = useMemo(() => adToBs(today), [today])
    const todayBSString = `${todayBS.year}-${pad(todayBS.month)}-${pad(todayBS.day)}`

    const [mode, setMode] = useState<Mode>("AD_TO_BS")
    const [adDate, setAdDate] = useState(todayAD)
    const [bsDate, setBsDate] = useState(todayBSString)
    const [outputFormat, setOutputFormat] = useState<OutputFormat>("nepali_devanagari")
    const [result, setResult] = useState<{
        main: string
        sub: string
        weekday: string
        ritu: string
    } | null>(null)
    const [error, setError] = useState("")

    const convert = (inputMode = mode, inputAd = adDate, inputBs = bsDate) => {
        setError("")
        try {
            if (inputMode === "AD_TO_BS") {
                if (!inputAd) return setError("Please select a valid AD date.")
                const bs = adToBs(new Date(inputAd))
                const ad = new Date(inputAd)
                const weekday = WEEKDAYS[ad.getDay()]
                const monthName = NEPALI_MONTHS_EN[bs.month - 1]

                let main: string
                let sub: string
                if (outputFormat === "nepali_devanagari") {
                    main = toDevanagari(`${bs.year}-${pad(bs.month)}-${pad(bs.day)}`)
                    sub = `${NEPALI_MONTHS_NP[bs.month - 1]} ${toDevanagari(bs.day)}, ${toDevanagari(bs.year)} BS`
                } else if (outputFormat === "english_iso") {
                    main = `${bs.year}-${pad(bs.month)}-${pad(bs.day)}`
                    sub = `${monthName} ${bs.day}, ${bs.year} BS`
                } else {
                    main = `${monthName} ${bs.day}, ${bs.year}`
                    sub = `${bs.day} ${NEPALI_MONTHS_NP[bs.month - 1]} ${toDevanagari(bs.year)} · ${weekday}`
                }

                setResult({
                    main,
                    sub: `${sub} (${weekday})`,
                    weekday,
                    ritu: RITU_BY_MONTH[bs.month] ?? "—",
                })
            } else {
                const [y, m, d] = inputBs.split("-").map(Number)
                if (!y || !m || !d) return setError("Enter a valid BS date in YYYY-MM-DD format.")
                const ad = bsToAd(y, m, d)
                const weekday = WEEKDAYS[ad.getDay()]

                let main: string
                if (outputFormat === "nepali_devanagari") {
                    main = toDevanagari(ad.toISOString().split("T")[0])
                } else if (outputFormat === "english_iso") {
                    main = ad.toISOString().split("T")[0]
                } else {
                    main = ad.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
                }

                setResult({
                    main,
                    sub: `Bikram Sambat: ${y} ${NEPALI_MONTHS_EN[m - 1]} ${d} (${weekday})`,
                    weekday,
                    ritu: RITU_BY_MONTH[m] ?? "—",
                })
            }
        } catch {
            setError("Date out of supported range (1943–2043 BS).")
        }
    }

    const switchMode = (next: Mode) => {
        setMode(next)
        setResult(null)
        if (next === "AD_TO_BS") {
            setAdDate(todayAD)
            convert(next, todayAD, bsDate)
        } else {
            setBsDate(todayBSString)
            convert(next, adDate, todayBSString)
        }
    }

    const applyPreset = (preset: "today" | "dashain" | "tihar") => {
        if (preset === "today") {
            switchMode("AD_TO_BS")
        } else if (preset === "dashain") {
            setMode("BS_TO_AD")
            setBsDate("2083-07-04")
            convert("BS_TO_AD", adDate, "2083-07-04")
        } else {
            setMode("BS_TO_AD")
            setBsDate("2083-07-24")
            convert("BS_TO_AD", adDate, "2083-07-24")
        }
    }

    return (
        <section id="date-conversion" className="w-full py-12">
            <div className="page-container flex flex-col gap-6">
                <div className="flex flex-col gap-1 text-center max-w-2xl mx-auto">
                    <span className="text-[11px] leading-[14px] font-bold uppercase text-primary tracking-[0.12em]">
                        Interactive Converter
                    </span>
                    <h2 className="font-headline text-[28px] leading-[34px] md:text-[40px] md:leading-[46px] font-bold text-on-surface uppercase">
                        2. Date Conversion
                    </h2>
                    <p className="text-[15px] leading-6 text-on-surface-variant">
                        Seamlessly bridge the gap between Gregorian and Bikram Sambat calendars.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 shadow-[0_16px_50px_rgba(0,97,148,0.08)] flex flex-col gap-4"
                >
                    {/* Segmented toggle + presets */}
                    <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-surface-container-high">
                        <div className="inline-flex bg-surface-container-low p-1.5 rounded-full">
                            {(["AD_TO_BS", "BS_TO_AD"] as Mode[]).map((m) => (
                                <button
                                    key={m}
                                    onClick={() => switchMode(m)}
                                    className={`px-5 py-2 rounded-full text-xs leading-4 font-semibold transition-all ${
                                        mode === m
                                            ? "bg-primary text-on-primary shadow-sm"
                                            : "text-on-surface-variant hover:text-on-surface"
                                    }`}
                                >
                                    {m === "AD_TO_BS" ? "AD → BS" : "BS → AD"}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[11px] leading-[14px] font-bold uppercase text-outline tracking-[0.12em]">
                                Quick Presets:
                            </span>
                            <button
                                onClick={() => applyPreset("today")}
                                className="px-3 py-1 rounded-full bg-surface-container-high hover:bg-secondary-fixed text-on-surface text-xs leading-4 font-semibold transition-colors"
                            >
                                Today
                            </button>
                            <button
                                onClick={() => applyPreset("dashain")}
                                className="px-3 py-1 rounded-full bg-surface-container-high hover:bg-secondary-fixed text-on-surface text-xs leading-4 font-semibold transition-colors"
                            >
                                Dashain 2083
                            </button>
                            <button
                                onClick={() => applyPreset("tihar")}
                                className="px-3 py-1 rounded-full bg-surface-container-high hover:bg-secondary-fixed text-on-surface text-xs leading-4 font-semibold transition-colors"
                            >
                                Tihar 2083
                            </button>
                        </div>
                    </div>

                    {/* Inputs row */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        <div className="md:col-span-5 bg-surface-container-low rounded-2xl p-4 flex flex-col gap-1">
                            <label
                                htmlFor="date-input"
                                className="text-[11px] leading-[14px] font-bold uppercase text-outline tracking-[0.12em]"
                            >
                                {mode === "AD_TO_BS" ? "Select AD Date" : "Enter BS Date (YYYY-MM-DD)"}
                            </label>
                            <div className="flex items-center gap-2">
                                <MaterialIcon name="calendar_today" className="text-primary text-[20px]" />
                                {mode === "AD_TO_BS" ? (
                                    <input
                                        id="date-input"
                                        type="date"
                                        value={adDate}
                                        onChange={(e) => setAdDate(e.target.value)}
                                        className="w-full bg-transparent text-sm leading-5 font-semibold text-on-surface focus:outline-none"
                                    />
                                ) : (
                                    <input
                                        id="date-input"
                                        type="text"
                                        value={bsDate}
                                        placeholder="2083-07-14"
                                        onChange={(e) => setBsDate(e.target.value)}
                                        className="w-full bg-transparent font-mono text-sm leading-5 font-semibold text-on-surface focus:outline-none"
                                    />
                                )}
                            </div>
                        </div>

                        <div className="md:col-span-4 bg-surface-container-low rounded-2xl p-4 flex flex-col gap-1">
                            <label
                                htmlFor="format-select"
                                className="text-[11px] leading-[14px] font-bold uppercase text-outline tracking-[0.12em]"
                            >
                                Target Formatting
                            </label>
                            <div className="flex items-center gap-2">
                                <MaterialIcon name="format_quote" className="text-outline text-[20px]" />
                                <select
                                    id="format-select"
                                    value={outputFormat}
                                    onChange={(e) => setOutputFormat(e.target.value as OutputFormat)}
                                    className="w-full bg-transparent text-sm leading-5 font-semibold text-on-surface focus:outline-none"
                                >
                                    <option value="nepali_devanagari">Devanagari Numerals (२०८३-०७-१४)</option>
                                    <option value="english_iso">English ISO (2083-07-14)</option>
                                    <option value="words_full">Full Narrative</option>
                                </select>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <button
                                onClick={() => convert()}
                                className="w-full py-5 rounded-2xl bg-primary text-on-primary font-headline text-[20px] leading-7 font-bold uppercase tracking-wide hover:bg-primary-container transition-all shadow-[0_8px_20px_rgba(0,97,148,0.3)] flex items-center justify-center gap-2"
                            >
                                <MaterialIcon name="bolt" className="text-[20px]" />
                                <span>{mode === "AD_TO_BS" ? "Convert to BS" : "Convert to AD"}</span>
                            </button>
                        </div>
                    </div>

                    {/* Result card */}
                    <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <AnimatePresence mode="wait">
                            {result ? (
                                <motion.div
                                    key={result.main}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    className="flex flex-col gap-2"
                                >
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] leading-[14px] font-bold uppercase tracking-[0.12em]">
                                            Calculated Output
                                        </span>
                                        <span className="text-[13px] leading-5 text-outline">
                                            Status: Verified Algorithmic Match
                                        </span>
                                    </div>
                                    <div className="font-headline text-3xl sm:text-5xl leading-tight sm:leading-none font-bold text-primary tracking-tight break-words">
                                        {result.main}
                                    </div>
                                    <div className="font-headline text-[20px] leading-7 font-bold text-on-surface">
                                        {result.sub}
                                    </div>
                                    {error && <div className="text-sm text-error">{error}</div>}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col gap-2"
                                >
                                    <div className="font-headline text-4xl leading-none font-bold text-outline-variant tracking-tight">
                                        ——
                                    </div>
                                    <div className="text-[15px] leading-6 text-on-surface-variant">
                                        {error || "Pick a date and hit convert to see the result."}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex flex-col gap-2 md:text-right border-t md:border-t-0 pt-4 md:pt-0 border-surface-container-high w-full md:w-auto">
                            <div className="p-3 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-1">
                                <span className="text-[11px] leading-[14px] font-bold uppercase text-outline tracking-[0.12em]">
                                    Weekday
                                </span>
                                <span className="text-[15px] leading-6 font-bold text-on-surface">
                                    {result?.weekday ?? "—"}
                                </span>
                            </div>
                            <div className="p-3 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-1">
                                <span className="text-[11px] leading-[14px] font-bold uppercase text-outline tracking-[0.12em]">
                                    Nepali Ritu (Season)
                                </span>
                                <span className="text-[15px] leading-6 font-bold text-primary">
                                    {result?.ritu ?? "—"}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
