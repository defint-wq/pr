"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Atom, FlaskConical, Layers, Lightbulb, BookOpen } from "lucide-react"

const navItems = [
  { id: "hero", label: "Pr", icon: Atom },
  { id: "structure", label: "Бүтэц", icon: Atom },
  { id: "properties", label: "Шинж чанарууд", icon: FlaskConical },
  { id: "compounds", label: "Нэгдлүүд", icon: Layers },
  { id: "applications", label: "Хэрэглээ", icon: Lightbulb },
  { id: "conclusion", label: "Дүгнэлт", icon: BookOpen },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
              <span className="text-primary font-bold text-lg">Pr</span>
            </div>
            <span className="font-semibold text-foreground hidden sm:block">Praseodymium</span>
          </motion.div>

          <div className="flex items-center gap-1 md:gap-2">
            {navItems.slice(1).map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2 md:px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activeSection === item.id
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden md:inline">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
