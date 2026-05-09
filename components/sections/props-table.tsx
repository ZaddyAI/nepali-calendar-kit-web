import { TableIcon } from "lucide-react"

export default function PropsTable() {
  const props = [
    {
      prop: "onChange",
      type: "(result: DatePickerResult | null) => void",
      default: "undefined",
      description: "Callback when a date is selected",
    },
    { prop: "theme", type: "Theme", default: "undefined", description: "Custom theming options" },
    { prop: "value", type: "string", default: '""', description: "Initial date value" },
    { prop: "dateLan", type: "LanguageCode", default: '"en"', description: "Language for date numbers" },
    { prop: "monthLan", type: "LanguageCode", default: '"en"', description: "Language for month names" },
    { prop: "dayLan", type: "LanguageCode", default: '"en"', description: "Language for day names" },
    { prop: "yearLan", type: "LanguageCode", default: '"en"', description: "Language for year numbers" },
  ]

  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary-foreground text-xs font-bold uppercase tracking-wider border border-border">
          <TableIcon className="w-3 h-3" />
          API Reference
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight">Component Props</h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Detailed breakdown of all available configuration options for the NepaliDatePicker.
        </p>
      </div>

      <div className="bg-card/40 backdrop-blur-xl border border-border rounded-[2rem] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-border">
                <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">Property</th>
                <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">Type</th>
                <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">Default</th>
                <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {props.map((row, idx) => (
                <tr key={idx} className="hover:bg-primary/5 transition-colors group">
                  <td className="py-5 px-6">
                    <span className="font-mono text-sm text-primary font-bold">{row.prop}</span>
                  </td>
                  <td className="py-5 px-6">
                    <code className="text-[11px] font-mono bg-black/40 px-2 py-1 rounded-lg border border-white/5 text-accent whitespace-nowrap">
                      {row.type}
                    </code>
                  </td>
                  <td className="py-5 px-6 text-xs font-mono text-muted-foreground">
                    {row.default}
                  </td>
                  <td className="py-5 px-6 text-sm text-muted-foreground leading-relaxed">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
