import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Points, PointMaterial } from "@react-three/drei";
import { useRef, useState, useEffect, useMemo } from "react";

// Main 3D Object
const MainObject = () => {
  const meshRef = useRef();
  const wireRef = useRef();
  const glowRef = useRef();
  const groupRef = useRef();

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Track mouse only on devices that support a mouse/pointer.
  // This prevents touch interaction from interfering with page scrolling.
  useEffect(() => {
    const isTouchDevice =
      window.matchMedia && window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {
      return;
    }

    const handlePointerMove = (event) => {
      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;

      const x = (event.clientX / width) * 2 - 1;
      const y = -(event.clientY / height) * 2 + 1;

      setMouseX(x);
      setMouseY(y);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Smooth mouse following
    if (groupRef.current) {
      groupRef.current.rotation.x +=
        (mouseY * 0.3 - groupRef.current.rotation.x) * 0.02;

      groupRef.current.rotation.y +=
        (mouseX * 0.3 - groupRef.current.rotation.y) * 0.02;
    }

    // Continuous rotation
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.1;
      meshRef.current.rotation.y = time * 0.15;
    }

    if (wireRef.current) {
      wireRef.current.rotation.x = -time * 0.08;
      wireRef.current.rotation.y = time * 0.12;
    }

    if (glowRef.current) {
      glowRef.current.rotation.x = time * 0.05;
      glowRef.current.rotation.y = -time * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* Core solid shape */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.5, 0]} />

          <meshStandardMaterial
            color="#E8794F"
            roughness={0.3}
            metalness={0.1}
            transparent
            opacity={0.1}
          />
        </mesh>

        {/* Wireframe layer */}
        <mesh ref={wireRef}>
          <icosahedronGeometry args={[1.6, 1]} />

          <meshBasicMaterial
            color="#E8794F"
            wireframe
            transparent
            opacity={0.5}
          />
        </mesh>

        {/* Outer glow wireframe */}
        <mesh ref={glowRef}>
          <icosahedronGeometry args={[1.8, 0]} />

          <meshBasicMaterial
            color="#E8794F"
            wireframe
            transparent
            opacity={0.1}
          />
        </mesh>

        {/* Inner small shape */}
        <mesh>
          <icosahedronGeometry args={[0.4, 0]} />

          <meshStandardMaterial
            color="#E8794F"
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>
    </group>
  );
};

// Particle System
const ParticleSystem = () => {
  const count = 300;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);

      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);

      pos[i * 3 + 2] = radius * Math.cos(phi);
    }

    return pos;
  }, []);

  return (
    <Points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>

      <PointMaterial
        size={0.03}
        transparent
        opacity={0.4}
        color="#E8794F"
        sizeAttenuation
      />
    </Points>
  );
};

// Main Scene Component
const Scene = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");

    const updateDeviceType = () => {
      setIsTouchDevice(mediaQuery.matches);
    };

    updateDeviceType();

    mediaQuery.addEventListener("change", updateDeviceType);

    return () => {
      mediaQuery.removeEventListener("change", updateDeviceType);
    };
  }, []);

  return (
    <div
      className="h-full w-full"
      style={{
        touchAction: "pan-y",
      }}
    >
      <Canvas
        dpr={[1, 1.8]}
        camera={{
          position: [0, 0, 5.5],
          fov: 42,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
        style={{
          touchAction: "pan-y",
        }}
      >
        <ambientLight intensity={0.5} />

        <directionalLight position={[10, 10, 10]} intensity={0.5} />

        <directionalLight position={[-10, -10, -10]} intensity={0.3} />

        <MainObject />

        <ParticleSystem />

        {/* 
          IMPORTANT:
          Do not mount OrbitControls on touch devices.
          OrbitControls can capture touch events and prevent
          normal browser scrolling.
        */}
        {!isTouchDevice && (
          <OrbitControls
            enableRotate
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            enableDamping
            dampingFactor={0.05}
          />
        )}
      </Canvas>
    </div>
  );
};

export default Scene;
