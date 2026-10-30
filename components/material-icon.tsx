interface IconProps {
    name: string
    className?: string
    filled?: boolean
}

/**
 * Google Material Symbols Outlined icon.
 * Font is loaded globally in app/layout.tsx.
 */
export default function MaterialIcon({ name, className = "", filled = false }: IconProps) {
    return (
        <span
            aria-hidden="true"
            className={`material-symbols-outlined select-none ${filled ? "[font-variation-settings:'FILL'_1]" : ""} ${className}`}
        >
            {name}
        </span>
    )
}
