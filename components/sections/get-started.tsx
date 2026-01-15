export default function GettingStarted() {
    return (
        <section id="getting-started" className="space-y-8 mt-16 pt-16 border-t border-border">
            <div>
                <h1 className="text-3xl font-bold mb-2">1. Getting Started</h1>
                <p className="text-muted-foreground mb-6">Install the package and start converting dates in seconds.</p>
            </div>

            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-bold mb-4">Installation</h2>
                    <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
                        <code className="text-foreground">npm install @gambhirpoudel/nepali-calendar-kit</code>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                        Or use your preferred package manager: yarn, pnpm, or bun.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4">Import Functions</h2>
                    <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm overflow-x-auto">
                        <code>{`import {
  adToBs,
  bsToAd,
  formatBs,
  formatAd,
  NepaliDatePicker
} from "@gambhirpoudel/nepali-calendar-kit"`}</code>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4">Quick Example</h2>
                    <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm overflow-x-auto">
                        <pre>
                            <code className="text-foreground">{`// Convert AD to BS
const bsDate = adToBs(new Date(2024, 0, 15))
console.log(bsDate) // { year: 2080, month: 10, day: 2 }

// Format the date
const formatted = formatBs(bsDate, 'YYYY-MM-DD')
console.log(formatted) // "२०८०-१०-०२"`}</code>
                        </pre>
                    </div>
                </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-bold mb-2 text-primary">Next Steps</h3>
                <p className="text-sm text-muted-foreground">
                    Explore each function below to see interactive demos and examples. All functions are fully typed with
                    TypeScript.
                </p>
            </div>
        </section>
    )
}
