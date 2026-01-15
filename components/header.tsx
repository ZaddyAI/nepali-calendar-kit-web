export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold text-lg">
              ន
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Nepali Calendar Kit</h1>
              <p className="text-xs text-muted-foreground">AD-BS Conversion Library</p>
            </div>
          </div>
          <a
            href="https://www.npmjs.com/package/@gambhirpoudel/nepali-calendar-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium text-sm"
          >
            View on NPM →
          </a>
        </div>
      </div>
    </header>
  )
}
