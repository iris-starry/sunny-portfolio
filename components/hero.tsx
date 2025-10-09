"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = canvas.offsetHeight * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gridSize = 50
      const offsetY = (Date.now() / 50) % gridSize

      // Vertical lines with gradient
      for (let x = 0; x < canvas.offsetWidth; x += gridSize) {
        const gradient = ctx.createLinearGradient(x, 0, x, canvas.offsetHeight)
        gradient.addColorStop(0, "rgba(41, 98, 255, 0.05)")
        gradient.addColorStop(0.5, "rgba(41, 98, 255, 0.15)")
        gradient.addColorStop(1, "rgba(41, 98, 255, 0.05)")
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.offsetHeight)
        ctx.stroke()
      }

      // Horizontal lines with perspective
      for (let y = -gridSize; y < canvas.offsetHeight + gridSize; y += gridSize) {
        const yPos = y + offsetY
        const opacity = Math.max(0.05, 0.2 - (yPos / canvas.offsetHeight) * 0.15)
        ctx.strokeStyle = `rgba(41, 98, 255, ${opacity})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(0, yPos)
        ctx.lineTo(canvas.offsetWidth, yPos)
        ctx.stroke()
      }
    }

    const animate = () => {
      drawGrid()
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  const scrollToNext = () => {
    document.getElementById("tech-stack")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start">
      {/* Animated Grid Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />

      {/* Enhanced Gradient Overlay with depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F6F8]/30 to-[#F5F6F8]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(41,98,255,0.08),transparent_50%)]" />

      {/* Content with parallax */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#E0E0E0] shadow-lg"
            style={{ boxShadow: "0 4px 20px rgba(41, 98, 255, 0.1)" }}
          >
            <div className="w-2 h-2 rounded-full bg-[#2962FF] animate-pulse" />
            <span className="text-sm text-[#555555]">Available for opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#222222] font-heading leading-tight"
          >
            Hi, I'm <span className="text-[#2962FF]">Sunny</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl text-[#555555] font-medium"
          >
            Frontend Developer
          </motion.p>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-[#555555] max-w-2xl mx-auto leading-relaxed"
          >
            Building intuitive, high-performance web experiences with modern technologies and thoughtful design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-xl bg-[#2962FF] text-white font-medium hover:bg-[#1E4FCC] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              style={{ boxShadow: "0 10px 40px rgba(41, 98, 255, 0.3)" }}
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-xl bg-white text-[#2962FF] font-medium border-2 border-[#2962FF] hover:bg-[#2962FF] hover:text-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>

        {/* 3D Floating Elements with enhanced depth */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#2962FF] to-[#A8C8FF] opacity-20 blur-xl"
          style={{ boxShadow: "0 20px 60px rgba(41, 98, 255, 0.4)" }}
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#A8C8FF] to-[#2962FF] opacity-20 blur-2xl"
          style={{ boxShadow: "0 20px 60px rgba(168, 200, 255, 0.4)" }}
        />
      </motion.div>

      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.8 },
          y: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#555555] hover:text-[#2962FF] transition-colors duration-300"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  )
}
