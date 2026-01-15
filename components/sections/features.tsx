export default function Features() {
    return (
        <section className="space-y-8 mt-16 pt-16 border-t border-border">
            <div>
                <h2 className="text-3xl font-bold mb-4">Features</h2>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>
                            Convert <strong className="text-foreground">AD (Gregorian) dates to BS (Bikram Sambat)</strong> and vice
                            versa.
                        </span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>
                            Format dates in multiple formats (
                            <code className="bg-card px-2 py-1 rounded text-xs text-foreground">YYYY-MM-DD</code>,{" "}
                            <code className="bg-card px-2 py-1 rounded text-xs text-foreground">DD-MM-YYYY</code>,{" "}
                            <code className="bg-card px-2 py-1 rounded text-xs text-foreground">DD/MM/YYYY</code>, etc.).
                        </span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>
                            Display Nepali dates with numeric, short, or long month names, weekday names, and Nepali numerals (१, २,
                            ३…)
                        </span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>
                            React <strong className="text-foreground">NepaliDatePicker</strong> component with theming and
                            localization support.
                        </span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>Fully TypeScript typed.</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}
