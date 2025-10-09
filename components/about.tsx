"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-24 px-6 bg-white snap-start">
      <div className="max-w-4xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: 3D Avatar/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-3xl bg-gradient-to-br from-[#2962FF]/10 to-[#A8C8FF]/10 p-8 overflow-hidden">
              {/* Placeholder for 3D character or photo */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full h-full rounded-2xl bg-gradient-to-br from-[#2962FF] to-[#A8C8FF] flex items-center justify-center text-white text-6xl font-bold shadow-2xl"
                style={{ boxShadow: "0 20px 60px rgba(41, 98, 255, 0.4)" }}
              >
                S
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center text-2xl"
                style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)" }}
              >
                ⚛️
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-10 left-10 w-12 h-12 rounded-lg bg-white shadow-lg flex items-center justify-center text-xl"
                style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)" }}
              >
                💻
              </motion.div>
            </div>
          </motion.div>

          {/* Right: About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#222222] font-heading">About Me</h2>
            <p className="text-lg text-[#555555] leading-relaxed">
              프론트엔드 개발자이자 디자인 감각을 중시하는 크리에이터 써니입니다.
            </p>
            <p className="text-[#555555] leading-relaxed">
              I'm passionate about creating beautiful, performant web experiences that users love. With a strong
              foundation in modern JavaScript frameworks and an eye for design, I bridge the gap between aesthetics and
              functionality.
            </p>

            {/* Values/Keywords */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: "🎨", label: "Design-Focused" },
                { icon: "⚡", label: "Performance" },
                { icon: "♿", label: "Accessibility" },
                { icon: "🚀", label: "Innovation" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="p-4 rounded-xl bg-[#F5F6F8] border border-[#E0E0E0] hover:border-[#2962FF] transition-all duration-200"
                  style={{ boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)" }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm font-medium text-[#222222]">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
