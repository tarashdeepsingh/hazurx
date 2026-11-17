"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, MeshTransmissionMaterial, PointMaterial, Points, RoundedBox } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

// Scroll choreography for the glass X. x is a fraction of viewport width.
const KF = [
  { p: 0, x: 0.26, y: 0.02, z: 0, s: 0.78, ry: 0, rz: 0 },
  { p: 0.3, x: -0.22, y: 0.05, z: -0.8, s: 0.6, ry: Math.PI * 0.5, rz: 0.25 },
  { p: 0.65, x: 0.22, y: -0.05, z: -0.6, s: 0.65, ry: Math.PI, rz: -0.25 },
  { p: 1, x: 0, y: 0.05, z: -1.6, s: 0.75, ry: Math.PI * 2, rz: 0 },
];

function sample(p: number) {
  let i = 0;
  while (i < KF.length - 2 && p > KF[i + 1].p) i++;
  const a = KF[i], b = KF[i + 1];
  const t = THREE.MathUtils.clamp((p - a.p) / (b.p - a.p), 0, 1);
  const e = t * t * (3 - 2 * t);
  const l = (k: "x" | "y" | "z" | "s" | "ry" | "rz") => a[k] + (b[k] - a[k]) * e;
  return { x: l("x"), y: l("y"), z: l("z"), s: l("s"), ry: l("ry"), rz: l("rz") };
}

function mulberry(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function GlassX({ progress, lowPower, anchor }: { progress: React.RefObject<number>; lowPower: boolean; anchor: React.RefObject<THREE.Vector3> }) {
  const group = useRef<THREE.Group>(null!);
  const ring = useRef<THREE.Mesh>(null!);
  const light = useRef<THREE.PointLight>(null!);
  const { viewport } = useThree();
  const cur = useRef({ x: 0, y: 0, z: 0, s: 1, ry: 0, rz: 0 });

  useFrame((state, dt) => {
    const d = Math.min(dt, 0.05);
    const portrait = viewport.width < viewport.height;
    const p = progress.current ?? 0;
    const k = sample(p);
    const fit = THREE.MathUtils.clamp(viewport.width / 5.2, 0.55, 1.15);
    const tx = portrait ? 0 : k.x * viewport.width;
    const ty = k.y * viewport.height + (portrait ? viewport.height * 0.2 * (1 - Math.min(1, p * 4)) : 0);
    const c = cur.current;
    const L = 3.2;
    c.x = THREE.MathUtils.damp(c.x, tx, L, d);
    c.y = THREE.MathUtils.damp(c.y, ty, L, d);
    c.z = THREE.MathUtils.damp(c.z, k.z, L, d);
    c.s = THREE.MathUtils.damp(c.s, k.s * fit, L, d);
    c.ry = THREE.MathUtils.damp(c.ry, k.ry, L, d);
    c.rz = THREE.MathUtils.damp(c.rz, k.rz, L, d);

    const t = state.clock.elapsedTime;
    const g = group.current;
    g.position.set(c.x, c.y + Math.sin(t * 0.7) * 0.06, c.z);
    g.scale.setScalar(c.s);
    anchor.current.set(g.position.x, g.position.y, 0);
    g.rotation.y = c.ry + state.pointer.x * 0.5 + Math.sin(t * 0.3) * 0.12;
    g.rotation.x = -state.pointer.y * 0.3 + Math.sin(t * 0.4) * 0.06;
    g.rotation.z = c.rz;

    ring.current.rotation.x = t * 0.25;
    ring.current.rotation.y = t * 0.18;

    light.current.position.set(state.pointer.x * viewport.width * 0.5, state.pointer.y * viewport.height * 0.5, 2.5);
  });

  const mat = (
    <MeshTransmissionMaterial
      transmission={1}
      thickness={0.5}
      roughness={0.04}
      ior={1.25}
      chromaticAberration={lowPower ? 0 : 0.07}
      anisotropicBlur={0.12}
      distortion={0.15}
      distortionScale={0.4}
      temporalDistortion={0.05}
      backside
      samples={lowPower ? 3 : 6}
      resolution={lowPower ? 256 : 512}
      color="#ffffff"
    />
  );

  return (
    <>
      <pointLight ref={light} color="#ffb454" intensity={18} distance={9} />
      <group ref={group}>
        <RoundedBox args={[0.34, 3.4, 0.34]} radius={0.1} smoothness={4} rotation={[0, 0, Math.PI / 4]}>{mat}</RoundedBox>
        <RoundedBox args={[0.34, 3.4, 0.34]} radius={0.1} smoothness={4} rotation={[0, 0, -Math.PI / 4]}>{mat}</RoundedBox>
        <mesh ref={ring}>
          <torusGeometry args={[1.75, 0.005, 8, 160]} />
          <meshBasicMaterial color="#ffb454" transparent opacity={0.55} />
        </mesh>
      </group>
    </>
  );
}

function Glow({ anchor }: { anchor: React.RefObject<THREE.Vector3> }) {
  const root = useRef<THREE.Group>(null!);
  const a = useRef<THREE.Mesh>(null!);
  const b = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    root.current.position.x = anchor.current.x;
    root.current.position.y = anchor.current.y;
    a.current.position.x = Math.sin(t * 0.25) * 0.8;
    b.current.position.x = Math.cos(t * 0.2) * -0.8;
  });
  return (
    <group ref={root} position={[0, 0, -3.2]}>
      <mesh ref={a} position={[0, 1.2, 0]} rotation={[0, 0, 0.5]}>
        <planeGeometry args={[4.5, 0.08]} />
        <meshBasicMaterial color="#d9913a" toneMapped={false} />
      </mesh>
      <mesh ref={b} position={[0, -1.3, 0.2]} rotation={[0, 0, -0.45]}>
        <planeGeometry args={[4.5, 0.05]} />
        <meshBasicMaterial color="#5d74c9" toneMapped={false} />
      </mesh>
      <mesh position={[0, 0, -0.5]}>
        <planeGeometry args={[30, 20]} />
        <meshBasicMaterial color="#17141b" />
      </mesh>
    </group>
  );
}

