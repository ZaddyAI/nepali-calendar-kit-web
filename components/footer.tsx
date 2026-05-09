import { GithubIcon, GlobeIcon, MailIcon, TwitterIcon } from "lucide-react"

export default function Footer() {
    return (
        <footer className="relative mt-32 border-t border-white/5 bg-black/20 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
                    <div className="col-span-2 lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary to-accent flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20">
                                न
                            </div>
                            <span className="text-xl font-black tracking-tighter text-foreground">Nepali Calendar Kit</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            The definitive calendar toolkit for modern Nepali applications. Reliable, lightweight, and incredibly easy to integrate.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/5 hover:bg-primary/20 rounded-lg text-muted-foreground hover:text-primary transition-all">
                                <GithubIcon className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 hover:bg-accent/20 rounded-lg text-muted-foreground hover:text-accent transition-all">
                                <TwitterIcon className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 hover:bg-primary/20 rounded-lg text-muted-foreground hover:text-primary transition-all">
                                <MailIcon className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Ecosystem</h4>
                        <ul className="space-y-4">
                            <li><a href="https://www.npmjs.com/package/@gambhirpoudel/nepali-calendar-kit" className="text-sm text-muted-foreground hover:text-primary transition">NPM Registry</a></li>
                            <li><a href="https://github.com/ZaddyAI/nepali-calendar-kit" className="text-sm text-muted-foreground hover:text-primary transition">Source Code</a></li>
                            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition">Roadmap</a></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Resources</h4>
                        <ul className="space-y-4">
                            <li><a href="#nepali-date-picker" className="text-sm text-muted-foreground hover:text-primary transition">Date Picker</a></li>
                            <li><a href="#date-conversion" className="text-sm text-muted-foreground hover:text-primary transition">Conversion APIs</a></li>
                            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition">Documentation</a></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Support</h4>
                        <ul className="space-y-4">
                            <li><a href="https://github.com/ZaddyAI/nepali-calendar-kit/issues" className="text-sm text-muted-foreground hover:text-primary transition">GitHub Issues</a></li>
                            <li><a href="https://github.com/ZaddyAI/nepali-calendar-kit/discussions" className="text-sm text-muted-foreground hover:text-primary transition">Discussions</a></li>
                            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-muted-foreground">
                        &copy; 2026 Nepali Calendar Kit. Crafted for the Nepali Developer ecosystem.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition">Privacy Policy</a>
                        <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition">Terms of Service</a>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <GlobeIcon className="w-3 h-3" />
                            <span>v1.0.0-stable</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
