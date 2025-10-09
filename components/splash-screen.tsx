"use client"

import { useEffect, useState } from "react"

export default function SplashScreen() {
  const [greeting, setGreeting] = useState("")
  const [subGreeting, setSubGreeting] = useState("")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const hour = new Date().getHours()

    if (hour >= 5 && hour < 12) {
      setGreeting("Good morning, Sunny.")
      setSubGreeting("좋은 아침이에요, 반가워요 ☀️")
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Good afternoon, Sunny.")
      setSubGreeting("좋은 오후네요, 반가워요 🌤️")
    } else if (hour >= 18 && hour < 24) {
      setGreeting("Good evening, Sunny.")
      setSubGreeting("좋은 저녁이에요, 반가워요 🌙")
    } else {
      setGreeting("Still awake?")
      setSubGreeting("이 시간에도 깨어있네요 🌙")
    }

    // Animate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#F5F6F8] via-[#FAFBFC] to-[#E8EFFF] animate-in fade-in duration-500">
      <div className="flex flex-col items-center gap-12">
        {/* Circular Progress Ring */}
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 -rotate-90 transform" viewBox="0 0 120 120">
            {/* Background circle */}
            <circle cx="60" cy="60" r="54" fill="none" stroke="#E0E0E0" strokeWidth="2" />
            {/* Progress circle */}
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#2962FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={339.292}
              strokeDashoffset={339.292 - (339.292 * progress) / 100}
              className="transition-all duration-300 ease-out"
              style={{
                filter: progress > 50 ? "drop-shadow(0 0 8px rgba(41, 98, 255, 0.6))" : "none",
              }}
            />
          </svg>

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-3 h-3 rounded-full bg-[#2962FF] transition-all duration-300"
              style={{
                boxShadow: progress > 50 ? "0 0 20px rgba(41, 98, 255, 0.8)" : "0 0 8px rgba(41, 98, 255, 0.4)",
              }}
            />
          </div>
        </div>

        {/* Greeting Text */}
        <div className="text-center space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <h2 className="text-2xl font-medium text-[#222222] font-heading">{greeting}</h2>
          <p className="text-lg text-[#555555]">{subGreeting}</p>
        </div>
      </div>
    </div>
  )
}
