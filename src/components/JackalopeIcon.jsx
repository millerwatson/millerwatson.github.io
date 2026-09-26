export default function JackalopeIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* head + jaw */}
      <path d="M8 31c-2-5 0-10 5-13 1-5 6-9 11-8 2-5 6-6 9-4-3 3-4 6-3 9 3 3 3 7 0 10-1 4-6 6-11 6-6 1-9-1-11 0z" />
      {/* ear */}
      <path d="M14 17c-3-6-2-12 2-14 2 5 1 11-1 14" />
      {/* antler, left prong */}
      <path d="M23 9c1-4 0-7 3-9" />
      <path d="M25 5c1 1 2 1 4 0" />
      {/* antler, right prong */}
      <path d="M27 10c2-3 1-6 4-7" />
      <path d="M29 6c1 1 3 1 4 0" />
      {/* eye */}
      <circle cx="24" cy="18" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}
