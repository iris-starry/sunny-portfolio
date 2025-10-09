"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-24 px-6 snap-start">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] font-heading">Let's Connect ☀️</h2>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div
              className="p-6 rounded-2xl bg-white border border-[#E0E0E0]"
              style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)" }}
            >
              <h3 className="text-xl font-bold text-[#222222] mb-4 font-heading">Get in Touch</h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:sunny@example.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-[#555555] hover:text-[#2962FF] transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F5F6F8] flex items-center justify-center group-hover:bg-[#2962FF]/10 transition-colors duration-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>sunny@example.com</span>
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-[#555555] hover:text-[#2962FF] transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F5F6F8] flex items-center justify-center group-hover:bg-[#2962FF]/10 transition-colors duration-200">
                    <Github className="w-5 h-5" />
                  </div>
                  <span>github.com/sunny</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-[#555555] hover:text-[#2962FF] transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F5F6F8] flex items-center justify-center group-hover:bg-[#2962FF]/10 transition-colors duration-200">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span>linkedin.com/in/sunny</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#222222] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E0E0E0] focus:border-[#2962FF] focus:outline-none focus:ring-2 focus:ring-[#2962FF]/20 transition-all duration-200"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#222222] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E0E0E0] focus:border-[#2962FF] focus:outline-none focus:ring-2 focus:ring-[#2962FF]/20 transition-all duration-200"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#222222] mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E0E0E0] focus:border-[#2962FF] focus:outline-none focus:ring-2 focus:ring-[#2962FF]/20 transition-all duration-200 resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-4 rounded-xl bg-[#2962FF] text-white font-medium hover:bg-[#1E4FCC] transition-all duration-200 shadow-lg"
              style={{ boxShadow: "0 10px 40px rgba(41, 98, 255, 0.3)" }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
