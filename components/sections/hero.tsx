
export default function Hero() {
    return (
        <section className="space-y-12">
            <div className="relative overflow-hidden rounded-2xl border border-border">
                <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-transparent to-transparent" />
                <div className="relative px-8 py-16 md:py-24">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Nepali Calendar Kit</h1>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            Production-ready library for converting between Gregorian (AD) and Nepali (BS) dates. Includes an
                            interactive date picker component with full TypeScript support.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <button onClick={() => window.location.href = "#getting-started"} className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold">
                                Get Started
                            </button>
                            <button onClick={() => window.location.href = "#nepali-date-picker"} className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-secondary/50 transition font-semibold">
                                View Examples
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition">
                    <div className="text-3xl mb-3">🔄</div>
                    <h3 className="font-bold text-lg mb-2">AD ↔ BS Conversion</h3>
                    <p className="text-sm text-muted-foreground">
                        Seamlessly convert between Gregorian and Nepali calendars with verified accuracy.
                    </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition">
                    <div className="text-3xl mb-3">📅</div>
                    <h3 className="font-bold text-lg mb-2">Interactive DatePicker</h3>
                    <p className="text-sm text-muted-foreground">
                        React component for selecting Nepali dates with full customization options.
                    </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition">
                    <div className="text-3xl mb-3">🎨</div>
                    <h3 className="font-bold text-lg mb-2">Flexible Formatting</h3>
                    <p className="text-sm text-muted-foreground">
                        Multiple formatting options with Nepali numerals and localized month names.
                    </p>
                </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3">
                        <span className="text-primary font-bold text-xl shrink-0">✓</span>
                        <div>
                            <strong className="text-foreground">Accurate Conversion</strong>
                            <p className="text-sm text-muted-foreground">Based on verified data since 1943</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-primary font-bold text-xl shrink-0">✓</span>
                        <div>
                            <strong className="text-foreground">TypeScript Support</strong>
                            <p className="text-sm text-muted-foreground">Full type definitions included</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-primary font-bold text-xl shrink-0">✓</span>
                        <div>
                            <strong className="text-foreground">Customizable Themes</strong>
                            <p className="text-sm text-muted-foreground">Control colors, fonts, and styling</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-primary font-bold text-xl shrink-0">✓</span>
                        <div>
                            <strong className="text-foreground">Multi-language</strong>
                            <p className="text-sm text-muted-foreground">English and Nepali support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
