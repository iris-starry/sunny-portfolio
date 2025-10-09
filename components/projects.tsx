"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with real-time inventory management and seamless checkout experience.",
    fullDescription:
      "Built a comprehensive e-commerce solution featuring real-time inventory tracking, secure payment processing with Stripe, and an intuitive admin dashboard. Implemented server-side rendering for optimal SEO and performance.",
    image: "/modern-ecommerce-dashboard.png",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    role: "Full-stack Developer",
    codeUrl: "https://github.com",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application powered by AI with natural language processing capabilities.",
    fullDescription:
      "Developed a real-time chat platform integrating OpenAI's GPT models for intelligent responses. Features include WebSocket connections for instant messaging, user authentication, and conversation history.",
    image: "/ai-chat-interface-modern-design.jpg",
    tags: ["React", "WebSocket", "OpenAI", "TailwindCSS"],
    role: "Frontend Lead",
    codeUrl: "https://github.com",
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive analytics dashboard with interactive charts and real-time data visualization.",
    fullDescription:
      "Created an enterprise-grade analytics platform with D3.js visualizations, real-time data updates via Redis, and AWS infrastructure. Supports multiple data sources and custom report generation.",
    image: "/analytics-dashboard-charts-graphs.jpg",
    tags: ["Next.js", "D3.js", "AWS", "Redis"],
    role: "Lead Developer",
    codeUrl: "https://github.com",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-24 px-6 bg-white snap-start">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] font-heading">Featured Projects</h2>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto">A selection of my recent work and side projects</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl bg-[#F5F6F8] overflow-hidden cursor-pointer"
              style={{
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#2962FF]/10 to-[#A8C8FF]/10">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-[#222222] group-hover:text-[#2962FF] transition-colors duration-300 font-heading">
                  {project.title}
                </h3>
                <p className="text-[#555555] leading-relaxed line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white text-[#2962FF] border border-[#E0E0E0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl -z-10"
                style={{
                  background: "radial-gradient(circle at center, rgba(41, 98, 255, 0.3), transparent 70%)",
                }}
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
              style={{ backdropFilter: "blur(10px)" }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)" }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-200 shadow-lg"
                >
                  <X className="w-5 h-5 text-[#222222]" />
                </button>

                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#2962FF]/10 to-[#A8C8FF]/10">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-[#222222] font-heading mb-2">{selectedProject.title}</h3>
                    <p className="text-sm text-[#2962FF] font-medium">{selectedProject.role}</p>
                  </div>

                  <p className="text-[#555555] leading-relaxed">{selectedProject.fullDescription}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-[#F5F6F8] text-[#2962FF] border border-[#E0E0E0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href={selectedProject.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2962FF] text-white font-medium hover:bg-[#1E4FCC] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                      style={{ boxShadow: "0 8px 24px rgba(41, 98, 255, 0.3)" }}
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
