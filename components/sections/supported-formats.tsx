export default function SupportedFormats() {
  const formats = ["YYYY-MM-DD", "DD-MM-YYYY", "DD/MM/YYYY", "YYYY/MM/DD"]

  return (
    <section className="space-y-8 mt-16 pt-16 border-t border-border">
      <div>
        <h2 className="text-3xl font-bold mb-6">Supported Date Formats</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {formats.map((format, idx) => (
          <div key={idx} className="bg-card border border-border rounded-lg p-4">
            <code className="font-mono text-primary text-sm">{format}</code>
          </div>
        ))}
      </div>
    </section>
  )
}
