"use client"
import { useState } from "react"
import MaterialIcon from "@/components/material-icon"
import Logo from "@/components/logo"
import ChangelogSheet from "@/components/changelog-sheet"

const NAV_LINKS = [
    { label: "Features", href: "#features" },
    { label: "Interactive Converter", href: "#date-conversion" },
    { label: "Component Playground", href: "#nepali-date-picker" },
    { label: "API Reference", href: "#api-reference" },
]

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
            {/*
        3-column grid: brand | nav | actions.
        Each zone owns its own column, so the menu can never
        override or overlap the brand / action buttons.
      */}
            <div className="page-container h-16 grid grid-cols-[auto_1fr_auto] items-center gap-4">
                {/* Left: brand */}
                <div className="flex items-center gap-2 justify-self-start">
                    <a href="#" className="flex items-center gap-2.5 shrink-0">
                        <Logo size={42} className="shadow-[0_4px_14px_rgba(0,97,148,0.25)] rounded-xl shrink-0" />
                        <span className="font-headline text-[20px] leading-7 font-bold text-on-surface tracking-tight hidden lg:block whitespace-nowrap">
                            Nepali Calendar Kit
                        </span>
                    </a>
                    <span className="hidden lg:inline shrink-0 px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] leading-[14px] font-bold tracking-[0.12em] uppercase">
                        v2.0
                    </span>
                </div>

                {/* Center: navigation (fills remaining space — no overlap possible) */}
                <nav className="hidden xl:flex items-center gap-6 justify-center overflow-hidden">
                    {NAV_LINKS.map((link, idx) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`text-sm leading-5 tracking-[0.01em] whitespace-nowrap transition-colors ${idx === 0
                                ? "text-primary font-bold"
                                : "font-semibold text-on-surface-variant hover:text-on-surface"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Right: actions */}
                <div className="flex items-center gap-2 justify-self-end">
                    <ChangelogSheet />

                    {/* Mobile menu toggle (shown below xl where nav is hidden) */}
                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        className="xl:hidden flex items-center justify-center w-9 h-9 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface transition-colors shrink-0"
                    >
                        <MaterialIcon name={menuOpen ? "close" : "menu"} className="text-[20px]" />
                    </button>

                    <a
                        href="https://www.npmjs.com/package/@gambhirpoudel/nepali-calendar-kit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden lg:flex items-center gap-1.5 bg-surface-container-low px-3 py-1.5 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] hover:bg-surface-container hover:text-on-surface text-on-surface-variant transition-colors shrink-0"
                    >
                        <MaterialIcon name="terminal" className="text-[16px] text-primary" />
                        <code className="text-xs leading-4 font-semibold select-all whitespace-nowrap">
                            NPM
                        </code>
                        <MaterialIcon name="open_in_new" className="text-[14px] text-outline" />
                    </a>

                    <a
                        href="https://www.npmjs.com/package/@gambhirpoudel/nepali-calendar-kit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant text-xs leading-4 font-semibold shrink-0"
                    >
                        <MaterialIcon name="terminal" className="text-[16px] text-primary" />
                        npm
                    </a>

                    <a
                        href="https://github.com/ZaddyAI/nepali-calendar-kit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-on-primary text-xs leading-4 font-semibold hover:bg-primary-container transition-colors shadow-[0_2px_8px_rgba(0,97,148,0.2)] shrink-0"
                    >
                        <MaterialIcon name="code" className="text-[18px]" />
                        <span className="hidden sm:inline">GitHub</span>
                    </a>
                </div>
            </div>

            {/* Mobile / tablet dropdown menu (below xl) */}
            {menuOpen && (
                <div className="xl:hidden border-t border-surface-container bg-surface-container-lowest/95 backdrop-blur-xl">
                    <nav className="page-container py-3 flex flex-col">
                        {NAV_LINKS.map((link, idx) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`py-3 px-3 rounded-xl text-sm leading-5 transition-colors ${
                                    idx === 0
                                        ? "text-primary font-bold bg-secondary-fixed/40"
                                        : "font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="https://github.com/ZaddyAI/nepali-calendar-kit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 py-3 px-3 rounded-xl text-sm leading-5 font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low flex items-center gap-2"
                        >
                            <MaterialIcon name="code" className="text-[18px] text-primary" />
                            GitHub Repository
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}
