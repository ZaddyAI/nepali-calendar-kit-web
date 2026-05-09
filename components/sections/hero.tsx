"use client"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { MouseEvent } from "react"
import { CalendarIcon, CodeIcon, RefreshCcwIcon, PaintbrushIcon, CheckCircle2Icon } from "lucide-react"

export default function Hero() {
    // 3D Tilt Effect
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const rotateX = useTransform(y, [-100, 100], [15, -15])
    const rotateY = useTransform(x, [-100, 100], [-15, 15])

    function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        x.set(event.clientX - centerX)
        y.set(event.clientY - centerY)
    }

    function handleMouseLeave() {
        x.set(0)
        y.set(0)
    }

    return (
        <section className="space-y-16">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Left Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        v1.0 is now live
                    </div>
                    
                    <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                        The Ultimate <br/>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary bg-300% animate-gradient">
                            Nepali Calendar
                        </span> Kit
                    </h1>
                    
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                        Production-ready library for converting between Gregorian (AD) and Nepali (BS) dates. Includes an
                        interactive date picker with full TypeScript support.
                    </p>
                    
                    <div className="flex gap-4 flex-wrap pt-2">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = "#getting-started"} 
                            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition font-semibold text-lg flex items-center gap-2"
                        >
                            Get Started
                            <CodeIcon className="w-5 h-5" />
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = "#nepali-date-picker"} 
                            className="px-8 py-4 bg-secondary/50 backdrop-blur-md border border-border text-foreground rounded-xl hover:bg-secondary/80 transition font-semibold text-lg"
                        >
                            View Examples
                        </motion.button>
                    </div>
                </motion.div>

                {/* Right 3D Visual */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex-1 w-full flex justify-center perspective-[1000px]"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div
                        style={{ rotateX, rotateY, z: 100 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl bg-linear-to-br from-card/80 to-background/50 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] shadow-primary/20 flex flex-col p-8 overflow-hidden preserve-3d"
                    >
                        {/* Inner 3D elements */}
                        <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-transparent to-transparent opacity-50" />
                        
                        <motion.div 
                            style={{ translateZ: 50 }}
                            className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 border border-primary/30"
                        >
                            <CalendarIcon className="w-8 h-8 text-primary" />
                        </motion.div>
                        
                        <motion.div style={{ translateZ: 40 }} className="space-y-4">
                            <div className="h-4 w-1/3 bg-muted rounded-full" />
                            <div className="h-8 w-3/4 bg-foreground/20 rounded-lg" />
                            <div className="h-4 w-1/2 bg-muted rounded-full" />
                        </motion.div>

                        <motion.div 
                            style={{ translateZ: 60 }}
                            className="mt-auto grid grid-cols-7 gap-2"
                        >
                            {Array.from({ length: 35 }).map((_, i) => (
                                <div 
                                    key={i} 
                                    className={`aspect-square rounded-md ${i === 12 ? 'bg-primary shadow-lg shadow-primary/40' : 'bg-foreground/5'} flex items-center justify-center text-[10px] font-medium text-muted-foreground`}
                                >
                                    {i > 3 && i < 34 ? (i - 3) : ''}
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-12">
                {[
                    { icon: RefreshCcwIcon, title: "AD ↔ BS Conversion", desc: "Seamlessly convert between Gregorian and Nepali calendars with verified accuracy." },
                    { icon: CalendarIcon, title: "Interactive DatePicker", desc: "React component for selecting Nepali dates with full customization options." },
                    { icon: PaintbrushIcon, title: "Flexible Formatting", desc: "Multiple formatting options with Nepali numerals and localized month names." }
                ].map((feature, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                            <feature.icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-linear-to-br from-card/80 to-background/50 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
                <h2 className="text-3xl font-bold mb-8 relative z-10">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6 relative z-10">
                    {[
                        { title: "Accurate Conversion", desc: "Based on verified data since 1943" },
                        { title: "TypeScript Support", desc: "Full type definitions included" },
                        { title: "Customizable Themes", desc: "Control colors, fonts, and styling" },
                        { title: "Multi-language", desc: "English and Nepali support" }
                    ].map((feat, idx) => (
                        <div key={idx} className="flex gap-4 group">
                            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <CheckCircle2Icon className="w-5 h-5" />
                            </div>
                            <div>
                                <strong className="text-foreground text-lg">{feat.title}</strong>
                                <p className="text-sm text-muted-foreground mt-1">{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
