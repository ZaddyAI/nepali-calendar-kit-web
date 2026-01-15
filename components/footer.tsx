export default function Footer() {
    return (
        <footer className="bg-card border-t border-border mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold">
                                ន
                            </div>
                            <span className="font-bold">Nepali Calendar Kit</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Production-ready calendar conversion library for React and Node.js.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-sm mb-4 text-foreground">Package</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="https://www.npmjs.com/package/@gambhirpoudel/nepali-calendar-kit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    NPM Package
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/ZaddyAI/nepali-calendar-kit/tree/main" className="text-muted-foreground hover:text-primary transition">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/ZaddyAI/nepali-calendar-kit/releases/" className="text-muted-foreground hover:text-primary transition">
                                    Changelog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-sm mb-4 text-foreground">Docs</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#getting-started" className="text-muted-foreground hover:text-primary transition">
                                    Getting Started
                                </a>
                            </li>

                            <li>
                                <a href="#date-conversion" className="text-muted-foreground hover:text-primary transition">
                                    Examples
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-sm mb-4 text-foreground">Community</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="https://github.com/ZaddyAI/nepali-calendar-kit/issues" className="text-muted-foreground hover:text-primary transition">
                                    GitHub Issues
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/ZaddyAI/nepali-calendar-kit/discussions" className="text-muted-foreground hover:text-primary transition">
                                    Discussions
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; 2026 Nepali Calendar Kit. MIT License.</p>
                </div>
            </div>
        </footer>
    )
}
