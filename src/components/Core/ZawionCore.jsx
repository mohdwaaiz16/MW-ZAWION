import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLocation } from 'react-router-dom';

const CoreGeometry = () => {
  const meshRef = useRef(null);
  const location = useLocation();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Rotate the core
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;

    // Depending on the route, adjust scale or shape slightly
    // This is a minimal implementation of the core reacting to the page
    const targetScale = location.pathname === '/intelligence' ? 1.5 : 1;
    meshRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.05);
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 1]} />
      <meshBasicMaterial color="#00FFD1" wireframe opacity={0.2} transparent />
    </mesh>
  );
};

const ZawionCore = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <CoreGeometry />
      </Canvas>
    </div>
  );
};

export default ZawionCore;
