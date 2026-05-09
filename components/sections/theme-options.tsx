import { PaletteIcon, Code2Icon } from "lucide-react"

export default function ThemeOptions() {
  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
          <PaletteIcon className="w-3 h-3" />
          Theming Interface
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight">Theme Interface</h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Deep customization options to perfectly align the component with your application's brand identity.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="bg-card/40 backdrop-blur-xl border border-border rounded-[2rem] p-8 lg:p-10 space-y-6">
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary mb-2">
            <Code2Icon className="w-4 h-4" />
            TypeScript Definition
          </div>
          <div className="bg-black/60 rounded-2xl p-6 border border-white/5 overflow-x-auto">
            <pre className="font-mono text-xs leading-relaxed text-blue-300">
              <code>{`interface Theme {
  primary?: string;       // Accent color (HEX/HSL)
  primaryLight?: string;  // Hover/Active background
  radius?: string;        // Border radius (e.g. '12px')
  fontFamily?: string;    // Custom font-stack
  shadow?: string;        // Box shadow definition
  inputBg?: string;       // Field background
}`}</code>
            </pre>
          </div>
        </div>

        <div className="grid gap-4">
          {[
            { 
              name: "primary", 
              desc: "The heartbeat of the UI. Applied to selected dates, buttons, and high-impact accents.",
              example: "#6366f1"
            },
            { 
              name: "radius", 
              desc: "Controls the architectural feel. Use px for precision or rem for responsive scales.",
              example: "12px"
            },
            { 
              name: "fontFamily", 
              desc: "Ensures typographic harmony. Defaults to system-ui but accepts any web font.",
              example: "'Inter', sans-serif"
            }
          ].map((item) => (
            <div key={item.name} className="bg-card/40 backdrop-blur-xl border border-border rounded-2xl p-6 hover:border-primary/50 transition duration-300 group">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-black font-mono text-primary group-hover:text-foreground transition-colors">{item.name}</span>
                <span className="text-[10px] font-mono text-muted-foreground bg-white/5 px-2 py-0.5 rounded">{item.example}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
