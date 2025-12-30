"use client"

export function Input({ className, ...props }) {
  return (
    <input
      {...props}
      className={`border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${className}`}
    />
  )
}
