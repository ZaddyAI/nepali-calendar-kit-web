"use client"
import { motion } from "framer-motion"
import { TerminalIcon, CopyIcon, PackageIcon, CodeIcon } from "lucide-react"
import { useState } from "react"

export default function GettingStarted() {
    const [copied, setCopied] = useState(false)
    const installCmd = "npm install @gambhirpoudel/nepali-calendar-kit"

    const copyToClipboard = () => {
        navigator.clipboard.writeText(installCmd)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section id="getting-started" className="space-y-12">
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                    <TerminalIcon className="w-3 h-3" />
                    Quick Start
                </div>
                <h2 className="text-4xl font-extrabold tracking-tight">1. Getting Started</h2>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    Install the package and start converting dates in seconds with full type safety.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative clean-card rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                                    <PackageIcon className="w-4 h-4" />
                                    Installation
                                </div>
                                <button 
                                    onClick={copyToClipboard}
                                    className="p-2 hover:bg-secondary/80 rounded-lg transition text-muted-foreground hover:text-primary"
                                >
                                    {copied ? <span className="text-xs font-bold text-primary">Copied!</span> : <CopyIcon className="w-4 h-4" />}
                                </button>
                            </div>
                            <code className="text-foreground font-mono text-sm block bg-black/20 p-4 rounded-xl border border-white/5">
                                {installCmd}
                            </code>
                        </div>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                        <h3 className="font-bold mb-3 text-primary flex items-center gap-2 text-lg">
                            <CodeIcon className="w-5 h-5" />
                            Next Steps
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Explore each function below to see interactive demos and examples. All functions are fully typed with
                            TypeScript for the best developer experience.
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="clean-card rounded-xl p-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <CodeIcon className="w-32 h-32" />
                    </div>
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <PackageIcon className="w-5 h-5 text-primary" />
                        Quick Example
                    </h3>
                    <div className="space-y-4 font-mono text-sm">
                        <div className="bg-black/30 p-5 rounded-xl border border-white/5 overflow-x-auto">
                            <pre className="text-foreground">
                                <code className="text-blue-400">import</code> {`{ adToBs, formatBs } `} <code className="text-blue-400">from</code> <code className="text-orange-300">"@gambhirpoudel/nepali-calendar-kit"</code>;{`\n\n`}
                                <code className="text-muted-foreground">// Convert AD to BS</code>{`\n`}
                                <code className="text-blue-400">const</code> bsDate = <code className="text-yellow-200">adToBs</code>(<code className="text-blue-400">new</code> <code className="text-yellow-200">Date</code>());{`\n\n`}
                                <code className="text-muted-foreground">// Format the date</code>{`\n`}
                                <code className="text-blue-400">const</code> formatted = <code className="text-yellow-200">formatBs</code>(bsDate, <code className="text-orange-300">'YYYY-MM-DD'</code>);{`\n`}
                                <code className="text-yellow-200">console</code>.<code className="text-yellow-200">log</code>(formatted); <code className="text-muted-foreground">// "२०८१-०१-२७"</code>
                            </pre>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

