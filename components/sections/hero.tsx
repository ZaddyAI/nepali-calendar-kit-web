"use client"
import { motion } from "framer-motion"
import { CalendarIcon, CodeIcon, RefreshCcwIcon, PaintbrushIcon, CheckCircle2Icon } from "lucide-react"

export default function Hero() {
    return (
        <section className="space-y-16">
            <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto pt-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest border border-accent/20"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    v2.0 is now live
                </motion.div>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]"
                >
                    The Professional <br/>
                    <span className="text-transparent bg-clip-text text-gradient">
                        Nepali Calendar
                    </span> Kit
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
                >
                    High-performance library for converting between Gregorian (AD) and Nepali (BS) dates. Includes an
                    interactive date picker with full TypeScript support.
                </motion.p>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex gap-4 flex-wrap justify-center pt-4"
                >
                    <button 
                        onClick={() => window.location.href = "#getting-started"} 
                        className="px-8 py-3.5 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition font-semibold text-base flex items-center gap-2"
                    >
                        Get Started
                        <CodeIcon className="w-4 h-4" />
                    </button>
                    <button 
                        onClick={() => window.location.href = "#nepali-date-picker"} 
                        className="px-8 py-3.5 bg-transparent border border-border text-foreground rounded hover:bg-muted transition font-semibold text-base"
                    >
                        View Documentation
                    </button>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-12">
                {[
                    { icon: RefreshCcwIcon, title: "AD ↔ BS Conversion", desc: "Seamlessly convert between Gregorian and Nepali calendars with verified accuracy." },
                    { icon: CalendarIcon, title: "Interactive DatePicker", desc: "React component for selecting Nepali dates with full customization options." },
                    { icon: PaintbrushIcon, title: "Flexible Formatting", desc: "Multiple formatting options with Nepali numerals and localized month names." }
                ].map((feature, idx) => (
                    <div 
                        key={idx}
                        className="clean-card p-6"
                    >
                        <div className="w-10 h-10 rounded border border-border bg-muted flex items-center justify-center mb-4 text-foreground">
                            <feature.icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>

            <div className="clean-card p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
                <h2 className="text-2xl font-bold mb-8 relative z-10 text-foreground">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6 relative z-10">
                    {[
                        { title: "Accurate Conversion", desc: "Based on verified data since 1943" },
                        { title: "TypeScript Support", desc: "Full type definitions included" },
                        { title: "Zero Dependencies", desc: "Lightweight and fully self-contained core" },
                        { title: "Multi-language", desc: "English and Nepali localized outputs" }
                    ].map((feat, idx) => (
                        <div key={idx} className="flex gap-4">
                            <div className="w-6 h-6 mt-0.5 text-accent flex items-center justify-center shrink-0">
                                <CheckCircle2Icon className="w-5 h-5" />
                            </div>
                            <div>
                                <strong className="text-foreground text-base">{feat.title}</strong>
                                <p className="text-sm text-muted-foreground mt-1">{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
