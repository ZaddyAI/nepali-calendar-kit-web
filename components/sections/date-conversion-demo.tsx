"use client"
import { adToBs, bsToAd } from "@gambhirpoudel/nepali-calendar-kit"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRightLeftIcon, CalendarIcon, ChevronRightIcon, SparklesIcon } from "lucide-react"

export default function DateConversionDemo() {
    const [activeTab, setActiveTab] = useState<"ad-to-bs" | "bs-to-ad">("ad-to-bs")
    const [adDate, setAdDate] = useState("2026-01-15")
    const [bsResult, setBsResult] = useState("")
    const [bsInput, setBsInput] = useState("2082-10-01")
    const [adResult, setAdResult] = useState("")

    const handleAdToBs = () => {
        const response = adToBs(new Date(adDate))
        setBsResult(`${response.year}-${String(response.month).padStart(2, '0')}-${String(response.day).padStart(2, '0')}`)
    }

    const handleBsToAd = () => {
        const [year, month, day] = bsInput.split('-').map(Number)
        if (!year || !month || !day) return
        const response = bsToAd(year, month, day)
        setAdResult(response.toDateString())
    }

    return (
        <section id="date-conversion" className="space-y-12 mt-16 pt-16 border-t border-border">
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
                    <ArrowRightLeftIcon className="w-3 h-3" />
                    Interactive Converter
                </div>
                <h2 className="text-4xl font-extrabold tracking-tight">2. Date Conversion</h2>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    Seamlessly bridge the gap between Gregorian and Bikram Sambat calendars.
                </p>
            </div>

            <div className="bg-card/40 backdrop-blur-xl border border-border rounded-3xl overflow-hidden">
                <div className="flex border-b border-border">
                    <button 
                        onClick={() => setActiveTab("ad-to-bs")}
                        className={`flex-1 px-6 py-4 text-sm font-bold transition-all ${activeTab === "ad-to-bs" ? "bg-primary/10 text-primary border-b-2 border-primary" : "text-muted-foreground hover:bg-secondary/50"}`}
                    >
                        AD → BS
                    </button>
                    <button 
                        onClick={() => setActiveTab("bs-to-ad")}
                        className={`flex-1 px-6 py-4 text-sm font-bold transition-all ${activeTab === "bs-to-ad" ? "bg-primary/10 text-primary border-b-2 border-primary" : "text-muted-foreground hover:bg-secondary/50"}`}
                    >
                        BS → AD
                    </button>
                </div>

                <div className="p-8 lg:p-12">
                    <AnimatePresence mode="wait">
                        {activeTab === "ad-to-bs" ? (
                            <motion.div 
                                key="ad-to-bs"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="grid lg:grid-cols-2 gap-12 items-center"
                            >
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Select AD Date</label>
                                        <div className="relative group">
                                            <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition" />
                                            <input
                                                type="date"
                                                value={adDate}
                                                onChange={(e) => setAdDate(e.target.value)}
                                                className="w-full pl-12 pr-4 py-4 bg-black/20 border border-border rounded-2xl text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-hidden transition"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleAdToBs}
                                        className="w-full py-4 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 transition shadow-lg shadow-primary/20 font-bold text-lg flex items-center justify-center gap-2 group"
                                    >
                                        Convert to BS
                                        <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition" />
                                    </button>
                                </div>

                                <div className="relative">
                                    <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl" />
                                    <div className="relative bg-black/40 border border-white/5 rounded-2xl p-8 min-h-[200px] flex flex-col justify-center items-center text-center">
                                        {bsResult ? (
                                            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                                                <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-2">Bikram Sambat</p>
                                                <p className="text-4xl lg:text-5xl font-black text-foreground tracking-tight">{bsResult}</p>
                                                <div className="mt-4 flex gap-2 justify-center">
                                                    <div className="px-3 py-1 bg-primary/10 rounded-full text-[10px] font-bold text-primary border border-primary/20">ACCURATE</div>
                                                    <div className="px-3 py-1 bg-accent/10 rounded-full text-[10px] font-bold text-accent border border-accent/20">NEPALI</div>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <div className="text-muted-foreground italic">Result will appear here</div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="bs-to-ad"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="grid lg:grid-cols-2 gap-12 items-center"
                            >
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Enter BS Date (YYYY-MM-DD)</label>
                                        <div className="relative group">
                                            <SparklesIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition" />
                                            <input
                                                type="text"
                                                value={bsInput}
                                                onChange={(e) => setBsInput(e.target.value)}
                                                placeholder="2082-10-01"
                                                className="w-full pl-12 pr-4 py-4 bg-black/20 border border-border rounded-2xl text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-hidden transition font-mono"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleBsToAd}
                                        className="w-full py-4 bg-accent text-accent-foreground rounded-2xl hover:bg-accent/90 transition shadow-lg shadow-accent/20 font-bold text-lg flex items-center justify-center gap-2 group"
                                    >
                                        Convert to AD
                                        <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition" />
                                    </button>
                                </div>

                                <div className="relative">
                                    <div className="absolute -inset-4 bg-accent/10 rounded-[2rem] blur-2xl" />
                                    <div className="relative bg-black/40 border border-white/5 rounded-2xl p-8 min-h-[200px] flex flex-col justify-center items-center text-center">
                                        {adResult ? (
                                            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                                                <p className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-2">Gregorian Date</p>
                                                <p className="text-3xl lg:text-4xl font-black text-foreground tracking-tight">{adResult}</p>
                                                <div className="mt-4 flex gap-2 justify-center">
                                                    <div className="px-3 py-1 bg-accent/10 rounded-full text-[10px] font-bold text-accent border border-accent/20">VERIFIED</div>
                                                    <div className="px-3 py-1 bg-primary/10 rounded-full text-[10px] font-bold text-primary border border-primary/20">ISO STANDARD</div>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <div className="text-muted-foreground italic">Result will appear here</div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
