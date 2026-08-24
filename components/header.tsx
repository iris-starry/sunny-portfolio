// components/header.tsx
"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

const NAV_ITEMS = [
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
]

export default function Header() {
    const [hidden, setHidden] = useState(false)
    const [activeSection, setActiveSection] = useState("projects")
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0
        const diff = latest - previous

        if (latest < 50) {
            setHidden(false)
            return
        }

        if (diff > 5) {
            setHidden(true)
        } else if (diff < -5) {
            setHidden(false)
        }
    })

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: "-40% 0px -40% 0px" }
        )

        NAV_ITEMS.forEach(({ id }) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

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
                className="flex items-center gap-1 p-1.5 rounded-full backdrop-blur-[15px] border border-white/20 shadow-lg"
                style={{
                    background: "rgba(255, 255, 255, 0.45)",
                    boxShadow: "0 8px 32px rgba(41, 98, 255, 0.12)",
                }}
            >
                {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id

                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                isActive
                                    ? "bg-[#2962FF] text-white shadow-sm"
                                    : "text-[#555555] hover:text-[#2962FF] hover:bg-white/40"
                            }`}
                        >
                            {item.label}
                        </button>
                    )
                })}
            </nav>
        </motion.header>
    )
}