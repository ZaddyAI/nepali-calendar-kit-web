"use client"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { changelogData } from "@/data/changelog"
import MaterialIcon from "@/components/material-icon"

function renderInline(text: string) {
  const parts: React.ReactNode[] = []
  const regex = /(\*\*[^*]+\*\*)|(`[^`]+`)/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    if (match[1]) {
      parts.push(
        <strong key={parts.length} className="text-on-surface font-bold">
          {match[1].slice(2, -2)}
        </strong>,
      )
    } else if (match[2]) {
      parts.push(
        <code
          key={parts.length}
          className="bg-secondary-fixed text-on-secondary-fixed px-1.5 py-0.5 rounded-md text-[11px] font-mono font-semibold"
        >
          {match[2].slice(1, -1)}
        </code>,
      )
    }

    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts
}

const HEADING_STYLES: Record<string, string> = {
  "Breaking changes": "bg-error-container text-on-error-container",
  Features: "bg-secondary-fixed text-on-secondary-fixed",
  Theming: "bg-tertiary-fixed text-on-tertiary-fixed",
  Fixes: "bg-surface-container-high text-on-surface-variant",
}

export default function ChangelogSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors text-xs leading-4 font-semibold">
          <MaterialIcon name="history" className="text-[16px] text-primary" />
          <span className="hidden sm:inline">Changelog</span>
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[92vw] sm:w-[640px] lg:w-[720px] sm:max-w-[640px] lg:max-w-[720px] p-0 flex flex-col overflow-hidden bg-surface-container-lowest border-l border-surface-container"
      >
        {/* Gradient header */}
        <SheetHeader className="px-6 pt-6 pb-5 bg-gradient-to-br from-primary via-primary to-primary-container text-on-primary relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <SheetTitle className="text-xl flex items-center gap-3 relative z-10">
            <span className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
              <MaterialIcon name="history" className="text-[22px]" />
            </span>
            <span className="flex flex-col items-start">
              <span className="font-headline text-[22px] leading-7 font-bold uppercase tracking-wide">
                Changelog
              </span>
              <span className="text-[11px] leading-[14px] font-semibold uppercase tracking-[0.12em] text-white/70">
                Release notes &amp; updates
              </span>
            </span>
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 px-6 py-6 min-h-0">
          <div className="relative">
            {changelogData.map((entry, entryIdx) => {
              const isLast = entryIdx === changelogData.length - 1
              return (
                <section key={entry.version} className="relative pb-10 last:pb-0">
                  {/* Timeline rail */}
                  {!isLast && (
                    <span className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-surface-container-high rounded-full" />
                  )}

                  <div className="relative pl-10">
                    {/* Timeline dot (inset so its outer ring is never clipped) */}
                    <span
                      className={`absolute left-1 top-1.5 w-4 h-4 rounded-full border-4 border-surface-container-lowest shadow-[0_0_0_2px_rgba(0,97,148,0.25)] ${
                        entryIdx === 0 ? "bg-primary" : "bg-secondary-fixed-dim"
                      }`}
                    />

                    <div className="flex items-center gap-2 flex-wrap mb-4">
                      <h3 className="font-headline text-[22px] leading-7 font-bold text-on-surface">
                        v{entry.version}
                      </h3>
                      {entryIdx === 0 && (
                        <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] leading-[14px] font-bold uppercase tracking-[0.12em]">
                          Latest
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant text-[11px] leading-[14px] font-semibold font-mono">
                        {entry.date}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {entry.sections.map((section) => (
                        <div
                          key={section.heading}
                          className="bg-surface-container-lowest rounded-2xl p-4 shadow-[0_2px_12px_rgba(15,23,42,0.04)] border border-surface-container"
                        >
                          <span
                            className={`inline-block px-2.5 py-1 rounded-full text-[11px] leading-[14px] font-bold uppercase tracking-[0.12em] mb-3 ${
                              HEADING_STYLES[section.heading] ??
                              "bg-surface-container-high text-on-surface-variant"
                            }`}
                          >
                            {section.heading}
                          </span>
                          <ul className="space-y-2.5">
                            {section.items.map((item, i) => (
                              <li
                                key={i}
                                className="text-[13px] leading-5 text-on-surface-variant pl-4 relative before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-outline-variant"
                              >
                                {renderInline(item)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )
            })}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
