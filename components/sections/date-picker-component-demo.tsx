"use client";
import React, { useMemo } from "react";
import { NepaliDatePicker, adToBs } from "@gambhirpoudel/nepali-calendar-kit";
import { motion, AnimatePresence } from "framer-motion";
import { Settings2Icon, EyeIcon, PaletteIcon, LanguagesIcon } from "lucide-react";

export default function DatePickerComponentDemo() {
    const [selectedDate, setSelectedDate] = React.useState<any | null>(null);

    const todayBS = useMemo(() => adToBs(new Date()), [])
    const todayValue = `${todayBS.year}-${String(todayBS.month).padStart(2, "0")}-${String(todayBS.day).padStart(2, "0")}`

    const [calLan, setCalLan] = React.useState<"en" | "np">("en");
    const [primaryColor, setPrimaryColor] = React.useState("#6366f1");
    const [hoverBg, setHoverBg] = React.useState("#1e1b4b")

    return (
        <section id="nepali-date-picker" className="space-y-12 mt-16 pt-16 border-t border-border">
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                    <Settings2Icon className="w-3 h-3" />
                    Interactive Playground
                </div>
                <h2 className="text-4xl font-extrabold tracking-tight">3. Customizable Component</h2>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    A fully-featured React component with deep customization for any design system.
                </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
                {/* Configuration Panel */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="clean-card rounded-2xl p-6 space-y-8">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                                <LanguagesIcon className="w-4 h-4" />
                                Localization
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-muted-foreground">Calendar Language</label>
                                <div className="flex bg-black/40 p-1 rounded-xl border border-white/5">
                                    {(["en", "np"] as const).map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => setCalLan(lang)}
                                            className={`flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all ${calLan === lang ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                                        >
                                            {lang.toUpperCase()}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                                <PaletteIcon className="w-4 h-4" />
                                Appearance
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-black/20 rounded-2xl border border-white/5">
                                    <span className="text-xs font-medium">Primary Accent</span>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-mono text-muted-foreground">{primaryColor}</span>
                                        <input
                                            type="color"
                                            value={primaryColor}
                                            onChange={(e) => setPrimaryColor(e.target.value)}
                                            className="w-8 h-8 rounded-lg bg-transparent border-none cursor-pointer"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-black/20 rounded-2xl border border-white/5">
                                    <span className="text-xs font-medium">Hover Background</span>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-mono text-muted-foreground">{hoverBg}</span>
                                        <input
                                            type="color"
                                            value={hoverBg}
                                            onChange={(e) => setHoverBg(e.target.value)}
                                            className="w-8 h-8 rounded-lg bg-transparent border-none cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Preview Panel */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="relative group flex-1">
                        <div className="absolute -inset-1 bg-linear-to-r from-primary/30 to-accent/30 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
                        <div className="relative h-full clean-card rounded-2xl p-8 lg:p-12 flex flex-col items-center justify-center min-h-[400px]">
                            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-8">
                                <EyeIcon className="w-4 h-4" />
                                Live Preview
                            </div>

                            <div className="w-full max-w-sm">
                                <NepaliDatePicker
                                    key={calLan}
                                    onChange={(result) => setSelectedDate(result)}
                                    theme={{
                                        primary: primaryColor,
                                        hoverBg,
                                        radius: "16px",
                                        fontFamily: "inherit",
                                        shadow: "0 20px 50px -12px rgba(0, 0, 0, 0.5)",
                                    }}
                                    value={todayValue}
                                    calLan={calLan}
                                />
                            </div>

                            <AnimatePresence>
                                {selectedDate && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-12 w-full grid grid-cols-3 gap-4"
                                    >
                                        {[
                                            { label: "B.S.", val: selectedDate.bs },
                                            { label: "A.D.", val: selectedDate.ad.toLocaleDateString() },
                                            { label: "Full", val: selectedDate.nepali },
                                        ].map((info) => (
                                            <div key={info.label} className="bg-black/40 border border-white/5 rounded-2xl p-3 text-center">
                                                <p className="text-[10px] font-bold text-muted-foreground uppercase mb-1">{info.label}</p>
                                                <p className="text-xs font-mono text-primary truncate">{info.val}</p>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
