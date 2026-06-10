import { TerminalIcon, CpuIcon } from "lucide-react"

export default function ExampleOutput() {
    return (
        <section className="space-y-12">
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
                    <TerminalIcon className="w-3 h-3" />
                    Data Structure
                </div>
                <h2 className="text-4xl font-extrabold tracking-tight">Real-world Examples</h2>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    See how the library parses and outputs data in different scenarios.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                    <div className="clean-card rounded-2xl p-8 space-y-6">
                        <div className="flex items-center gap-3 text-sm font-bold text-primary uppercase tracking-widest">
                            <CpuIcon className="w-4 h-4" />
                            Core Logic
                        </div>
                        
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <p className="text-[10px] font-bold text-muted-foreground uppercase px-2">AD to BS Conversion</p>
                                <div className="bg-black/60 border border-white/5 rounded-2xl p-4 font-mono text-xs">
                                    <span className="text-blue-400">adToBs</span>(<span className="text-orange-300">new Date</span>(<span className="text-green-300">'2002-08-17'</span>));<br/>
                                    <span className="text-muted-foreground">// Result: </span>
                                    <span className="text-purple-300">{`{ year: 2059, month: 5, day: 1 }`}</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <p className="text-[10px] font-bold text-muted-foreground uppercase px-2">Nepali Numerals</p>
                                <div className="bg-black/60 border border-white/5 rounded-2xl p-4 font-mono text-xs">
                                    <span className="text-blue-400">formatBs</span>(<span className="text-purple-300">{`{ year: 2082, month: 10, day: 1 }`}</span>, <span className="text-green-300">'DD-MM-YYYY'</span>);<br/>
                                    <span className="text-muted-foreground">// Result: </span>
                                    <span className="text-green-300">"१-१०-२०८२"</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="clean-card rounded-2xl p-8 space-y-6">
                    <div className="flex items-center gap-3 text-sm font-bold text-accent uppercase tracking-widest">
                        <TerminalIcon className="w-4 h-4" />
                        Rich Result Object
                    </div>
                    <div className="bg-black/60 border border-white/5 rounded-2xl p-6 font-mono text-xs leading-relaxed overflow-x-auto">
                        <span className="text-blue-400">const</span> result = {`{`} <br/>
                        &nbsp;&nbsp;<span className="text-primary">bs</span>: <span className="text-green-300">'2082-10-29'</span>,<br/>
                        &nbsp;&nbsp;<span className="text-primary">ad</span>: <span className="text-green-300">'Thu Feb 12 2026'</span>,<br/>
                        &nbsp;&nbsp;<span className="text-primary">nepali</span>: <span className="text-green-300">'२०८२-१०-२९'</span><br/>
                        {`}`}
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                        The component returns a comprehensive object containing all necessary formats to minimize manual parsing.
                    </p>
                </div>
            </div>
        </section>
    )
}
