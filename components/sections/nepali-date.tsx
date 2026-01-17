export default function NepaliDateSection() {
    return (
        <section id="nepali-date" className="space-y-8 mt-16 pt-16 border-t border-border">
            <div>
                <h1 className="text-3xl font-bold mb-2">4. NepaliDate API</h1>
                <p className="text-muted-foreground mb-6">
                    A Date-like, object-oriented API for working with Nepali (Bikram Sambat) dates.
                </p>
            </div>

            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-bold mb-4">Import NepaliDate</h2>
                    <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm overflow-x-auto">
                        <code>{`import { NepaliDate } from "@gambhirpoudel/nepali-calendar-kit"`}</code>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4">Get Today’s Nepali Date</h2>
                    <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm overflow-x-auto">
                        <pre>
                            <code className="text-foreground">{`const today = NepaliDate.today();

console.log(today.getYear());  // 2081
console.log(today.getMonth()); // 5
console.log(today.getDate());  // 12`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4">Create from AD or BS</h2>
                    <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm overflow-x-auto">
                        <pre>
                            <code className="text-foreground">{`// From AD date
const fromAd = new NepaliDate(new Date("2026-01-15"));

// From BS date
const fromBs = new NepaliDate({ year: 2082, month: 10, day: 1 });`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4">Format Nepali Date</h2>
                    <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm overflow-x-auto">
                        <pre>
                            <code className="text-foreground">{`today.format();
// "२०८१-०५-१२"

today.format("DD/MM/YYYY", "long", "short");
// "१२/भदौ/२०८१"`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4">Convert Back to AD</h2>
                    <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm overflow-x-auto">
                        <pre>
                            <code className="text-foreground">{`const adDate = today.toAD();
console.log(adDate);
// Thu Jan 15 2026 00:00:00 GMT+0000 (UTC)`}</code>
                        </pre>
                    </div>
                </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-bold mb-2 text-primary">Why use NepaliDate?</h3>
                <p className="text-sm text-muted-foreground">
                    NepaliDate provides a familiar, Date-like API while preserving full accuracy of AD ↔ BS conversions.
                    It is fully typed, immutable, and backward compatible with all existing functions.
                </p>
            </div>
        </section>
    );
}
