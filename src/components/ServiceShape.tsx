"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function makeGeo(i: number): THREE.BufferGeometry {
  switch (i) {
    case 0: return new THREE.BoxGeometry(1.5, 1.5, 1.5, 2, 2, 2);
    case 1: return new THREE.TorusGeometry(0.9, 0.35, 12, 36);
    case 2: return new THREE.CapsuleGeometry(0.55, 1.2, 4, 12);
    case 3: return new THREE.TorusKnotGeometry(0.75, 0.22, 120, 14);
    case 4: return new THREE.OctahedronGeometry(1.2, 1);
    default: return new THREE.IcosahedronGeometry(1.2, 1);
  }
}

function Shape({ index }: { index: number }) {
  const g = useRef<THREE.Group>(null!);
  const edges = useMemo(() => new THREE.EdgesGeometry(makeGeo(index), 12), [index]);
  const solid = useMemo(() => makeGeo(index), [index]);
  useFrame((s, dt) => {
    g.current.rotation.y += dt * 0.35;
    g.current.rotation.x += (s.pointer.y * 0.6 - g.current.rotation.x) * 0.05;
    g.current.rotation.z += (-s.pointer.x * 0.4 - g.current.rotation.z) * 0.05;
  });
  return (
    <group ref={g}>
      <mesh geometry={solid}>
        <meshStandardMaterial color="#141412" roughness={0.6} metalness={0.4} transparent opacity={0.85} />
      </mesh>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#f0a23a" />
      </lineSegments>
    </group>
  );
}

export default function ServiceShape({ index }: { index: number }) {
  return (
    <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 4.2], fov: 40 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 4]} intensity={2} color="#ffe2b0" />
      <Shape key={index} index={index} />
    </Canvas>
  );
}
