"use client"

import { useState, useEffect } from "react"
import SplashScreen from "@/components/splash-screen"
import Header from "@/components/header"
import Hero from "@/components/hero"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
    const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)

        return () => clearTimeout(timer)
    }, [])

/*    if (showSplash) {
        return <SplashScreen />
    }*/

  return (
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
          <Header/>
          <Hero/>
          <TechStack/>
          <Projects/>
          <Experience/>
          <About/>
          <div className="min-h-screen snap-end flex flex-col justify-between">
              <Contact/>
              <Footer/>
          </div>
      </main>
  )
}