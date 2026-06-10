"use client"
import { adToBs, formatBs, type DateFormat, type FormatPart } from "@gambhirpoudel/nepali-calendar-kit"
import { HashIcon, CodeIcon } from "lucide-react"
import { useMemo, useState } from "react"

const DATE_FORMATS: DateFormat[] = ["YYYY-MM-DD", "DD-MM-YYYY", "DD/MM/YYYY", "YYYY/MM/DD"]
const MONTH_PARTS: FormatPart[] = ["numeric", "short", "long"]
const DAY_PARTS: FormatPart[] = ["numeric", "short", "long"]

const FORMAT_LABELS: Record<DateFormat, string> = {
  "YYYY-MM-DD": "Standard ISO",
  "DD-MM-YYYY": "European",
  "DD/MM/YYYY": "Slash Delimited",
  "YYYY/MM/DD": "Chronological",
}

const PART_LABELS: Record<FormatPart, string> = {
  numeric: "Number",
  short: "Short",
  long: "Long",
}

export default function SupportedFormats() {
  const todayBS = useMemo(() => adToBs(new Date()), [])

  const [format, setFormat] = useState<DateFormat>("YYYY-MM-DD")
  const [monthFmt, setMonthFmt] = useState<FormatPart>("numeric")
  const [dayFmt, setDayFmt] = useState<FormatPart>("numeric")

  const formatted = useMemo(
    () => formatBs(todayBS, format, monthFmt, dayFmt),
    [todayBS, format, monthFmt, dayFmt],
  )

  const sourceCode = `formatBs(
  { year: ${todayBS.year}, month: ${todayBS.month}, day: ${todayBS.day} },
  '${format}',
  '${monthFmt}',
  '${dayFmt}',
)`

  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
          <HashIcon className="w-3 h-3" />
          Flexible Formatting
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight">Date Format Playground</h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Mix and match date layouts with numeric, short, and long representations for months and days.
        </p>
      </div>

      <div className="clean-card rounded-2xl overflow-hidden">
        <div className="grid lg:grid-cols-5 gap-0">
          {/* Controls */}
          <div className="lg:col-span-2 p-8 lg:p-10 space-y-8 border-r border-border/50">
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Date Format</label>
              <div className="grid grid-cols-2 gap-2">
                {DATE_FORMATS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFormat(f)}
                    className={`py-2.5 px-3 text-[11px] font-bold rounded-xl transition-all border ${format === f
                      ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                      : "bg-black/30 text-muted-foreground border-white/5 hover:border-primary/30 hover:text-foreground"
                      }`}
                  >
                    {FORMAT_LABELS[f]}
                    <span className="block mt-0.5 font-mono opacity-70">{f}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Month Display</label>
              <div className="flex bg-black/40 p-1 rounded-xl border border-white/5">
                {MONTH_PARTS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setMonthFmt(p)}
                    className={`flex-1 py-2 text-[11px] font-bold rounded-lg transition-all ${monthFmt === p
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {PART_LABELS[p]}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Day Display</label>
              <div className="flex bg-black/40 p-1 rounded-xl border border-white/5">
                {DAY_PARTS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setDayFmt(p)}
                    className={`flex-1 py-2 text-[11px] font-bold rounded-lg transition-all ${dayFmt === p
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {PART_LABELS[p]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Output */}
          <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
            <div className="text-center space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Today is</p>
                <p className="text-5xl lg:text-6xl font-black text-foreground tracking-tight font-mono">
                  {formatted}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                {[
                  { label: "Year", value: todayBS.year },
                  { label: "Month", value: todayBS.month },
                  { label: "Day", value: todayBS.day },
                ].map((item) => (
                  <div key={item.label} className="bg-black/30 border border-white/5 rounded-2xl p-3">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase">{item.label}</p>
                    <p className="text-lg font-bold text-primary font-mono">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="bg-black/40 border border-white/5 rounded-2xl p-5 text-left">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  <CodeIcon className="w-3.5 h-3.5" />
                  Equivalent Code
                </div>
                <pre className="font-mono text-xs text-blue-300 leading-relaxed overflow-x-auto">
                  <code>{sourceCode}</code>
                  <br />
                  <span className="text-muted-foreground">// Result: </span>
                  <span className="text-green-300">&quot;{formatted}&quot;</span>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
