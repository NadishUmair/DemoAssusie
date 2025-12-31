"use client"

import { useEffect, useState } from "react"

export default function Countdown({ days = 30 }) {
  const [timeLeft, setTimeLeft] = useState({
    days: days,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + days)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate.getTime() - now

      if (distance <= 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [days])

  return (
    <div className="flex gap-4 font-mono text-xl">
      <span><strong className="mr-2">{timeLeft.days}</strong>days</span>
      {/* <span><strong>{timeLeft.hours}</strong>h</span> */}
      {/* <span><strong>{timeLeft.minutes}</strong>m</span> */}
      {/* <span><strong>{timeLeft.seconds}</strong>s</span> */}
    </div>
  )
}
