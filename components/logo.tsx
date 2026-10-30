import { useId } from "react"

interface LogoProps {
    size?: number
    className?: string
}

/**
 * Brand logo: a Himalayan sunrise over a calendar card,
 * on the kit's signature blue gradient tile.
 */
export default function Logo({ size = 36, className = "" }: LogoProps) {
    const rawId = useId()
    const gradId = `nck-grad-${rawId.replace(/:/g, "")}`

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            className={className}
            role="img"
            aria-label="Nepali Calendar Kit logo"
        >
            <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#006194" />
                    <stop offset="1" stopColor="#40c2fd" />
                </linearGradient>
            </defs>
            <rect width="64" height="64" rx="16" fill={`url(#${gradId})`} />
            {/* Calendar binding rings */}
            <rect x="20" y="6" width="4.5" height="12" rx="2.25" fill="#ffffff" opacity="0.95" />
            <rect x="39.5" y="6" width="4.5" height="12" rx="2.25" fill="#ffffff" opacity="0.95" />
            {/* Calendar card */}
            <rect x="8" y="12" width="48" height="44" rx="9" fill="#ffffff" />
            {/* Crimson sun (Nepal flag accent) */}
            <circle cx="43" cy="25" r="4.5" fill="#dc143c" />
            {/* Himalayan range */}
            <path d="M11 47 L23 29 L30.5 39 L36.5 31 L46 47 Z" fill="#006194" />
            <path d="M26 47 L36 33 L46 47 Z" fill="#007bb9" />
        </svg>
    )
}
