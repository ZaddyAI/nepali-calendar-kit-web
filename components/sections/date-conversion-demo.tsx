"use client"
import { adToBs, bsToAd } from "@gambhirpoudel/nepali-calendar-kit"
import { useState } from "react"

export default function DateConversionDemo() {
    const [adDate, setAdDate] = useState("2026-01-15")
    const [bsDate, setBsDate] = useState("")
    const [bsInput, setBsInput] = useState("2082-10-1")
    const [adResult, setAdResult] = useState("")

    const convertAdToBs = () => {
        const response = adToBs(new Date(adDate))
        setBsDate(`${response.year}-${response.month}-${response.day}`)
    }

    const convertBsToAd = () => {
        // Example conversion logic
        const [year, month, day] = bsInput.split('-').map(Number);
        const response = bsToAd(year, month, day);
        setAdResult(response.toString());
    }

    return (
        <section id="date-conversion" className="space-y-8 mt-16 pt-16 border-t border-border">
            <div>
                <h2 className="text-3xl font-bold mb-2">2. Date Conversion</h2>
                <p className="text-muted-foreground mb-6">Convert between AD and BS dates with a single function call.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 overflow-x-auto">
                <pre className="font-mono text-sm text-foreground">
                    <code>{`import { adToBs, bsToAd, formatBs, formatAd } from '@gambhirpoudel/nepali-calendar-kit';

// Convert AD → BS
const bsDate = adToBs(new Date('2026-01-15'));
console.log(bsDate);
// Output: { year: 2082, month: 10, day: 1 }

// Convert BS → AD
const adDate = bsToAd(2082, 10, 1);
console.log(adDate);
// Output: Thu Jan 15 2026 00:00:00 GMT+0000 (UTC)

// Format BS Date
console.log(formatBs(bsDate, "DD-MM-YYYY", "long", "short"));
// Output: "१-१०-२०८२"

// Format AD Date
console.log(formatAd(adDate, "YYYY/MM/DD"));
// Output: "2026/01/15"`}</code>
                </pre>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-bold mb-4">Try AD to BS</h3>
                    <div className="space-y-3">
                        <input
                            type="date"
                            value={adDate}
                            onChange={(e) => setAdDate(e.target.value)}
                            className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground"
                        />
                        <button
                            onClick={convertAdToBs}
                            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold"
                        >
                            Convert
                        </button>
                        {bsDate && (
                            <div className="bg-secondary/50 border border-border rounded-lg p-4">
                                <p className="font-mono text-sm text-foreground break-all">{bsDate}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Try BS to AD</h3>
                    <div className="space-y-3">
                        <input
                            type="text"
                            value={bsInput}
                            onChange={(e) => setBsInput(e.target.value)}
                            placeholder="YYYY-MM-DD"
                            className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground"
                        />
                        <button
                            onClick={convertBsToAd}
                            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold"
                        >
                            Convert
                        </button>
                        {adResult && (
                            <div className="bg-secondary/50 border border-border rounded-lg p-4">
                                <p className="font-mono text-sm text-foreground break-all">{adResult}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
