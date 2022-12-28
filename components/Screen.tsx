import { RenderTexture, useGLTF } from '@react-three/drei';
import { GLTFResult, ScreenProps } from '../@types/computers';

const Screen = ({
  frame,
  panel,
  children,
  ...props
}: ScreenProps & JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(
    '/assets/3d-models/computers.glb'
  ) as unknown as GLTFResult;

  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes[frame].geometry}
        material={materials.Texture}
      />
      <mesh geometry={nodes[panel].geometry}>
        <meshBasicMaterial toneMapped={false}>
          <RenderTexture width={512} height={512} attach="map" anisotropy={16}>
            {children}
          </RenderTexture>
        </meshBasicMaterial>
      </mesh>
    </group>
  );
};

export default Screen;
