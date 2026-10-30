"use client"
import { motion } from "framer-motion"
import MaterialIcon from "@/components/material-icon"

const API_CARDS = [
    {
        label: "Instant Initialization",
        code: `const today = NepaliDate.today();\ntoday.getYear(); // 2082`,
    },
    {
        label: "Flexible Creation",
        code: `// From AD\nnew NepaliDate(new Date("2026-01-15"));\n\n// From BS\nnew NepaliDate({ year: 2082, month: 10, day: 1 });`,
    },
    {
        label: "Formatting Power",
        code: `// Default format (BS)\ntoday.format(); // "२०८२-१०-०१"\n\n// Custom long format\ntoday.format("DD/MM/YYYY", "long", "short");\n// "१२/भदौ/२०८२"`,
    },
]

export default function NepaliDateSection() {
    return (
        <section id="nepali-date" className="w-full py-12">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="page-container bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-[0_12px_40px_rgba(15,23,42,0.04)] flex flex-col gap-6"
            >
                <div className="flex flex-col gap-1">
                    <span className="text-[11px] leading-[14px] font-bold uppercase text-primary tracking-[0.12em]">
                        Object Oriented
                    </span>
                    <h2 className="font-headline text-[28px] leading-[34px] md:text-[40px] md:leading-[46px] font-bold text-on-surface uppercase">
                        NepaliDate API
                    </h2>
                    <p className="text-[15px] leading-6 text-on-surface-variant max-w-xl">
                        A first-class, immutable API that mirrors JavaScript&apos;s native Date object for the Bikram
                        Sambat calendar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {API_CARDS.map((card) => (
                        <div
                            key={card.label}
                            className="bg-surface-container-low p-6 rounded-2xl flex flex-col justify-between gap-2"
                        >
                            <span className="text-[11px] leading-[14px] font-bold uppercase text-outline tracking-[0.12em]">
                                {card.label}
                            </span>
                            <pre className="bg-inverse-surface text-inverse-on-surface p-4 rounded-xl text-xs leading-5 font-mono overflow-x-auto">
                                <code>{card.code}</code>
                            </pre>
                        </div>
                    ))}
                </div>

                <div className="p-6 rounded-2xl bg-secondary-fixed/50 flex items-start gap-4">
                    <MaterialIcon name="help" className="text-primary text-[28px] shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1">
                        <h4 className="font-headline text-[20px] leading-7 font-bold text-on-surface">Why NepaliDate?</h4>
                        <p className="text-[15px] leading-6 text-on-surface-variant">
                            Provides a familiar interface for developers already comfortable with the JS Date API. It
                            handles edge cases like leap months and historical discrepancies automatically.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
