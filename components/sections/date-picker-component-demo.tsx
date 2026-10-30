"use client"
import React, { useMemo } from "react"
import { NepaliDatePicker, adToBs } from "@gambhirpoudel/nepali-calendar-kit"
import { motion, AnimatePresence } from "framer-motion"
import MaterialIcon from "@/components/material-icon"

export default function DatePickerComponentDemo() {
    const [selectedDate, setSelectedDate] = React.useState<any | null>(null)

    const todayBS = useMemo(() => adToBs(new Date()), [])
    const todayValue = `${todayBS.year}-${String(todayBS.month).padStart(2, "0")}-${String(todayBS.day).padStart(2, "0")}`

    const [calLan, setCalLan] = React.useState<"en" | "np">("en")
    const [primaryColor, setPrimaryColor] = React.useState("#006194")
    const [hoverBg, setHoverBg] = React.useState("#cce5ff")

    return (
        <section id="nepali-date-picker" className="w-full py-12">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="page-container bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-[0_12px_40px_rgba(15,23,42,0.04)] flex flex-col gap-10"
            >
                <div className="flex flex-col gap-1 max-w-xl">
                    <span className="text-[11px] leading-[14px] font-bold uppercase text-primary tracking-[0.12em]">
                        Interactive Playground
                    </span>
                    <h2 className="font-headline text-[28px] leading-[34px] md:text-[40px] md:leading-[46px] font-bold text-on-surface uppercase">
                        3. Customizable Component
                    </h2>
                    <p className="text-[15px] leading-6 text-on-surface-variant">
                        A fully-featured React component with deep customization for any design system.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Controls panel */}
                    <div className="lg:col-span-5 bg-surface-container-low rounded-2xl p-6 md:p-8 flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <span className="text-[11px] leading-[14px] font-bold uppercase text-outline tracking-[0.12em]">
                                Localization
                            </span>
                            <div className="flex items-center justify-between">
                                <span className="text-[15px] leading-6 text-on-surface">Calendar Language</span>
                                <div className="inline-flex bg-surface-container-lowest p-1 rounded-full shadow-sm">
                                    {(["en", "np"] as const).map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => setCalLan(lang)}
                                            className={`px-4 py-1.5 rounded-full text-xs leading-4 font-semibold transition-colors ${
                                                calLan === lang
                                                    ? "bg-primary text-on-primary"
                                                    : "text-on-surface-variant hover:text-on-surface"
                                            }`}
                                        >
                                            {lang.toUpperCase()}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 pt-4 border-t border-surface-container-high">
                            <span className="text-[11px] leading-[14px] font-bold uppercase text-outline tracking-[0.12em]">
                                Appearance
                            </span>
                            <div className="flex items-center justify-between">
                                <span className="text-[15px] leading-6 text-on-surface">Primary Accent</span>
                                <div className="flex items-center gap-2">
                                    <input
                                        aria-label="Primary accent color"
                                        className="w-8 h-8 rounded-full cursor-pointer bg-transparent border-none"
                                        id="accent-color-picker"
                                        onChange={(e) => setPrimaryColor(e.target.value)}
                                        type="color"
                                        value={primaryColor}
                                    />
                                    <span className="text-xs leading-4 font-semibold text-on-surface-variant uppercase">
                                        {primaryColor}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-[15px] leading-6 text-on-surface">Hover Background</span>
                                <div className="flex items-center gap-2">
                                    <input
                                        aria-label="Hover background color"
                                        className="w-8 h-8 rounded-full cursor-pointer bg-transparent border-none"
                                        id="hover-color-picker"
                                        onChange={(e) => setHoverBg(e.target.value)}
                                        type="color"
                                        value={hoverBg}
                                    />
                                    <span className="text-xs leading-4 font-semibold text-on-surface-variant uppercase">
                                        {hoverBg}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 pt-4 border-t border-surface-container-high">
                            <span className="text-[11px] leading-[14px] font-bold uppercase text-outline tracking-[0.12em]">
                                Behavior
                            </span>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input defaultChecked className="rounded text-primary w-4 h-4 accent-[#006194]" type="checkbox" />
                                <span className="text-[15px] leading-6 text-on-surface">
                                    Auto-responsive popover position
                                </span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input defaultChecked className="rounded text-primary w-4 h-4 accent-[#006194]" type="checkbox" />
                                <span className="text-[15px] leading-6 text-on-surface">
                                    Keyboard Arrow Navigation
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* Live preview */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <span className="text-[11px] leading-[14px] font-bold uppercase text-outline tracking-[0.12em]">
                                Live Preview
                            </span>
                            <span className="text-xs leading-4 font-semibold text-primary flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-primary" /> Interactive Component
                            </span>
                        </div>

                        <div className="max-w-md mx-auto w-full bg-surface-container-lowest rounded-3xl p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,97,148,0.12)] border border-surface-container">
                            <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
                                <MaterialIcon name="calendar_today" className="text-[20px] text-primary" />
                                <div className="flex flex-col items-center">
                                    <span className="font-headline text-[20px] leading-7 font-bold text-on-surface">
                                        Live NepaliDatePicker
                                    </span>
                                    <span className="text-[11px] leading-[14px] font-bold uppercase text-outline tracking-[0.12em]">
                                        Fully Interactive
                                    </span>
                                </div>
                                <MaterialIcon name="tune" className="text-[20px] text-outline" />
                            </div>

                            {/* Popover is absolute-positioned — it floats over content below, no reserved space needed */}
                            <div className="py-6 flex justify-center">
                                <NepaliDatePicker
                                    key={calLan}
                                    onChange={(result) => setSelectedDate(result)}
                                    theme={{
                                        primary: primaryColor,
                                        hoverBg,
                                        radius: "16px",
                                        fontFamily: "inherit",
                                        shadow: "0 20px 50px -12px rgba(0, 97, 148, 0.18)",
                                    }}
                                    value={todayValue}
                                    calLan={calLan}
                                />
                            </div>

                            <div className="mt-2 pt-3 border-t border-surface-container-high flex items-center justify-between text-[13px] leading-5 text-outline">
                                <span>
                                    {selectedDate
                                        ? `Selected: ${selectedDate.bs}`
                                        : "Click a date in the calendar to select it"}
                                </span>
                                <button
                                    className="px-3 py-1 rounded-full text-on-primary text-xs leading-4 font-semibold"
                                    style={{ backgroundColor: primaryColor }}
                                    onClick={() =>
                                        selectedDate && alert(`Selection confirmed: ${selectedDate.nepali}`)
                                    }
                                >
                                    Apply
                                </button>
                            </div>
                        </div>

                        <AnimatePresence>
                            {selectedDate && (
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 12 }}
                                    className="grid grid-cols-3 gap-3 max-w-md mx-auto w-full"
                                >
                                    {[
                                        { label: "B.S.", val: selectedDate.bs },
                                        { label: "A.D.", val: selectedDate.ad.toLocaleDateString() },
                                        { label: "Full", val: selectedDate.nepali },
                                    ].map((info) => (
                                        <div
                                            key={info.label}
                                            className="bg-surface-container-low rounded-2xl p-3 text-center"
                                        >
                                            <p className="text-[11px] leading-[14px] font-bold text-outline uppercase mb-1">
                                                {info.label}
                                            </p>
                                            <p className="text-xs leading-4 font-mono font-semibold text-primary truncate">
                                                {info.val}
                                            </p>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
