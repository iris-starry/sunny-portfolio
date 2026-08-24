// components/about.tsx
"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
      <section id="about" className="min-h-screen flex items-center justify-center py-24 px-6 bg-white snap-start">
        <div className="max-w-4xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Image */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex justify-center"
            >
              <div
                  className="relative w-full max-w-[320px] aspect-square rounded-3xl overflow-hidden bg-[#F5F6F8] border border-[#EAEAEA] p-3 shadow-xl"
                  style={{ boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08)" }}
              >
                <img
                    src="/profile.jpg"
                    alt="Sunny Profile"
                    className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Right: About Content */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-5 text-left"
            >
              <div className="space-y-1.5">
                <h2 className="text-4xl md:text-5xl font-bold text-[#222222] font-heading">About Me</h2>
                <p className="text-lg sm:text-xl font-semibold text-[#2962FF]">
                  Bridging Design & Engineering
                </p>
              </div>

              <div className="space-y-3 text-[#555555] leading-relaxed text-sm sm:text-base">
                <p>
                  I focus on creating thoughtful user interfaces while ensuring seamless performance under the hood.
                </p>
                <p>
                  From building analytics dashboards in industry to optimizing cloud media pipelines and shipping rapid prototypes with AI workflows, I enjoy solving practical problems end-to-end.
                </p>
                <p>
                  My goal is to craft delightful digital experiences backed by clean, maintainable code.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}