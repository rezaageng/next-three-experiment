import {
  PerspectiveCamera,
  RenderTexture,
  Text,
  useGLTF,
} from '@react-three/drei';
import { useFrame, Vector3 } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFResult } from '../@types/computers';

interface Props {
  frame: keyof GLTFResult['nodes'];
  panel: keyof GLTFResult['nodes'];
  invert: boolean;
  x: number;
  y: number;
}

interface IText {
  position: Vector3;
}

const Screen = ({ frame, panel, invert, x = 0, y = 1.2 }: Props) => {
  const { nodes, materials } = useGLTF(
    '/computers.glb'
  ) as unknown as GLTFResult;

  const ref = useRef<null | IText>(null);
  const rand = Math.random() * 10000;
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.x =
      x + Math.sin(rand + state.clock.elapsedTime / 4) * 8;
  });

  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes[frame].geometry}
        material={materials.Texture}
      />
      <mesh geometry={nodes[panel].geometry} />
      <meshBasicMaterial toneMapped={false}>
        <RenderTexture width={512} height={512} attach="map" anisotropy={16}>
          <PerspectiveCamera
            makeDefault
            manual
            aspect={1 / 1}
            position={[0, 0, 15]}
          />
          <color attach="background" args={[invert ? 'black' : '#35c19f']} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <Text
            position={[x, y, 0]}
            ref={ref}
            fontSize={4}
            letterSpacing={-0.1}
            color={!invert ? 'black' : '#35c19f'}
          >
            Poimandres.
          </Text>
        </RenderTexture>
      </meshBasicMaterial>
    </group>
  );
};
export default Screen;
