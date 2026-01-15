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
    <section className="space-y-8 mt-16 pt-16 border-t border-border">
      <div>
        <h2 className="text-3xl font-bold mb-6">Props</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-bold text-foreground">Prop</th>
              <th className="text-left py-3 px-4 font-bold text-foreground">Type</th>
              <th className="text-left py-3 px-4 font-bold text-foreground">Default</th>
              <th className="text-left py-3 px-4 font-bold text-foreground">Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map((row, idx) => (
              <tr key={idx} className="border-b border-border/50 hover:bg-secondary/30 transition">
                <td className="py-3 px-4 font-mono text-primary">{row.prop}</td>
                <td className="py-3 px-4 font-mono text-xs text-muted-foreground bg-card/50 rounded">{row.type}</td>
                <td className="py-3 px-4 font-mono text-xs">{row.default}</td>
                <td className="py-3 px-4 text-muted-foreground">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
