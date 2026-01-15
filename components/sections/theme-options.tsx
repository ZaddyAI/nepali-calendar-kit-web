export default function ThemeOptions() {
  return (
    <section className="space-y-8 mt-16 pt-16 border-t border-border">
      <div>
        <h2 className="text-3xl font-bold mb-2">Theme Options</h2>
        <p className="text-muted-foreground mb-6">Customize the appearance of the date picker with theme properties.</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 overflow-x-auto">
        <pre className="font-mono text-sm text-foreground">
          <code>{`interface Theme {
  primary?: string;         // Primary color
  primaryLight?: string;    // Light primary color
  radius?: string;          // Border radius
  fontFamily?: string;      // Font family
  shadow?: string;          // Box shadow
  inputBg?: string;         // Input background color
}`}</code>
        </pre>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="text-sm font-mono text-primary mb-2">primary</div>
          <p className="text-xs text-muted-foreground">Main color for buttons, accents, and highlights</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="text-sm font-mono text-primary mb-2">radius</div>
          <p className="text-xs text-muted-foreground">Border radius in CSS units (px, rem, etc.)</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="text-sm font-mono text-primary mb-2">fontFamily</div>
          <p className="text-xs text-muted-foreground">CSS font family for all text</p>
        </div>
      </div>
    </section>
  )
}
