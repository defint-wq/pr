"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Info, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"

const AtomModel3D = dynamic(() => import("@/components/3d/atom-model-3d").then(mod => ({ default: mod.AtomModel3D })), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center"><div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>
})

interface ParticleInfo {
  type: "proton" | "neutron" | "electron" | null
  name: string
  description: string
  charge: string
  role: string
}

const particleDetails: Record<string, ParticleInfo> = {
  proton: {
    type: "proton",
    name: "Proton",
    description: "A subatomic particle with a positive electric charge",
    charge: "+1",
    role: "Determines the atomic number (59 for Praseodymium)"
  },
  neutron: {
    type: "neutron",
    name: "Neutron",
    description: "A subatomic particle with no electric charge",
    charge: "0",
    role: "Affects isotope mass (82 neutrons in most common isotope)"
  },
  electron: {
    type: "electron",
    name: "Electron",
    description: "A subatomic particle with a negative electric charge",
    charge: "-1",
    role: "Determines chemical behavior and bonding"
  }
}

const shellConfig = [
  { shell: "1s", electrons: 2 },
  { shell: "2s 2p", electrons: 8 },
  { shell: "3s 3p 3d", electrons: 18 },
  { shell: "4s 4p 4d 4f", electrons: 21 },
  { shell: "5s 5p", electrons: 8 },
  { shell: "6s", electrons: 2 },
]

export function AtomicStructureSection() {
  const [selectedParticle, setSelectedParticle] = useState<ParticleInfo | null>(null)
  const [showShells, setShowShells] = useState(true)
  const [zoom, setZoom] = useState(1)

  const handleParticleClick = (type: string) => {
    setSelectedParticle(particleDetails[type] || null)
  }

  return (
    <section id="structure" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 bg-linear-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Atomic</span> Structure
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Explore the 59 electrons orbiting around the nucleus containing 59 protons 
            and 82 neutrons. Click on particles to learn more.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Controls</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setZoom(Math.min(zoom + 0.2, 2))}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setZoom(Math.max(zoom - 0.2, 0.5))}
                  >
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setZoom(1)}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Show electron shells</span>
                  <button
                    onClick={() => setShowShells(!showShells)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      showShells ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-foreground transition-transform ${
                        showShells ? "translate-x-6" : "translate-x-0.5"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Electron configuration */}
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Electron Configuration</h3>
              <div className="space-y-2">
                {shellConfig.map((config, index) => (
                  <motion.div
                    key={config.shell}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-muted-foreground">{config.shell}</span>
                    <span className="text-primary font-mono">{config.electrons}</span>
                  </motion.div>
                ))}
                <div className="pt-2 border-t border-border mt-2">
                  <span className="text-xs text-muted-foreground">
                    [Xe] 4f³ 6s²
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3D Atom Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-125 md:h-150 rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm border border-border"
          >
            <AtomModel3D 
              onParticleClick={handleParticleClick}
              showShells={showShells}
              zoom={zoom}
            />
          </motion.div>

          {/* Particle info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {selectedParticle ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-4 h-4 rounded-full ${
                    selectedParticle.type === "proton" ? "bg-red-500" :
                    selectedParticle.type === "neutron" ? "bg-blue-500" : "bg-primary"
                  }`} />
                  <h3 className="text-xl font-semibold text-foreground">{selectedParticle.name}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{selectedParticle.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Charge</span>
                    <span className="text-sm font-mono text-primary">{selectedParticle.charge}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Role</span>
                    <span className="text-sm text-foreground text-right max-w-[60%]">{selectedParticle.role}</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Info className="w-5 h-5" />
                  <span>Click on a particle to see details</span>
                </div>
              </div>
            )}

            {/* Particle legend */}
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Particle Legend</h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleParticleClick("proton")}
                  className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <div className="w-4 h-4 rounded-full bg-red-500" />
                  <span className="text-foreground">Proton (59)</span>
                </button>
                <button
                  onClick={() => handleParticleClick("neutron")}
                  className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <div className="w-4 h-4 rounded-full bg-blue-500" />
                  <span className="text-foreground">Neutron (82)</span>
                </button>
                <button
                  onClick={() => handleParticleClick("electron")}
                  className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <span className="text-foreground">Electron (59)</span>
                </button>
              </div>
            </div>

            {/* Atomic data */}
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Atomic Data</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Atomic Radius</div>
                  <div className="text-foreground font-mono">247 pm</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Covalent Radius</div>
                  <div className="text-foreground font-mono">203 pm</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Van der Waals</div>
                  <div className="text-foreground font-mono">239 pm</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Electronegativity</div>
                  <div className="text-foreground font-mono">1.13</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
