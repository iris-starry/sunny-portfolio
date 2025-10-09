"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    year: "2024 - Present",
    company: "Tech Innovations Inc.",
    role: "Senior Frontend Developer",
    description:
      "Leading frontend development for enterprise SaaS platform, mentoring junior developers, and implementing modern React patterns.",
    achievements: ["Improved app performance by 40%", "Led migration to Next.js 14", "Established component library"],
  },
  {
    year: "2022 - 2024",
    company: "Digital Solutions Co.",
    role: "Frontend Developer",
    description:
      "Developed responsive web applications using React and TypeScript, collaborated with design team to implement pixel-perfect UIs.",
    achievements: ["Built 15+ production features", "Reduced bundle size by 30%", "Implemented CI/CD pipeline"],
  },
  {
    year: "2020 - 2022",
    company: "StartUp Labs",
    role: "Junior Frontend Developer",
    description:
      "Contributed to multiple client projects, learned modern web development practices, and grew technical skills rapidly.",
    achievements: ["Shipped 5 client projects", "Learned React ecosystem", "Collaborated with remote team"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-24 px-6 snap-start">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] font-heading">Experience</h2>
          <p className="text-lg text-[#555555]">My professional journey in web development</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2962FF] via-[#A8C8FF] to-[#E0E0E0]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#2962FF] border-4 border-[#F5F6F8] shadow-lg"
                />

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} ml-8 md:ml-0`}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="p-6 rounded-2xl bg-white border border-[#E0E0E0] hover:border-[#2962FF] transition-all duration-300"
                    style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)" }}
                  >
                    <div className="space-y-3">
                      <div className="inline-block px-3 py-1 rounded-full bg-[#2962FF]/10 text-[#2962FF] text-sm font-medium">
                        {exp.year}
                      </div>
                      <h3 className="text-2xl font-bold text-[#222222] font-heading">{exp.role}</h3>
                      <p className="text-lg text-[#2962FF] font-medium">{exp.company}</p>
                      <p className="text-[#555555] leading-relaxed">{exp.description}</p>
                      <ul className={`space-y-2 pt-2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                        {exp.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className={`text-sm text-[#555555] flex items-center gap-2 ${index % 2 === 0 ? "md:flex-row-reverse md:justify-end" : ""}`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2962FF] flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
