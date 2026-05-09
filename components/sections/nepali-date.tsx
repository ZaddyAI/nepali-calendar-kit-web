import { BoxesIcon, CodeIcon, SparkleIcon, ZapIcon } from "lucide-react"

export default function NepaliDateSection() {
    return (
        <section id="nepali-date" className="space-y-12">
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                    <BoxesIcon className="w-3 h-3" />
                    Object Oriented
                </div>
                <h2 className="text-4xl font-extrabold tracking-tight">NepaliDate API</h2>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    A first-class, immutable API that mirror's JavaScript's native Date object for the Bikram Sambat calendar.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    {[
                        {
                            title: "Instant Initialization",
                            code: `const today = NepaliDate.today();\ntoday.getYear(); // 2082`,
                            icon: <SparkleIcon className="w-4 h-4 text-primary" />
                        },
                        {
                            title: "Flexible Creation",
                            code: `// From AD\nnew NepaliDate(new Date("2026-01-15"));\n\n// From BS\nnew NepaliDate({ year: 2082, month: 10, day: 1 });`,
                            icon: <CodeIcon className="w-4 h-4 text-accent" />
                        }
                    ].map((card) => (
                        <div key={card.title} className="bg-card/40 backdrop-blur-xl border border-border rounded-3xl p-6 space-y-4">
                            <div className="flex items-center gap-3 font-bold text-foreground">
                                {card.icon}
                                {card.title}
                            </div>
                            <div className="bg-black/40 border border-white/5 rounded-2xl p-4 font-mono text-xs text-blue-300">
                                <pre><code>{card.code}</code></pre>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    <div className="bg-card/40 backdrop-blur-xl border border-border rounded-3xl p-8 h-full space-y-6">
                        <div className="flex items-center gap-3 font-bold text-foreground">
                            <ZapIcon className="w-4 h-4 text-orange-400" />
                            Formatting Power
                        </div>
                        <div className="bg-black/40 border border-white/5 rounded-2xl p-6 font-mono text-xs space-y-4">
                            <div className="space-y-1">
                                <p className="text-muted-foreground">// Default format (BS)</p>
                                <p className="text-primary">today.format(); <span className="text-muted-foreground">// "२०८२-१०-०१"</span></p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-muted-foreground">// Custom long format</p>
                                <p className="text-primary">today.format("DD/MM/YYYY", "long", "short");<br/><span className="text-muted-foreground">// "१२/भदौ/२०८२"</span></p>
                            </div>
                        </div>
                        <div className="pt-4 border-t border-white/5">
                            <h4 className="text-sm font-bold text-foreground mb-2">Why NepaliDate?</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Provides a familiar interface for developers already comfortable with the JS Date API. It handles edge cases like leap months and historical discrepancies automatically.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
