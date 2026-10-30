"use client"
import { motion } from "framer-motion"
import MaterialIcon from "@/components/material-icon"

const THEME_OPTIONS = [
    {
        name: "primary",
        desc: "The heartbeat of the UI. Applied to selected dates, buttons, and high-impact accents.",
        example: "#006194",
        swatch: "#006194",
    },
    {
        name: "hoverBg",
        desc: "Background color for hovered and active calendar cells.",
        example: "#cce5ff",
        swatch: "#cce5ff",
    },
    {
        name: "radius",
        desc: "Controls the architectural feel. Use px for precision or rem for responsive scales.",
        example: "12px",
        swatch: null,
    },
    {
        name: "fontFamily",
        desc: "Ensures typographic harmony. Defaults to system-ui but accepts any web font.",
        example: "'Inter', sans-serif",
        swatch: null,
    },
]

const THEME_INTERFACE = `interface Theme {
  primary?: string;       // Accent color (HEX/HSL)
  hoverBg?: string;       // Hover/Active background
  surfaceBg?: string;     // Popover surface background
  inputBg?: string;       // Input field background
  text?: string;          // Text color
  border?: string;        // Border color
  radius?: string;        // Border radius (e.g. '12px')
  fontFamily?: string;    // Custom font-stack
  shadow?: string;        // Box shadow definition
}`

export default function ThemeOptions() {
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
                        Theming Interface
                    </span>
                    <h2 className="font-headline text-[28px] leading-[34px] md:text-[40px] md:leading-[46px] font-bold text-on-surface uppercase">
                        Theme Interface
                    </h2>
                    <p className="text-[15px] leading-6 text-on-surface-variant max-w-xl">
                        Deep customization options to perfectly align the component with your application&apos;s brand
                        identity.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-6 bg-inverse-surface rounded-2xl p-6 text-inverse-on-surface shadow-xl">
                        <span className="text-[11px] leading-[14px] font-bold uppercase text-outline-variant block mb-3">
                            TypeScript Definition
                        </span>
                        <pre className="text-xs leading-5 font-mono text-tertiary-fixed overflow-x-auto">
                            <code>{THEME_INTERFACE}</code>
                        </pre>
                    </div>

                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {THEME_OPTIONS.map((item) => (
                            <div
                                key={item.name}
                                className="bg-surface-container-low p-6 rounded-2xl flex flex-col justify-between gap-1"
                            >
                                <div>
                                    <span className="text-[11px] leading-[14px] font-bold uppercase text-primary tracking-[0.12em]">
                                        {item.name}
                                    </span>
                                    <h4 className="font-headline text-[20px] leading-7 font-bold text-on-surface flex items-center gap-2">
                                        {item.swatch && (
                                            <span
                                                className="w-4 h-4 rounded-full inline-block border border-outline-variant"
                                                style={{ backgroundColor: item.swatch }}
                                            />
                                        )}
                                        {item.example}
                                    </h4>
                                </div>
                                <p className="text-[13px] leading-5 text-on-surface-variant">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-secondary-fixed/50">
                    <MaterialIcon name="palette" className="text-primary text-[22px] shrink-0" />
                    <p className="text-[13px] leading-5 text-on-surface-variant">
                        Use the live playground above to experiment with theme values — changes apply instantly to the
                        rendered calendar.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