function Field({ progress, count }: { progress: React.RefObject<number>; count: number }) {
  const group = useRef<THREE.Group>(null!);
  const positions = useMemo(() => {
    const r = mulberry(11);
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      a[i * 3] = (r() - 0.5) * 16;
      a[i * 3 + 1] = (r() - 0.5) * 12;
      a[i * 3 + 2] = -r() * 9 + 1;
    }
    return a;
  }, [count]);
  useFrame((state, dt) => {
    const g = group.current;
    g.rotation.y += dt * 0.012;
    // parallax: field drifts against scroll and pointer for depth
    g.position.y = THREE.MathUtils.damp(g.position.y, (progress.current ?? 0) * 5, 2.5, dt);
    g.position.x = THREE.MathUtils.damp(g.position.x, -state.pointer.x * 0.5, 2, dt);
  });
  return (
    <group ref={group}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#f3ead8" size={0.025} sizeAttenuation depthWrite={false} opacity={0.7} />
      </Points>
    </group>
  );
}

export default function Scene() {
  const progress = useRef(0);
  const anchor = useRef(new THREE.Vector3());
  const lowPower = useMemo(
    () => typeof window !== "undefined" && (window.innerWidth < 768 || (navigator.hardwareConcurrency ?? 8) <= 4),
    [],
  );

  useEffect(() => {
    const on = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current = max > 0 ? THREE.MathUtils.clamp(window.scrollY / max, 0, 1) : 0;
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);

  return (
    <Canvas
      dpr={[1, lowPower ? 1.25 : 1.6]}
      camera={{ position: [0, 0, 6], fov: 35 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      eventSource={typeof document !== "undefined" ? document.body : undefined}
      eventPrefix="client"
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.3} />
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={8} position={[0, 5, -4]} scale={[12, 3, 1]} color="#ffffff" />
        <Lightformer form="rect" intensity={6} position={[-5, 0, 2]} scale={[2, 8, 1]} color="#ffd9a0" />
        <Lightformer form="rect" intensity={5} position={[5, -1, 2]} scale={[2, 8, 1]} color="#9fb4ff" />
        <Lightformer form="ring" intensity={6} position={[0, 0, 5]} scale={3} color="#ffffff" />
      </Environment>
      <Glow anchor={anchor} />
      <Field progress={progress} count={lowPower ? 700 : 1600} />
      <GlassX progress={progress} lowPower={lowPower} anchor={anchor} />
    </Canvas>
  );
}
