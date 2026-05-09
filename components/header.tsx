"use client"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky top-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
    >
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30 border border-primary/20">
              ន
            </div>
            <div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">Nepali Calendar Kit</h1>
              <p className="text-xs text-muted-foreground font-medium">AD-BS Conversion Library</p>
            </div>
          </motion.div>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.npmjs.com/package/@gambhirpoudel/nepali-calendar-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition shadow-lg shadow-primary/20 font-semibold text-sm flex items-center gap-2"
          >
            View on NPM
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </motion.a>
        </div>
      </div>
    </motion.header>
  )
}
