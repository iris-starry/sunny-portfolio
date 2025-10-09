"use client"

import { motion } from "framer-motion"

const technologies = [
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#000000" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "TailwindCSS", icon: "🎨", color: "#06B6D4" },
  { name: "Node.js", icon: "🟢", color: "#339933" },
  { name: "AWS", icon: "☁️", color: "#FF9900" },
  { name: "Git", icon: "📦", color: "#F05032" },
  { name: "Figma", icon: "🎯", color: "#F24E1E" },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="min-h-screen flex items-center justify-center py-24 px-6 snap-start">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] font-heading">Tech Stack</h2>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-white border border-[#E0E0E0] hover:border-[#2962FF] transition-all duration-300 cursor-pointer"
              style={{
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-transparent to-[#2962FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl -z-10"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${tech.color}40, transparent 70%)`,
                }}
              />

              <div className="relative z-10 flex flex-col items-center gap-4">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl"
                >
                  {tech.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-[#222222] group-hover:text-[#2962FF] transition-colors duration-300">
                  {tech.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
