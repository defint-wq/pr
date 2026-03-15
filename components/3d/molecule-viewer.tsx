"use client"

import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, Line, Html } from "@react-three/drei"
import * as THREE from "three"

interface MoleculeViewerProps {
  compound: "oxide" | "chloride" | "fluoride"
}

// Atom configurations for different compounds
const atomData = {
  Pr: { color: "#22c55e", radius: 0.4, label: "Pr" },
  O: { color: "#ef4444", radius: 0.25, label: "O" },
  Cl: { color: "#22d3ee", radius: 0.3, label: "Cl" },
  F: { color: "#facc15", radius: 0.2, label: "F" },
}

interface AtomConfig {
  position: [number, number, number]
  type: keyof typeof atomData
}

interface BondConfig {
  start: [number, number, number]
  end: [number, number, number]
}

// Molecular structures (simplified representations)
const structures: Record<string, { atoms: AtomConfig[], bonds: BondConfig[] }> = {
  oxide: {
    atoms: [
      // Pr2O3 structure (simplified)
      { position: [-1, 0, 0], type: "Pr" },
      { position: [1, 0, 0], type: "Pr" },
      { position: [0, 1, 0.5], type: "O" },
      { position: [0, -1, 0.5], type: "O" },
      { position: [0, 0, -1], type: "O" },
    ],
    bonds: [
      { start: [-1, 0, 0], end: [0, 1, 0.5] },
      { start: [-1, 0, 0], end: [0, -1, 0.5] },
      { start: [-1, 0, 0], end: [0, 0, -1] },
      { start: [1, 0, 0], end: [0, 1, 0.5] },
      { start: [1, 0, 0], end: [0, -1, 0.5] },
      { start: [1, 0, 0], end: [0, 0, -1] },
    ]
  },
  chloride: {
    atoms: [
      // PrCl3 octahedral structure
      { position: [0, 0, 0], type: "Pr" },
      { position: [1.2, 0, 0], type: "Cl" },
      { position: [-0.6, 1.04, 0], type: "Cl" },
      { position: [-0.6, -1.04, 0], type: "Cl" },
    ],
    bonds: [
      { start: [0, 0, 0], end: [1.2, 0, 0] },
      { start: [0, 0, 0], end: [-0.6, 1.04, 0] },
      { start: [0, 0, 0], end: [-0.6, -1.04, 0] },
    ]
  },
  fluoride: {
    atoms: [
      // PrF3 structure
      { position: [0, 0, 0], type: "Pr" },
      { position: [1, 0, 0], type: "F" },
      { position: [-0.5, 0.866, 0], type: "F" },
      { position: [-0.5, -0.866, 0], type: "F" },
    ],
    bonds: [
      { start: [0, 0, 0], end: [1, 0, 0] },
      { start: [0, 0, 0], end: [-0.5, 0.866, 0] },
      { start: [0, 0, 0], end: [-0.5, -0.866, 0] },
    ]
  }
}

function Atom({ position, type, showLabel = true }: { position: [number, number, number], type: keyof typeof atomData, showLabel?: boolean }) {
  const data = atomData[type]
  const meshRef = useRef<THREE.Mesh>(null)

  return (
    <group position={position}>
      <Sphere ref={meshRef} args={[data.radius, 32, 32]}>
        <meshStandardMaterial
          color={data.color}
          emissive={data.color}
          emissiveIntensity={0.3}
          roughness={0.3}
          metalness={0.5}
        />
      </Sphere>
      {/* Glow effect */}
      <Sphere args={[data.radius * 1.3, 32, 32]}>
        <meshBasicMaterial color={data.color} transparent opacity={0.1} />
      </Sphere>
      {showLabel && (
        <Html
          position={[0, data.radius + 0.3, 0]}
          center
          style={{
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          <div className="px-2 py-1 rounded bg-background/80 backdrop-blur-sm text-xs font-mono text-foreground border border-border">
            {data.label}
          </div>
        </Html>
      )}
    </group>
  )
}

function Bond({ start, end }: { start: [number, number, number], end: [number, number, number] }) {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)]
  
  return (
    <Line
      points={points}
      color="#ffffff"
      lineWidth={2}
      transparent
      opacity={0.5}
    />
  )
}

function Molecule({ compound }: { compound: "oxide" | "chloride" | "fluoride" }) {
  const groupRef = useRef<THREE.Group>(null)
  const structure = structures[compound]

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Bonds */}
      {structure.bonds.map((bond, i) => (
        <Bond key={`bond-${i}`} start={bond.start} end={bond.end} />
      ))}
      
      {/* Atoms */}
      {structure.atoms.map((atom, i) => (
        <Atom key={`atom-${i}`} position={atom.position} type={atom.type} />
      ))}
    </group>
  )
}

function Scene({ compound }: { compound: "oxide" | "chloride" | "fluoride" }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22c55e" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.5}
        penumbra={1}
        intensity={0.5}
        color="#0ea5e9"
      />
      <Molecule compound={compound} />
      <OrbitControls
        enablePan={false}
        minDistance={3}
        maxDistance={8}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

export function MoleculeViewer({ compound }: MoleculeViewerProps) {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0a0a14')
        }}
      >
        <Suspense fallback={null}>
          <Scene compound={compound} />
        </Suspense>
      </Canvas>
    </div>
  )
}
