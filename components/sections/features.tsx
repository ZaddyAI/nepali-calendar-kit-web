"use client"
import { motion } from "framer-motion"
import { ArrowRightLeftIcon, Code2Icon, CalendarDaysIcon, Settings2Icon, Globe2Icon } from "lucide-react"

export default function Features() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    }

    const features = [
        {
            icon: ArrowRightLeftIcon,
            title: "AD to BS & BS to AD",
            desc: "Convert AD (Gregorian) dates to BS (Bikram Sambat) and vice versa with precision."
        },
        {
            icon: Settings2Icon,
            title: "Multiple Formats",
            desc: "Format dates in YYYY-MM-DD, DD-MM-YYYY, DD/MM/YYYY, and custom configurations."
        },
        {
            icon: Globe2Icon,
            title: "Localization",
            desc: "Display Nepali dates with numeric, short, or long month names, and Nepali numerals (१, २, ३…)."
        },
        {
            icon: CalendarDaysIcon,
            title: "Nepali DatePicker",
            desc: "React component with powerful theming, accessibility, and localization support built-in."
        },
        {
            icon: Code2Icon,
            title: "Fully Typed",
            desc: "First-class TypeScript support for robust development and auto-completion."
        }
    ]

    return (
        <section className="mt-16 pt-16 border-t border-border relative">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
                <h2 className="text-4xl font-extrabold mb-10 tracking-tight">Core Features</h2>
                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid gap-4"
                >
                    {features.map((feat, idx) => (
                        <motion.div 
                            key={idx}
                            variants={item}
                            whileHover={{ scale: 1.01, x: 10 }}
                            className="flex gap-6 items-center p-6 bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl hover:bg-card/80 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-default"
                        >
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 text-primary">
                                <feat.icon className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-1">{feat.title}</h3>
                                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                                    {feat.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
