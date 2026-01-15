export default function ExampleOutput() {
    return (
        <section className="space-y-8 mt-16 pt-16 border-t border-border">
            <div>
                <h2 className="text-3xl font-bold mb-6">Example Output</h2>
            </div>

            <div className="space-y-6">
                <div>
                    <h3 className="font-bold mb-3 text-foreground">AD to BS Conversion</h3>
                    <div className="bg-card border border-border rounded-lg p-6 overflow-x-auto">
                        <pre className="font-mono text-sm text-foreground">
                            <code>{`adToBs(new Date('2002-08-17'));
// { year: 2059, month: 5, day: 1 }`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold mb-3 text-foreground">Formatting with Nepali Numerals</h3>
                    <div className="bg-card border border-border rounded-lg p-6 overflow-x-auto">
                        <pre className="font-mono text-sm text-foreground">
                            <code>{`formatBs({ year: 2082, month: 10, day: 1 }, 'DD-MM-YYYY');
// "१-१०-२०८२"`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold mb-3 text-foreground">Selected Date Display</h3>
                    <div className="bg-card border border-border rounded-lg p-6 overflow-x-auto">
                        <pre className="font-mono text-sm text-foreground">
                            <code>{`Selected Date: {
  bs: '2082-10-29', // Selected date in Bikram Sambat format
  ad: 'Thu Feb 12 2026 05:45:00 GMT+0545 (Nepal Time)', // Corresponding date in Gregorian format
  nepali: '२०८२-१०-२९' // Selected date in Nepali script
}`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    )
}
