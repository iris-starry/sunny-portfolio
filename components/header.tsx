"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

export default function Header() {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <nav
        className="flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-[15px] border border-white/20 shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.35)",
          boxShadow: "0 8px 32px rgba(41, 98, 255, 0.12)",
        }}
      >
        <button
          onClick={() => scrollToSection("about")}
          className="px-5 py-2 rounded-full text-sm font-medium text-[#555555] hover:text-[#2962FF] hover:bg-white/50 transition-all duration-200"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="px-5 py-2 rounded-full text-sm font-medium text-[#555555] hover:text-[#2962FF] hover:bg-white/50 transition-all duration-200"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="px-5 py-2 rounded-full text-sm font-medium text-[#555555] hover:text-[#2962FF] hover:bg-white/50 transition-all duration-200"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="px-5 py-2 rounded-full text-sm font-medium bg-[#2962FF] text-white hover:bg-[#1E4FCC] transition-all duration-200 shadow-sm"
        >
          Contact
        </button>
      </nav>
    </motion.header>
  )
}
