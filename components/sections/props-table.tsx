"use client"
import { motion } from "framer-motion"
import MaterialIcon from "@/components/material-icon"

const PROPS = [
    {
        prop: "onChange",
        type: "(result: DatePickerResult | null) => void",
        default: "undefined",
        description: "Callback when a date is selected",
    },
    { prop: "theme", type: "Theme", default: "undefined", description: "Custom theming options" },
    { prop: "value", type: "string", default: '""', description: "Initial date value (YYYY-MM-DD)" },
    { prop: "format", type: "DateFormat", default: '"YYYY-MM-DD"', description: "Display and input format" },
    { prop: "calLan", type: "LanguageCode", default: '"en"', description: "Language for all calendar labels" },
    { prop: "placeholder", type: "string", default: "undefined", description: "Input placeholder text" },
    { prop: "disabled", type: "boolean", default: "false", description: "Disable the date picker" },
    { prop: "className", type: "string", default: "undefined", description: "Additional CSS class name" },
]

export default function PropsTable() {
    return (
        <section id="api-reference" className="w-full py-12">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="page-container bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-[0_12px_40px_rgba(15,23,42,0.04)] flex flex-col gap-6"
            >
                <div className="flex flex-col gap-1">
                    <span className="text-[11px] leading-[14px] font-bold uppercase text-primary tracking-[0.12em]">
                        API Reference
                    </span>
                    <h2 className="font-headline text-[28px] leading-[34px] md:text-[40px] md:leading-[46px] font-bold text-on-surface uppercase">
                        Component Props
                    </h2>
                    <p className="text-[15px] leading-6 text-on-surface-variant max-w-xl">
                        Detailed breakdown of all available configuration options for the NepaliDatePicker.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-surface-container-high text-outline text-[11px] leading-[14px] font-bold uppercase tracking-[0.12em]">
                                <th className="py-3 px-4">Property</th>
                                <th className="py-3 px-4">Type</th>
                                <th className="py-3 px-4">Default</th>
                                <th className="py-3 px-4">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-container text-[15px] leading-6">
                            {PROPS.map((row) => (
                                <tr key={row.prop} className="hover:bg-surface-container-low transition-colors">
                                    <td className="py-3.5 px-4 font-bold text-primary">{row.prop}</td>
                                    <td className="py-3.5 px-4">
                                        <code className="px-2 py-0.5 rounded bg-surface-container-high font-mono text-xs leading-4 text-on-surface whitespace-nowrap">
                                            {row.type}
                                        </code>
                                    </td>
                                    <td className="py-3.5 px-4 text-outline font-mono text-xs">{row.default}</td>
                                    <td className="py-3.5 px-4 text-on-surface-variant">{row.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-secondary-fixed/50">
                    <MaterialIcon name="info" className="text-primary text-[22px] shrink-0" />
                    <p className="text-[13px] leading-5 text-on-surface-variant">
                        Every prop is fully typed. Import types directly from
                        <code className="mx-1 px-1.5 py-0.5 rounded bg-surface-container-lowest font-mono text-xs">
                            @gambhirpoudel/nepali-calendar-kit
                        </code>
                        for editor autocomplete.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
