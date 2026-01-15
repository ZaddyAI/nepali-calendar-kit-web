interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language = "typescript" }: CodeBlockProps) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
      <pre className="text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
  )
}
