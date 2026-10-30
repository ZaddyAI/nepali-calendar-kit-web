import MaterialIcon from "@/components/material-icon"
import Logo from "@/components/logo"

const COLUMNS = [
    {
        title: "Ecosystem",
        links: [
            { label: "React Calendar Component", href: "#nepali-date-picker" },
            { label: "Nepali Tithi Engine", href: "#nepali-date" },
            { label: "Devanagari Numerals", href: "#features" },
            { label: "NPM Package Registry", href: "https://www.npmjs.com/package/@gambhirpoudel/nepali-calendar-kit" },
        ],
    },
    {
        title: "Documentation",
        links: [
            { label: "Quickstart Guide", href: "#getting-started" },
            { label: "AD to BS Conversion", href: "#date-conversion" },
            { label: "BS to AD Conversion", href: "#date-conversion" },
            { label: "Component Props", href: "#api-reference" },
        ],
    },
    {
        title: "Community",
        links: [
            { label: "GitHub Repository", href: "https://github.com/ZaddyAI/nepali-calendar-kit" },
            { label: "NPM Package Registry", href: "https://www.npmjs.com/package/@gambhirpoudel/nepali-calendar-kit" },
            { label: "Contributing Guidelines", href: "https://github.com/ZaddyAI/nepali-calendar-kit/blob/main/README.md" },
            { label: "Changelog & Releases", href: "https://github.com/ZaddyAI/nepali-calendar-kit/releases" },
        ],
    },
]

export default function Footer() {
    return (
        <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_12px_rgba(0,0,0,0.02)]">
            <div className="page-container py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
                    <div className="flex flex-col gap-2 md:col-span-1">
                        <div className="flex items-center gap-2">
                            <Logo size={30} className="rounded-lg" />
                            <span className="font-headline text-[20px] leading-7 font-bold text-on-surface">
                                Nepali Calendar Kit
                            </span>
                        </div>
                        <p className="text-[13px] leading-5 text-on-surface-variant">
                            Zero-dependency Bikram Sambat date conversion engine, panchang math, and festival UI kit
                            crafted for the Nepali developer ecosystem.
                        </p>
                        <div className="flex items-center gap-1 mt-1 flex-wrap">
                            <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-[11px] leading-[14px] font-bold text-on-surface-variant">
                                MIT License
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-[11px] leading-[14px] font-bold text-on-secondary-fixed">
                                ESM &amp; CJS
                            </span>
                        </div>
                    </div>

                    {COLUMNS.map((col) => (
                        <div key={col.title} className="flex flex-col gap-2">
                            <span className="text-[11px] leading-[14px] font-bold uppercase text-outline tracking-[0.12em]">
                                {col.title}
                            </span>
                            <ul className="flex flex-col gap-1">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target={link.href.startsWith("http") ? "_blank" : undefined}
                                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="text-[13px] leading-5 text-on-surface-variant hover:text-primary transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-outline text-[13px] leading-5 border-t border-surface-container-high">
                    <p>© 2026 Nepali Calendar Kit. Released under MIT License.</p>
                    <p className="text-on-surface-variant">
                        Developed by{" "}
                        <a
                            href="https://gambhirpoudel.com.np"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs leading-4 font-semibold text-primary hover:underline inline-flex items-center gap-1"
                        >
                            Gambhir Poudel
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
