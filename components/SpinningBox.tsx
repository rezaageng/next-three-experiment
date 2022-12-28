import { useCursor } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh } from 'three';

const SpinningBox = ({ scale, ...props }: JSX.IntrinsicElements['mesh']) => {
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useCursor(isHover);

  const ref = useRef<null | Mesh>(null);

  useFrame((_state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x = ref.current.rotation.y += delta;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? (scale as number) * 1.4 : (scale as number) * 1.2}
      onPointerOver={() => setIsHover(true)}
      onPointerOut={() => setIsHover(false)}
    >
      <boxGeometry />
      <meshStandardMaterial color={isHover ? 'hotpink' : 'indianred'} />
    </mesh>
  );
};
export default SpinningBox;
