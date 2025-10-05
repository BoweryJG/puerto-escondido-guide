export default function PuertoLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle - ocean blue */}
      <circle cx="50" cy="50" r="48" fill="url(#oceanGradient)" />

      {/* Palm tree trunk */}
      <rect x="45" y="40" width="4" height="25" fill="#8B4513" rx="1" />

      {/* Palm fronds */}
      <path
        d="M 47 38 Q 35 25 30 20 M 47 38 Q 47 20 47 15 M 47 38 Q 59 25 64 20"
        stroke="#06D6A0"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Sun */}
      <circle cx="70" cy="25" r="8" fill="#FFD60A" opacity="0.9" />

      {/* Waves at bottom */}
      <path
        d="M 10 70 Q 20 65 30 70 T 50 70 T 70 70 T 90 70"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M 15 78 Q 25 73 35 78 T 55 78 T 75 78 T 95 78"
        stroke="#FFFFFF"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />

      {/* Gradient definitions */}
      <defs>
        <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00B4D8" />
          <stop offset="100%" stopColor="#0077B6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
