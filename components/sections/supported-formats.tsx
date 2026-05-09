import { HashIcon } from "lucide-react"

export default function SupportedFormats() {
  const formats = [
    { label: "Standard ISO", value: "YYYY-MM-DD" },
    { label: "European", value: "DD-MM-YYYY" },
    { label: "Slash Delimited", value: "DD/MM/YYYY" },
    { label: "Chronological", value: "YYYY/MM/DD" }
  ]

  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
          <HashIcon className="w-3 h-3" />
          Flexible Formatting
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight">Standard Formats</h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Out-of-the-box support for the most common date patterns used in modern web engineering.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {formats.map((format, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -inset-0.5 bg-linear-to-r from-primary/20 to-accent/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-card/40 backdrop-blur-xl border border-border rounded-2xl p-6 text-center">
              <p className="text-[10px] font-bold text-muted-foreground uppercase mb-3 tracking-widest">{format.label}</p>
              <code className="font-mono text-sm text-primary font-black">{format.value}</code>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
