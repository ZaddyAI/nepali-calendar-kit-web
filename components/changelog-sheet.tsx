"use client"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { changelogData } from "@/data/changelog"
import { History } from "lucide-react"

function renderInline(text: string) {
  const parts: React.ReactNode[] = []
  const regex = /(\*\*[^*]+\*\*)|(`[^`]+`)/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    if (match[1]) {
      parts.push(
        <strong key={parts.length}>{match[1].slice(2, -2)}</strong>,
      )
    } else if (match[2]) {
      parts.push(
        <code
          key={parts.length}
          className="bg-muted px-1 py-0.5 rounded text-xs font-mono"
        >
          {match[2].slice(1, -1)}
        </code>,
      )
    }

    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts
}

export default function ChangelogSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground"
        >
          <History className="size-4" />
          Changelog
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[400px] sm:w-[540px] p-0 flex flex-col overflow-hidden"
      >
        <SheetHeader className="px-6 pt-6 pb-4 border-b">
          <SheetTitle className="text-xl flex items-center gap-2">
            <History className="size-5 text-primary" />
            Changelog
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1 px-6 py-4 min-h-0">
          <div className="space-y-10">
            {changelogData.map((entry) => (
              <section key={entry.version}>
                <div className="flex items-center gap-3 mb-5">
                  <h3 className="text-lg font-bold">v{entry.version}</h3>
                  <Badge variant="outline" className="font-mono text-xs">
                    {entry.date}
                  </Badge>
                </div>

                <div className="space-y-5">
                  {entry.sections.map((section) => (
                    <div key={section.heading}>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2.5">
                        {section.heading}
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm leading-relaxed text-foreground/90 pl-3 border-l-2 border-muted"
                          >
                            {renderInline(item)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
