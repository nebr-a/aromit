interface AromLogoProps {
  className?: string
  iconOnly?: boolean
  color?: string
}

export default function AromLogo({
  className = '',
  iconOnly = false,
  color = '#29A8D5',
}: AromLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Cloud + rays icon — SVG trace of the AROM logo */}
      <svg
        viewBox="0 0 90 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-auto flex-shrink-0"
        aria-hidden="true"
      >
        {/* Cloud outline path */}
        <path
          d="M14 54
             C6 54 4 47 4 43
             C4 37 8 33 14 33
             C13 24 19 18 27 18
             C28 11 35 7 43 10
             C47 5 55 4 61 9
             C67 6 75 10 75 18
             C82 18 86 24 86 30
             C86 38 81 42 74 42
             L14 54 Z"
          stroke={color}
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Sun rays — upper right */}
        <line x1="78" y1="20" x2="88" y2="12" stroke={color} strokeWidth="4" strokeLinecap="round" />
        <line x1="82" y1="11" x2="89" y2="3"  stroke={color} strokeWidth="4" strokeLinecap="round" />
        <line x1="86" y1="30" x2="97" y2="27" stroke={color} strokeWidth="4" strokeLinecap="round" />
        <line x1="84" y1="40" x2="94" y2="40" stroke={color} strokeWidth="4" strokeLinecap="round" />
      </svg>

      {/* Wordmark */}
      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span
            className="font-black text-xl tracking-tight text-white lowercase"
            style={{ fontFamily: 'var(--font-inter)', letterSpacing: '-0.02em' }}
          >
            arom<sup className="text-[10px] font-normal ml-0.5 align-super">®</sup>
          </span>
          <span
            className="text-[9px] font-semibold tracking-[0.18em] uppercase mt-0.5"
            style={{ color: color }}
          >
            IT &amp; Cloud Services
          </span>
        </div>
      )}
    </div>
  )
}
