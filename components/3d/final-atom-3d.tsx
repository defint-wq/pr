"use client"

import { useRef, useMemo, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Float, Html } from "@react-three/drei"
import * as THREE from "three"

function GlowingSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      {/* Outer glow */}
      <Sphere args={[1.3, 32, 32]}>
        <meshBasicMaterial color="#22c55e" transparent opacity={0.1} />
      </Sphere>
      <Sphere args={[1.5, 32, 32]}>
        <meshBasicMaterial color="#22c55e" transparent opacity={0.05} />
      </Sphere>
    </Float>
  )
}

function OrbitingParticles() {
  const groupRef = useRef<THREE.Group>(null)
  
  const orbits = useMemo(() => {
    const orbitData: { radius: number; count: number; speed: number; offset: number }[] = []
    for (let i = 0; i < 4; i++) {
      orbitData.push({
        radius: 2 + i * 0.6,
        count: 8 + i * 4,
        speed: 0.5 - i * 0.1,
        offset: i * 0.5
      })
    }
    return orbitData
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {orbits.map((orbit, orbitIndex) => (
        <OrbitRing key={orbitIndex} {...orbit} />
      ))}
    </group>
  )
}

function OrbitRing({ radius, count, speed, offset }: { radius: number; count: number; speed: number; offset: number }) {
  const ringRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed + offset
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + offset) * 0.3
    }
  })

  const particles = useMemo(() => {
    const items: [number, number, number][] = []
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      items.push([
        radius * Math.cos(angle),
        radius * Math.sin(angle),
        0
      ])
    }
    return items
  }, [radius, count])

  return (
    <group ref={ringRef}>
      {/* Orbit path */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.01, 16, 100]} />
        <meshBasicMaterial color="#22c55e" transparent opacity={0.2} />
      </mesh>
      
      {/* Particles */}
      {particles.map((pos, i) => (
        <Sphere key={i} args={[0.05, 16, 16]} position={pos}>
          <meshStandardMaterial
            color="#22c55e"
            emissive="#22c55e"
            emissiveIntensity={1}
          />
        </Sphere>
      ))}
    </group>
  )
}

function ElementSymbol() {
  return (
    <Float speed={1} rotationIntensity={0.1}>
      <group position={[0, 0, 1.2]}>
        <Html center style={{ pointerEvents: 'none' }}>
          <div className="flex flex-col items-center text-white select-none">
            <span className="text-5xl font-bold tracking-tight">Pr</span>
            <span className="text-xl text-zinc-400">59</span>
          </div>
        </Html>
      </group>
    </Float>
  )
}

function BackgroundStars() {
  const starsRef = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const positions = new Float32Array(3000)
    for (let i = 0; i < 1000; i++) {
      const radius = 15 + Math.random() * 20
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    return positions
  }, [])

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1000}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.6} />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, 10, -10]} intensity={1} color="#22c55e" />
      <pointLight position={[0, -10, 10]} intensity={0.8} color="#0ea5e9" />
      <spotLight
        position={[0, 10, 5]}
        angle={0.4}
        penumbra={1}
        intensity={1.5}
        color="#ffffff"
      />
      <BackgroundStars />
      <GlowingSphere />
      <OrbitingParticles />
      <ElementSymbol />
    </>
  )
}

export function FinalAtom3D() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0a0a14')
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
