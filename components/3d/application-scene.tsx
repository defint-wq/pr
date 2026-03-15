"use client"

import { useRef, useMemo, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, RoundedBox, Torus, Cylinder, Ring, Float } from "@react-three/drei"
import * as THREE from "three"

interface ApplicationSceneProps {
  type: "magnet" | "glass" | "aircraft" | "motor" | "laser"
}

function MagnetScene() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3}>
      <group ref={groupRef}>
        {/* Horseshoe magnet shape */}
        <Torus args={[1, 0.3, 16, 50, Math.PI]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#f87171" metalness={0.6} roughness={0.3} emissive="#ef4444" emissiveIntensity={0.4} />
        </Torus>
        <Cylinder args={[0.3, 0.3, 1, 16]} position={[-1, -0.5, 0]}>
          <meshStandardMaterial color="#f87171" metalness={0.6} roughness={0.3} emissive="#ef4444" emissiveIntensity={0.4} />
        </Cylinder>
        <Cylinder args={[0.3, 0.3, 1, 16]} position={[1, -0.5, 0]}>
          <meshStandardMaterial color="#60a5fa" metalness={0.6} roughness={0.3} emissive="#3b82f6" emissiveIntensity={0.4} />
        </Cylinder>
        
        {/* Magnetic field lines */}
        {[...Array(8)].map((_, i) => (
          <mesh key={i} position={[0, -1, 0]} rotation={[0, (i / 8) * Math.PI * 2, 0]}>
            <torusGeometry args={[0.8 + i * 0.1, 0.02, 8, 50, Math.PI]} />
            <meshBasicMaterial color="#4ade80" transparent opacity={0.5 - i * 0.04} />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

function GlassScene() {
  const glassRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (glassRef.current) {
      glassRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2}>
      <group ref={glassRef}>
        {/* Protective goggles - bright green glass */}
        <RoundedBox args={[2.5, 1, 0.3]} radius={0.15} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#a3e635"
            transparent
            opacity={0.85}
            emissive="#84cc16"
            emissiveIntensity={0.5}
            metalness={0.2}
            roughness={0.1}
          />
        </RoundedBox>
        
        {/* Frame - lighter color */}
        <Torus args={[0.6, 0.05, 16, 32]} position={[-0.7, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#9ca3af" metalness={0.7} roughness={0.2} emissive="#6b7280" emissiveIntensity={0.2} />
        </Torus>
        <Torus args={[0.6, 0.05, 16, 32]} position={[0.7, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#9ca3af" metalness={0.7} roughness={0.2} emissive="#6b7280" emissiveIntensity={0.2} />
        </Torus>
        
        {/* Bridge */}
        <Cylinder args={[0.03, 0.03, 0.3, 8]} position={[0, 0, 0.1]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#9ca3af" metalness={0.7} roughness={0.2} emissive="#6b7280" emissiveIntensity={0.2} />
        </Cylinder>
        
        {/* Arms */}
        <Cylinder args={[0.03, 0.03, 1, 8]} position={[-1.5, 0, -0.3]} rotation={[0, 0.3, Math.PI / 2]}>
          <meshStandardMaterial color="#9ca3af" metalness={0.7} roughness={0.2} emissive="#6b7280" emissiveIntensity={0.2} />
        </Cylinder>
        <Cylinder args={[0.03, 0.03, 1, 8]} position={[1.5, 0, -0.3]} rotation={[0, -0.3, Math.PI / 2]}>
          <meshStandardMaterial color="#9ca3af" metalness={0.7} roughness={0.2} emissive="#6b7280" emissiveIntensity={0.2} />
        </Cylinder>
      </group>
    </Float>
  )
}

function AircraftScene() {
  const aircraftRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (aircraftRef.current) {
      aircraftRef.current.rotation.y = state.clock.elapsedTime * 0.3
      aircraftRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <Float speed={0.5} rotationIntensity={0.1}>
      <group ref={aircraftRef}>
        {/* Fuselage */}
        <Cylinder args={[0.3, 0.2, 3, 16]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#94a3b8" metalness={0.6} roughness={0.3} emissive="#334155" emissiveIntensity={0.3} />
        </Cylinder>
        
        {/* Wings */}
        <RoundedBox args={[0.1, 3, 0.5]} radius={0.02} position={[0, 0, 0]}>
          <meshStandardMaterial color="#cbd5e1" metalness={0.6} roughness={0.3} emissive="#475569" emissiveIntensity={0.2} />
        </RoundedBox>
        
        {/* Tail */}
        <RoundedBox args={[0.05, 1, 0.3]} radius={0.02} position={[-1.3, 0, 0]}>
          <meshStandardMaterial color="#cbd5e1" metalness={0.6} roughness={0.3} emissive="#475569" emissiveIntensity={0.2} />
        </RoundedBox>
        <RoundedBox args={[0.05, 0.3, 0.5]} radius={0.02} position={[-1.3, 0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#cbd5e1" metalness={0.6} roughness={0.3} emissive="#475569" emissiveIntensity={0.2} />
        </RoundedBox>
        
        {/* Engines with strong green glow */}
        <Cylinder args={[0.15, 0.12, 0.5, 16]} position={[0.5, 0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#4ade80" metalness={0.7} roughness={0.2} emissive="#22c55e" emissiveIntensity={0.8} />
        </Cylinder>
        <Cylinder args={[0.15, 0.12, 0.5, 16]} position={[0.5, -0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#4ade80" metalness={0.7} roughness={0.2} emissive="#22c55e" emissiveIntensity={0.8} />
        </Cylinder>
        
        {/* Cockpit */}
        <mesh position={[1.3, 0, 0]}>
          <sphereGeometry args={[0.25, 16, 16, 0, Math.PI]} />
          <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={0.4} transparent opacity={0.7} />
        </mesh>
        
        {/* Add accent lights on wings */}
        <mesh position={[0, 1.4, 0]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#ef4444" />
        </mesh>
        <mesh position={[0, -1.4, 0]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#22c55e" />
        </mesh>
      </group>
    </Float>
  )
}

function MotorScene() {
  const rotorRef = useRef<THREE.Group>(null)
  const coilsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (rotorRef.current) {
      rotorRef.current.rotation.z = state.clock.elapsedTime * 3
    }
    if (coilsRef.current) {
      coilsRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <group ref={coilsRef}>
      {/* Stator (outer ring) */}
      <Torus args={[1.5, 0.2, 16, 32]}>
        <meshStandardMaterial color="#6b7280" metalness={0.6} roughness={0.3} emissive="#4b5563" emissiveIntensity={0.3} />
      </Torus>
      
      {/* Coils - bright orange/copper */}
      {[...Array(8)].map((_, i) => (
        <group key={i} rotation={[0, 0, (i / 8) * Math.PI * 2]}>
          <RoundedBox args={[0.15, 0.5, 0.3]} radius={0.03} position={[0, 1.2, 0]}>
            <meshStandardMaterial color="#fb923c" metalness={0.5} roughness={0.3} emissive="#f97316" emissiveIntensity={0.5} />
          </RoundedBox>
        </group>
      ))}
      
      {/* Rotor - bright green center */}
      <group ref={rotorRef}>
        <Cylinder args={[0.8, 0.8, 0.5, 32]}>
          <meshStandardMaterial color="#4ade80" metalness={0.7} roughness={0.2} emissive="#22c55e" emissiveIntensity={0.6} />
        </Cylinder>
        
        {/* Magnets on rotor */}
        {[...Array(6)].map((_, i) => (
          <RoundedBox
            key={i}
            args={[0.2, 0.3, 0.55]}
            radius={0.03}
            position={[
              Math.cos((i / 6) * Math.PI * 2) * 0.6,
              Math.sin((i / 6) * Math.PI * 2) * 0.6,
              0
            ]}
            rotation={[0, 0, (i / 6) * Math.PI * 2]}
          >
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#f87171" : "#60a5fa"} 
              metalness={0.6} 
              roughness={0.3}
              emissive={i % 2 === 0 ? "#ef4444" : "#3b82f6"}
              emissiveIntensity={0.4}
            />
          </RoundedBox>
        ))}
      </group>
      
      {/* Shaft */}
      <Cylinder args={[0.1, 0.1, 2, 16]}>
        <meshStandardMaterial color="#9ca3af" metalness={0.8} roughness={0.2} emissive="#6b7280" emissiveIntensity={0.2} />
      </Cylinder>
    </group>
  )
}

function LaserScene() {
  const beamRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (beamRef.current) {
      (beamRef.current.material as THREE.MeshBasicMaterial).opacity = 
        0.7 + Math.sin(state.clock.elapsedTime * 10) * 0.3
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.z = state.clock.elapsedTime * 0.5
    }
  })

  const particles = useMemo(() => {
    const positions = new Float32Array(300)
    for (let i = 0; i < 100; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = Math.random() * 0.3
      positions[i * 3] = 2 + Math.random() * 0.5
      positions[i * 3 + 1] = Math.cos(angle) * radius
      positions[i * 3 + 2] = Math.sin(angle) * radius
    }
    return positions
  }, [])

  return (
    <Float speed={1} rotationIntensity={0.1}>
      <group>
        {/* Laser housing - brighter metal */}
        <Cylinder args={[0.4, 0.4, 2, 16]} rotation={[0, 0, Math.PI / 2]} position={[-0.5, 0, 0]}>
          <meshStandardMaterial color="#6b7280" metalness={0.7} roughness={0.2} emissive="#4b5563" emissiveIntensity={0.3} />
        </Cylinder>
        
        {/* Crystal cavity - bright glowing green */}
        <RoundedBox args={[0.5, 0.3, 0.3]} radius={0.05} position={[0.3, 0, 0]}>
          <meshStandardMaterial 
            color="#4ade80" 
            emissive="#22c55e"
            emissiveIntensity={1}
            metalness={0.3}
            roughness={0.2}
          />
        </RoundedBox>
        
        {/* Aperture */}
        <Ring args={[0.1, 0.2, 32]} position={[0.8, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <meshStandardMaterial color="#9ca3af" metalness={0.8} roughness={0.2} emissive="#6b7280" emissiveIntensity={0.3} />
        </Ring>
        
        {/* Laser beam - brighter */}
        <Cylinder ref={beamRef} args={[0.05, 0.08, 3, 16]} rotation={[0, 0, Math.PI / 2]} position={[2.3, 0, 0]}>
          <meshBasicMaterial color="#4ade80" transparent opacity={0.9} />
        </Cylinder>
        
        {/* Beam glow - more visible */}
        <Cylinder args={[0.15, 0.2, 3, 16]} rotation={[0, 0, Math.PI / 2]} position={[2.3, 0, 0]}>
          <meshBasicMaterial color="#22c55e" transparent opacity={0.25} />
        </Cylinder>
        
        {/* Impact particles */}
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={100}
              array={particles}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial size={0.05} color="#4ade80" transparent opacity={1} />
        </points>
      </group>
    </Float>
  )
}

function SceneContent({ type }: { type: string }) {
  switch (type) {
    case "magnet":
      return <MagnetScene />
    case "glass":
      return <GlassScene />
    case "aircraft":
      return <AircraftScene />
    case "motor":
      return <MotorScene />
    case "laser":
      return <LaserScene />
    default:
      return <MagnetScene />
  }
}

function Scene({ type }: { type: string }) {
  return (
    <>
      <ambientLight intensity={1.2} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
      <pointLight position={[-10, 10, -10]} intensity={1.5} color="#22c55e" />
      <pointLight position={[0, -10, 10]} intensity={1} color="#0ea5e9" />
      <spotLight position={[0, 10, 0]} angle={0.5} penumbra={1} intensity={2} color="#ffffff" />
      <spotLight position={[5, 5, 5]} angle={0.3} penumbra={0.5} intensity={1.5} color="#22c55e" />
      <SceneContent type={type} />
      <OrbitControls
        enablePan={false}
        minDistance={4}
        maxDistance={10}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

export function ApplicationScene({ type }: ApplicationSceneProps) {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas 
        camera={{ position: [4, 2, 4], fov: 50 }}
        gl={{ antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0a0a14')
        }}
      >
        <Suspense fallback={null}>
          <Scene type={type} />
        </Suspense>
      </Canvas>
    </div>
  )
}
