import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

const FloatingCube = ({ position = [0, 0, 0], size = 1, color = '#64ffda', speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  
  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 0.2;
      
      // Slow rotation
      meshRef.current.rotation.x += 0.003 * speed;
      meshRef.current.rotation.y += 0.005 * speed;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position as [number, number, number]}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} roughness={0.5} metalness={0.2} />
    </mesh>
  );
};

const FloatingSphere = ({ position = [0, 0, 0], radius = 0.5, color = '#0078f5', speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  
  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = initialY + Math.cos(state.clock.elapsedTime * speed) * 0.2;
      
      // Slow rotation
      meshRef.current.rotation.x += 0.002 * speed;
      meshRef.current.rotation.y += 0.004 * speed;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position as [number, number, number]}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.4} />
    </mesh>
  );
};

const FloatingTorus = ({ position = [0, 0, 0], args = [0.5, 0.2, 16, 32], color = '#0060c4', speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  
  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed + 1) * 0.2;
      
      // Slow rotation
      meshRef.current.rotation.x += 0.004 * speed;
      meshRef.current.rotation.y += 0.003 * speed;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position as [number, number, number]}>
      <torusGeometry args={args as [number, number, number, number]} />
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.3} />
    </mesh>
  );
};

const FloatingText = ({ position = [0, 0, 0], text = '<Code />', color = '#64ffda', size = 1, speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  
  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed + 2) * 0.2;
      
      // Slow rotation
      meshRef.current.rotation.y += 0.003 * speed;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position as [number, number, number]}>
      <textGeometry args={[text, { font: 'bold', size, height: 0.1 }]} />
      <meshStandardMaterial color={color} roughness={0.5} metalness={0.2} />
    </mesh>
  );
};

const ParticleField = ({ count = 100, size = 0.02, color = '#ffffff' }) => {
  const { scene } = useThree();
  const particlesRef = useRef<THREE.Points>(null);
  
  useEffect(() => {
    // Create particles
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i += 3) {
      // Position in a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 5 + Math.random() * 5;
      
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
      
      // Random velocity
      velocities[i] = (Math.random() - 0.5) * 0.01;
      velocities[i + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i + 2] = (Math.random() - 0.5) * 0.01;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    
    return () => {
      geometry.dispose();
    };
  }, [count]);
  
  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      const velocities = particlesRef.current.geometry.attributes.velocity.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];
        
        // Keep particles within bounds
        if (Math.abs(positions[i]) > 10) velocities[i] *= -1;
        if (Math.abs(positions[i + 1]) > 10) velocities[i + 1] *= -1;
        if (Math.abs(positions[i + 2]) > 10) velocities[i + 2] *= -1;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial size={size} color={color} transparent opacity={0.6} />
    </points>
  );
};

interface SceneProps {
  interactive?: boolean;
  particles?: boolean;
}

const Scene: React.FC<SceneProps> = ({ interactive = true, particles = true }) => {
  const { theme } = useTheme();
  
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />
        {interactive && <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />}
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        
        {/* Particle background */}
        {particles && <ParticleField count={100} color={theme === 'light' ? '#0a192f' : '#64ffda'} />}
        
        {/* 3D Objects */}
        <FloatingCube position={[-2, 0, 0]} size={0.8} color="#64ffda" speed={0.8} />
        <FloatingSphere position={[2, 0.5, -1]} radius={0.7} color="#0078f5" speed={1.2} />
        <FloatingTorus position={[0, -1, -2]} args={[0.7, 0.3, 16, 32]} color="#0060c4" speed={1} />
        <FloatingCube position={[1.5, -1.5, 0]} size={0.6} color="#64ffda" speed={0.9} />
        <FloatingSphere position={[-1.5, 1, -2]} radius={0.5} color="#0078f5" speed={1.1} />
      </Canvas>
    </div>
  );
};

export default Scene;