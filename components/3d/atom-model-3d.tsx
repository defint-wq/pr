"use client"

import { useRef, useMemo, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere } from "@react-three/drei"
import * as THREE from "three"

interface AtomModel3DProps {
  onParticleClick: (type: string) => void
  showShells: boolean
  zoom: number
}

// Praseodymium has 59 electrons distributed across 6 shells
const electronShells = [2, 8, 18, 21, 8, 2] // Total: 59

function Nucleus({ onParticleClick }: { onParticleClick: (type: string) => void }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.1
    }
  })

  const particles = useMemo(() => {
    const items: { position: [number, number, number]; type: "proton" | "neutron" }[] = []
    const totalParticles = 59 + 82 // protons + neutrons
    const radius = 0.8

    for (let i = 0; i < totalParticles; i++) {
      // Fibonacci sphere distribution
      const phi = Math.acos(1 - 2 * (i + 0.5) / totalParticles)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i
      
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      
      // Add some randomness
      const jitter = 0.15
      items.push({
        position: [
          x + (Math.random() - 0.5) * jitter,
          y + (Math.random() - 0.5) * jitter,
          z + (Math.random() - 0.5) * jitter
        ],
        type: i < 59 ? "proton" : "neutron"
      })
    }
    return items
  }, [])

  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => (
        <Sphere
          key={i}
          args={[0.08, 16, 16]}
          position={particle.position}
          onClick={(e) => {
            e.stopPropagation()
            onParticleClick(particle.type)
          }}
        >
          <meshStandardMaterial
            color={particle.type === "proton" ? "#ef4444" : "#3b82f6"}
            emissive={particle.type === "proton" ? "#ef4444" : "#3b82f6"}
            emissiveIntensity={0.3}
          />
        </Sphere>
      ))}
      
      {/* Nucleus glow */}
      <Sphere args={[0.9, 32, 32]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.05} />
      </Sphere>
    </group>
  )
}

function ElectronShells({ 
  showShells, 
  onParticleClick 
}: { 
  showShells: boolean
  onParticleClick: (type: string) => void 
}) {
  const shellsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (shellsRef.current) {
      shellsRef.current.children.forEach((shell, i) => {
        shell.rotation.y = state.clock.elapsedTime * (0.5 - i * 0.08)
        shell.rotation.x = state.clock.elapsedTime * (0.3 + i * 0.05) * (i % 2 === 0 ? 1 : -1)
        shell.rotation.z = state.clock.elapsedTime * 0.1 * (i % 2 === 0 ? 1 : -1)
      })
    }
  })

  const shells = useMemo(() => {
    return electronShells.map((electronCount, shellIndex) => {
      const radius = 1.5 + shellIndex * 0.8
      const electrons: [number, number, number][] = []
      
      for (let i = 0; i < electronCount; i++) {
        const angle = (i / electronCount) * Math.PI * 2
        const tilt = (shellIndex * 0.3) + (i % 3) * 0.2
        
        electrons.push([
          radius * Math.cos(angle),
          radius * Math.sin(angle) * Math.cos(tilt),
          radius * Math.sin(angle) * Math.sin(tilt)
        ])
      }
      
      return { radius, electrons }
    })
  }, [])

  return (
    <group ref={shellsRef}>
      {shells.map((shell, shellIndex) => (
        <group key={shellIndex}>
          {/* Shell orbit rings */}
          {showShells && (
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[shell.radius, 0.01, 16, 100]} />
              <meshBasicMaterial color="#22c55e" transparent opacity={0.15} />
            </mesh>
          )}
          
          {/* Electrons */}
          {shell.electrons.map((pos, i) => (
            <group key={i} position={pos}>
              <Sphere
                args={[0.06, 16, 16]}
                onClick={(e) => {
                  e.stopPropagation()
                  onParticleClick("electron")
                }}
              >
                <meshStandardMaterial
                  color="#22c55e"
                  emissive="#22c55e"
                  emissiveIntensity={1}
                />
              </Sphere>
              {/* Electron glow */}
              <Sphere args={[0.12, 16, 16]}>
                <meshBasicMaterial color="#22c55e" transparent opacity={0.2} />
              </Sphere>
            </group>
          ))}
        </group>
      ))}
    </group>
  )
}

function AtomScene({ onParticleClick, showShells, zoom }: AtomModel3DProps) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22c55e" />
      
      <group scale={zoom}>
        <Nucleus onParticleClick={onParticleClick} />
        <ElectronShells showShells={showShells} onParticleClick={onParticleClick} />
      </group>
      
      <OrbitControls
        enablePan={false}
        minDistance={5}
        maxDistance={15}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

export function AtomModel3D(props: AtomModel3DProps) {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0a0a14')
        }}
      >
        <Suspense fallback={null}>
          <AtomScene {...props} />
        </Suspense>
      </Canvas>
    </div>
  )
}
