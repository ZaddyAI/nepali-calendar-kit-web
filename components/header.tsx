"use client"
import { motion } from "framer-motion"
import ChangelogSheet from "@/components/changelog-sheet"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
            ន
          </div>
          <div className="hidden sm:block">
            <h1 className="text-base font-semibold tracking-tight text-foreground">Nepali Calendar</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <ChangelogSheet />

          <a
            href="https://www.npmjs.com/package/@gambhirpoudel/nepali-calendar-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition font-medium text-sm flex items-center gap-2"
          >
            <span className="hidden sm:inline">NPM</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </header>
  )
}
