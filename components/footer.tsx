"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 bg-white border-t border-[#E0E0E0]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#555555] text-sm"
          >
            © {currentYear} Sunny. All rights reserved.
          </motion.p>

          {/* Social Links */}
        </div>
      </div>
    </footer>
  )
}
