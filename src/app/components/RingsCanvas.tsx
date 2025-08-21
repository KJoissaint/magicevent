import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

function Rings({ scrollY }: { scrollY: number }) {
  const ref = useRef<any>(null);
  const { scene } = useGLTF('/rings.glb'); // we'll need to adjust the path as needed

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scrollY * 0.001; // we'll need to adjust the sensitivity as needed as well
    }
  });

  return <primitive object={scene} ref={ref} />;
}

export default function RingsCanvas({ scrollY }: { scrollY: number }) {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <Rings scrollY={scrollY} />
    </Canvas>
  );
}
