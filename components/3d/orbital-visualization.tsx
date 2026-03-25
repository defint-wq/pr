"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

interface OrbitalVisualizationProps {
  orbital: string;
}

// Generate points for different orbital shapes
function generateOrbitalPoints(orbital: string): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const count = 2000;

  for (let i = 0; i < count; i++) {
    let x = 0,
      y = 0,
      z = 0;
    const radius = Math.random() * 2 + 0.5;

    if (orbital.includes("s")) {
      // Spherical distribution
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.acos(2 * Math.random() - 1);
      const r = radius * Math.pow(Math.random(), 1 / 3);

      x = r * Math.sin(theta) * Math.cos(phi);
      y = r * Math.sin(theta) * Math.sin(phi);
      z = r * Math.cos(theta);
    } else if (orbital.includes("p")) {
      // Dumbbell shape
      const sign = Math.random() > 0.5 ? 1 : -1;
      const r = Math.random() * radius;
      const angle = Math.random() * Math.PI * 2;
      const spread = 0.3;

      z = sign * (r * 0.8 + 0.3);
      x = Math.cos(angle) * spread * (1 - Math.abs(z) / radius);
      y = Math.sin(angle) * spread * (1 - Math.abs(z) / radius);
    } else if (orbital.includes("d")) {
      // Cloverleaf pattern
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = radius * Math.pow(Math.random(), 1 / 3);

      // d-orbital lobe pattern
      const factor = Math.sin(2 * theta) * Math.sin(phi);

      x = r * Math.sin(phi) * Math.cos(theta) * Math.abs(factor);
      y = r * Math.sin(phi) * Math.sin(theta) * Math.abs(factor);
      z = r * Math.cos(phi) * 0.7;
    } else if (orbital.includes("f")) {
      // Complex f-orbital shape
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = radius * Math.pow(Math.random(), 1 / 3);

      // More complex lobe pattern
      const f1 = Math.sin(3 * theta) * Math.sin(phi);
      const f2 = Math.cos(2 * phi);

      x = r * Math.sin(phi) * Math.cos(theta) * (1 + 0.5 * Math.abs(f1));
      y = r * Math.sin(phi) * Math.sin(theta) * (1 + 0.5 * Math.abs(f1));
      z = r * Math.cos(phi) * (1 + 0.3 * f2);
    }

    points.push(new THREE.Vector3(x, y, z));
  }

  return points;
}

function OrbitalCloud({ orbital }: { orbital: string }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const points = generateOrbitalPoints(orbital);
    const posArray = new Float32Array(points.length * 3);
    const colArray = new Float32Array(points.length * 3);

    // Color based on orbital type
    const baseColor = new THREE.Color(
      orbital.includes("s")
        ? "#22c55e"
        : orbital.includes("p")
          ? "#0ea5e9"
          : orbital.includes("d")
            ? "#f59e0b"
            : "#a855f7", // f-orbital
    );

    points.forEach((point, i) => {
      posArray[i * 3] = point.x;
      posArray[i * 3 + 1] = point.y;
      posArray[i * 3 + 2] = point.z;

      // Vary color by distance from center
      const dist = point.length();
      const intensity = 1 - dist / 3;

      colArray[i * 3] = baseColor.r * (0.5 + intensity * 0.5);
      colArray[i * 3 + 1] = baseColor.g * (0.5 + intensity * 0.5);
      colArray[i * 3 + 2] = baseColor.b * (0.5 + intensity * 0.5);
    });

    return { positions: posArray, colors: colArray };
  }, [orbital]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      pointsRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />{" "}
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function Nucleus() {
  return (
    <Sphere args={[0.15, 32, 32]}>
      <meshStandardMaterial
        color="#ffffff"
        emissive="#22c55e"
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
}

function AxisHelper() {
  return (
    <group>
      {/* X axis */}
      <mesh position={[1.5, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <cylinderGeometry args={[0.01, 0.01, 3, 8]} />
        <meshBasicMaterial color="#ef4444" transparent opacity={0.3} />
      </mesh>
      {/* Y axis */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 3, 8]} />
        <meshBasicMaterial color="#22c55e" transparent opacity={0.3} />
      </mesh>
      {/* Z axis */}
      <mesh position={[0, 0, 1.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 3, 8]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function Scene({ orbital }: { orbital: string }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <Nucleus />
      <OrbitalCloud orbital={orbital} />
      <AxisHelper />
      <OrbitControls
        enablePan={false}
        minDistance={3}
        maxDistance={10}
        autoRotate
        autoRotateSpeed={1}
      />
    </>
  );
}

export function OrbitalVisualization({ orbital }: OrbitalVisualizationProps) {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas
        camera={{ position: [4, 3, 4], fov: 50 }}
        gl={{ antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor("#0a0a14");
        }}
      >
        <Suspense fallback={null}>
          <Scene orbital={orbital} />
        </Suspense>
      </Canvas>
    </div>
  );
}
