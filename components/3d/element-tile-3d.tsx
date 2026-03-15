"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { RoundedBox, Float, Html } from "@react-three/drei"
import * as THREE from "three"

function ElementTile() {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={meshRef}>
        {/* Main tile */}
        <RoundedBox args={[3, 3.5, 0.3]} radius={0.15} smoothness={4}>
          <meshStandardMaterial
            color="#22c55e"
            metalness={0.4}
            roughness={0.2}
            emissive="#22c55e"
            emissiveIntensity={0.15}
          />
        </RoundedBox>

        {/* Glowing edge */}
        <RoundedBox args={[3.08, 3.58, 0.28]} radius={0.15} smoothness={4}>
          <meshBasicMaterial color="#22c55e" transparent opacity={0.15} />
        </RoundedBox>

        {/* HTML overlay for text - more reliable than 3D text */}
        <Html
          center
          transform
          position={[0, 0, 0.2]}
          style={{
            width: '180px',
            height: '210px',
            pointerEvents: 'none',
          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center text-white select-none">
            <span className="absolute top-2 left-3 text-lg font-bold">59</span>
            <span className="text-6xl font-bold tracking-tight">Pr</span>
            <span className="text-sm mt-1">Praseodymium</span>
            <span className="text-xs text-zinc-400 mt-0.5">140.91</span>
            <span className="text-xs text-green-400 mt-0.5">Lanthanide</span>
          </div>
        </Html>
      </group>
    </Float>
  )
}

function OrbitingElectrons() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      {[0, 1, 2].map((i) => (
        <group key={i} rotation={[0, 0, (i * Math.PI * 2) / 3]}>
          <mesh position={[4, 0, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#22c55e"
              emissive="#22c55e"
              emissiveIntensity={2}
            />
          </mesh>
          {/* Trail */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[4, 0.01, 16, 100]} />
            <meshBasicMaterial color="#22c55e" transparent opacity={0.3} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1} />
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
      <ElementTile />
      <OrbitingElectrons />
    </>
  )
}

export function ElementTile3D() {
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
