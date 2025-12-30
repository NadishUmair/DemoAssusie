"use client"

export function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`rounded-md px-4 py-2 bg-yellow-500 text-white font-medium transition ${className}`}
    >
      {children}
    </button>
  )
}
