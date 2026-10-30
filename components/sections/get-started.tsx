"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import MaterialIcon from "@/components/material-icon"

const INSTALL_CMD = "npm install @gambhirpoudel/nepali-calendar-kit"

const QUICK_EXAMPLE = `import { adToBs, formatBs } from "@gambhirpoudel/nepali-calendar-kit";

// Convert AD to BS
const bsDate = adToBs(new Date());

// Format the date
const formatted = formatBs(bsDate, 'YYYY-MM-DD');
console.log(formatted); // "२०८१-०१-२७"`

function CopyButton({ text, dark = false }: { text: string; dark?: boolean }) {
    const [copied, setCopied] = useState(false)

    const copy = () => {
        navigator.clipboard?.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    if (dark) {
        return (
            <button
                onClick={copy}
                className={`px-3 py-1 rounded-full text-white text-xs leading-4 font-semibold transition-colors flex items-center gap-1.5 ${
                    copied ? "bg-primary" : "bg-white/10 hover:bg-white/20"
                }`}
            >
                <MaterialIcon name={copied ? "check" : "content_copy"} className="text-[14px]" />
                <span>{copied ? "Copied!" : "Copy"}</span>
            </button>
        )
    }

    return (
        <button
            onClick={copy}
            className="p-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-on-surface shadow-sm"
        >
            <MaterialIcon name={copied ? "check" : "content_copy"} className={`text-[18px] ${copied ? "text-primary" : ""}`} />
        </button>
    )
}

export default function GettingStarted() {
    return (
        <section id="getting-started" className="w-full py-12">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="page-container bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-[0_12px_40px_rgba(15,23,42,0.04)] flex flex-col gap-6"
            >
                <div className="flex flex-col gap-1 max-w-xl">
                    <span className="text-[11px] leading-[14px] font-bold uppercase text-primary tracking-[0.12em]">
                        Quick Start
                    </span>
                    <h2 className="font-headline text-[28px] leading-[34px] md:text-[40px] md:leading-[46px] font-bold text-on-surface uppercase">
                        1. Getting Started
                    </h2>
                    <p className="text-[15px] leading-6 text-on-surface-variant">
                        Install the package and start converting dates in seconds with full type safety.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Install instructions */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <span className="text-[11px] leading-[14px] font-bold uppercase text-outline tracking-[0.12em]">
                                Installation
                            </span>
                            <div className="bg-surface-container-low rounded-2xl p-4 flex items-center justify-between gap-3 shadow-inner">
                                <code className="text-xs leading-4 font-semibold text-on-surface select-all">
                                    {INSTALL_CMD}
                                </code>
                                <CopyButton text={INSTALL_CMD} />
                            </div>
                        </div>
                        <div className="p-5 rounded-2xl bg-surface-container-low/60 flex flex-col gap-1">
                            <h4 className="font-headline text-[20px] leading-7 font-bold text-on-surface">Next Steps</h4>
                            <p className="text-[13px] leading-5 text-on-surface-variant">
                                Explore each function below to see interactive demos and examples. All functions are
                                fully typed with TypeScript for the best developer experience.
                            </p>
                        </div>
                    </div>

                    {/* Quick example dark code card */}
                    <div className="lg:col-span-7 bg-inverse-surface rounded-2xl overflow-hidden shadow-xl text-inverse-on-surface">
                        <div className="bg-[#131e2e] px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-error" />
                                <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                                <span className="w-3 h-3 rounded-full bg-[#10b981]" />
                                <span className="ml-2 text-[11px] leading-[14px] font-bold uppercase text-outline-variant">
                                    Quick Example
                                </span>
                            </div>
                            <CopyButton text={QUICK_EXAMPLE} dark />
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="text-xs leading-5 font-mono text-tertiary-fixed" id="code-quick-example">
                                <code>{QUICK_EXAMPLE}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
