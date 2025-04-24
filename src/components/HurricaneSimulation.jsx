import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const HurricaneParticle = ({ position }) => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshStandardMaterial color="#4a90e2" />
    </mesh>
  );
};

const HurricaneCore = () => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#1a365d" transparent opacity={0.8} />
    </mesh>
  );
};

const HurricaneSimulation = () => {
  const particles = Array.from({ length: 100 }, (_, i) => {
    const angle = (i / 100) * Math.PI * 2;
    const radius = 2 + Math.random() * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = Math.random() * 2 - 1;
    return { position: [x, y, z] };
  });

  return (
    <div className="hurricane-simulation">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <HurricaneCore />
        {particles.map((particle, index) => (
          <HurricaneParticle key={index} position={particle.position} />
        ))}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default HurricaneSimulation; 