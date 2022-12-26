/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.0.9 old_computers.glb --types --transform
Author: Rafael Rodrigues (https://sketchfab.com/RafaelBR873D)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/old-computers-7bb6e720499a467b8e0427451d180063
Title: Old Computers
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

THREE.ColorManagement.legacyMode = false;

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_24: THREE.Mesh;
    Object_26: THREE.Mesh;
    Object_28: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_32: THREE.Mesh;
    Object_34: THREE.Mesh;
    Object_36: THREE.Mesh;
    Object_38: THREE.Mesh;
    Object_40: THREE.Mesh;
    Object_42: THREE.Mesh;
    Object_44: THREE.Mesh;
    Object_46: THREE.Mesh;
    Object_48: THREE.Mesh;
    Object_50: THREE.Mesh;
    Object_52: THREE.Mesh;
    Object_54: THREE.Mesh;
    Object_56: THREE.Mesh;
    Object_58: THREE.Mesh;
    Object_60: THREE.Mesh;
    Object_62: THREE.Mesh;
    Object_64: THREE.Mesh;
    Object_66: THREE.Mesh;
    Object_68: THREE.Mesh;
    Object_70: THREE.Mesh;
    Object_72: THREE.Mesh;
    Object_74: THREE.Mesh;
    Object_76: THREE.Mesh;
    Object_78: THREE.Mesh;
    Object_80: THREE.Mesh;
    Object_82: THREE.Mesh;
    Object_84: THREE.Mesh;
    Object_86: THREE.Mesh;
    Object_88: THREE.Mesh;
    Object_90: THREE.Mesh;
    Object_92: THREE.Mesh;
    Object_94: THREE.Mesh;
    Object_96: THREE.Mesh;
    Object_98: THREE.Mesh;
    Object_100: THREE.Mesh;
    Object_102: THREE.Mesh;
    Object_104: THREE.Mesh;
    Object_106: THREE.Mesh;
    Object_108: THREE.Mesh;
    Object_110: THREE.Mesh;
    Object_112: THREE.Mesh;
    Object_114: THREE.Mesh;
    Object_116: THREE.Mesh;
    Object_118: THREE.Mesh;
    Object_120: THREE.Mesh;
    Object_122: THREE.Mesh;
    Object_124: THREE.Mesh;
    Object_126: THREE.Mesh;
    Object_128: THREE.Mesh;
    Object_130: THREE.Mesh;
    Object_132: THREE.Mesh;
    Object_134: THREE.Mesh;
    Object_136: THREE.Mesh;
    Object_138: THREE.Mesh;
    Object_140: THREE.Mesh;
    Object_142: THREE.Mesh;
    Object_144: THREE.Mesh;
    Object_146: THREE.Mesh;
    Object_148: THREE.Mesh;
    Object_150: THREE.Mesh;
    Object_152: THREE.Mesh;
    Object_154: THREE.Mesh;
    Object_156: THREE.Mesh;
    Object_158: THREE.Mesh;
    Object_160: THREE.Mesh;
    Object_162: THREE.Mesh;
    Object_164: THREE.Mesh;
    Object_166: THREE.Mesh;
    Object_168: THREE.Mesh;
    Object_170: THREE.Mesh;
    Object_172: THREE.Mesh;
    Object_174: THREE.Mesh;
    Object_176: THREE.Mesh;
    Object_178: THREE.Mesh;
    Object_180: THREE.Mesh;
    Object_182: THREE.Mesh;
    Object_184: THREE.Mesh;
    Object_186: THREE.Mesh;
    Object_188: THREE.Mesh;
    Object_190: THREE.Mesh;
    Object_192: THREE.Mesh;
    Object_194: THREE.Mesh;
    Object_196: THREE.Mesh;
    Object_198: THREE.Mesh;
    Object_200: THREE.Mesh;
    Object_202: THREE.Mesh;
    Object_204: THREE.Mesh;
    Object_206: THREE.Mesh;
    Object_207: THREE.Mesh;
    Object_209: THREE.Mesh;
    Object_210: THREE.Mesh;
    Object_212: THREE.Mesh;
    Object_213: THREE.Mesh;
    Object_215: THREE.Mesh;
    Object_216: THREE.Mesh;
    Object_218: THREE.Mesh;
    Object_219: THREE.Mesh;
    Object_221: THREE.Mesh;
    Object_222: THREE.Mesh;
    Object_224: THREE.Mesh;
    Object_225: THREE.Mesh;
    Object_227: THREE.Mesh;
    Object_228: THREE.Mesh;
    Object_230: THREE.Mesh;
    Object_231: THREE.Mesh;
  };
  materials: {
    Texture: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
    Screen: THREE.MeshStandardMaterial;
  };
};

const Computers = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(
    '/computers.glb'
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group position={[0.27, 1.53, -2.61]}>
        <mesh
          geometry={nodes.Object_206.geometry}
          material={materials.Texture}
        />
        <mesh
          geometry={nodes.Object_207.geometry}
          material={materials.Screen}
        />
      </group>
      <group position={[-1.43, 2.5, -1.8]} rotation={[0, 1, 0]}>
        <mesh
          geometry={nodes.Object_209.geometry}
          material={materials.Texture}
        />
        <mesh
          geometry={nodes.Object_210.geometry}
          material={materials.Screen}
        />
      </group>
      <group position={[-2.73, 0.63, -0.52]} rotation={[0, 1.09, 0]}>
        <mesh
          geometry={nodes.Object_212.geometry}
          material={materials.Texture}
        />
        <mesh
          geometry={nodes.Object_213.geometry}
          material={materials.Screen}
        />
      </group>
      <group position={[1.84, 0.38, -1.77]} rotation={[0, -Math.PI / 9, 0]}>
        <mesh
          geometry={nodes.Object_215.geometry}
          material={materials.Texture}
        />
        <mesh
          geometry={nodes.Object_216.geometry}
          material={materials.Screen}
        />
      </group>
      <group
        position={[3.11, 2.15, -0.18]}
        rotation={[0, -0.79, 0]}
        scale={0.81}
      >
        <mesh
          geometry={nodes.Object_218.geometry}
          material={materials.Texture}
        />
        <mesh
          geometry={nodes.Object_219.geometry}
          material={materials.Screen}
        />
      </group>
      <group position={[-3.42, 3.06, 1.3]} rotation={[0, 1.22, 0]} scale={0.9}>
        <mesh
          geometry={nodes.Object_221.geometry}
          material={materials.Texture}
        />
        <mesh
          geometry={nodes.Object_222.geometry}
          material={materials.Screen}
        />
      </group>
      <group position={[-3.9, 4.29, -2.64]} rotation={[0, 0.54, 0]}>
        <mesh
          geometry={nodes.Object_224.geometry}
          material={materials.Texture}
        />
        <mesh
          geometry={nodes.Object_225.geometry}
          material={materials.Screen}
        />
      </group>
      <group
        position={[0.99, 4.29, -4.21]}
        rotation={[0, 0.43, 0]}
        scale={[-1, 1, 1]}
      >
        <mesh
          geometry={nodes.Object_227.geometry}
          material={materials.Texture}
        />
        <mesh
          geometry={nodes.Object_228.geometry}
          material={materials.Screen}
        />
      </group>
      <group position={[4.68, 4.29, -1.56]} rotation={[0, -Math.PI / 3, 0]}>
        <mesh
          geometry={nodes.Object_230.geometry}
          material={materials.Texture}
        />
        <mesh
          geometry={nodes.Object_231.geometry}
          material={materials.Screen}
        />
      </group>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.Texture}
        position={[0.16, 0.79, -1.97]}
        rotation={[-0.54, 0.93, -1.12]}
        scale={0.5}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.Texture}
        position={[-2.79, 0.27, 1.82]}
        rotation={[-1.44, 1.22, 1.43]}
        scale={0.5}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.Texture}
        position={[-5.6, 4.62, -0.03]}
        rotation={[-1.96, 0.16, 1.2]}
        scale={0.5}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.Texture}
        position={[2.62, 1.98, -2.47]}
        rotation={[-0.42, -0.7, -1.85]}
        scale={0.5}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.Texture}
        position={[4.6, 3.46, 1.19]}
        rotation={[-1.24, -0.72, 0.48]}
        scale={0.5}
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials['Material.001']}
        scale={13}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.Texture}
        position={[0.63, 0, -3]}
        rotation={[0, 0.17, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials.Texture}
        position={[-0.19, 0, -2.96]}
        rotation={[0, -0.06, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials.Texture}
        position={[-2.36, 0.32, -2.02]}
        rotation={[0, 0.53, -Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials.Texture}
        position={[-2.29, 1.56, -2.26]}
        rotation={[0, -0.01, -Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials.Texture}
        position={[-2.42, 0.94, -2.25]}
        rotation={[Math.PI, -0.14, -Math.PI / 2]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        geometry={nodes.Object_26.geometry}
        material={materials.Texture}
        position={[-2.19, 2.19, -1.87]}
        rotation={[Math.PI, -0.51, -Math.PI / 2]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        geometry={nodes.Object_28.geometry}
        material={materials.Texture}
        position={[0.35, 2.35, -3.34]}
        rotation={[-0.26, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials.Texture}
        position={[0.18, 2.8, -2.85]}
        rotation={[0.09, 0.15, -0.01]}
      />
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials.Texture}
        position={[-3.53, 0, 0.59]}
        rotation={[Math.PI, -1.09, Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_34.geometry}
        material={materials.Texture}
        position={[-2.9, 0.3, -1.47]}
        rotation={[Math.PI, -1.35, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_36.geometry}
        material={materials.Texture}
        position={[-3.53, 1.53, 0.59]}
        rotation={[0, 0.91, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_38.geometry}
        material={materials.Texture}
        position={[1.89, 0, -1.94]}
        rotation={[0, -0.44, 0]}
        scale={[1.5, 1, 1.5]}
      />
      <mesh
        geometry={nodes.Object_40.geometry}
        material={materials.Texture}
        position={[3.42, 0, 0]}
        rotation={[-Math.PI, 1.13, -Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_42.geometry}
        material={materials.Texture}
        position={[3.22, 0, -0.8]}
        rotation={[0, -1.32, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_44.geometry}
        material={materials.Texture}
        position={[3.53, 1.83, 0.44]}
        rotation={[-Math.PI, 1.32, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_46.geometry}
        material={materials.Texture}
        position={[1.86, 1.61, -1.81]}
        rotation={[0, -Math.PI / 3, 0]}
      />
      <mesh
        geometry={nodes.Object_48.geometry}
        material={materials.Texture}
        position={[4.09, 2.18, 2.41]}
        rotation={[0, -1.55, 1.57]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_50.geometry}
        material={materials.Texture}
        position={[4.26, 0.94, 2.22]}
        rotation={[0, -1, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_52.geometry}
        material={materials.Texture}
        position={[4.31, 1.57, 2.34]}
        rotation={[Math.PI, 1.15, Math.PI / 2]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        geometry={nodes.Object_54.geometry}
        material={materials.Texture}
        position={[3.87, 0.32, 2.35]}
        rotation={[3.14, 1.53, 1.57]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        geometry={nodes.Object_56.geometry}
        material={materials.Texture}
        position={[3.95, 2.49, 1.61]}
        rotation={[0, -Math.PI / 3, 0]}
      />
      <mesh
        geometry={nodes.Object_58.geometry}
        material={materials.Texture}
        position={[-3.79, 0, 1.66]}
        rotation={[0, 1.39, 0]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        geometry={nodes.Object_60.geometry}
        material={materials.Texture}
        position={[-3.79, 1.53, 1.66]}
        rotation={[Math.PI, -1.22, Math.PI]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        geometry={nodes.Object_62.geometry}
        material={materials.Texture}
        position={[-3.69, 0, 2.59]}
        rotation={[0, -1.57, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_64.geometry}
        material={materials.Texture}
        position={[-5.36, 2.18, 0.81]}
        rotation={[0, 0.77, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_66.geometry}
        material={materials.Texture}
        position={[-5.61, 0.94, 0.82]}
        rotation={[0, 1.32, 1.57]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_68.geometry}
        material={materials.Texture}
        position={[-5.56, 1.57, 0.69]}
        rotation={[-Math.PI, -1.17, Math.PI / 2]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        geometry={nodes.Object_70.geometry}
        material={materials.Texture}
        position={[-5.26, 0.32, 1.01]}
        rotation={[-Math.PI, -0.79, Math.PI / 2]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        geometry={nodes.Object_72.geometry}
        material={materials.Texture}
        position={[-5.47, 2.79, 0.74]}
        rotation={[Math.PI, -1.16, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_74.geometry}
        material={materials.Texture}
        position={[-5.39, 4.03, 0.99]}
        rotation={[Math.PI, -0.61, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_76.geometry}
        material={materials.Texture}
        position={[-5.29, 3.41, 0.89]}
        rotation={[0, 0.76, Math.PI / 2]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        geometry={nodes.Object_78.geometry}
        material={materials.Texture}
        position={[-5.7, 4.66, 0.72]}
        rotation={[0, 1.13, Math.PI / 2]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        geometry={nodes.Object_80.geometry}
        material={materials.Texture}
        position={[-5.28, 0, -2.33]}
        rotation={[0, 0.75, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_82.geometry}
        material={materials.Texture}
        position={[-5.95, 0, -0.64]}
        rotation={[0, 0.95, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_84.geometry}
        material={materials.Texture}
        position={[-5.49, 0, -1.38]}
        rotation={[-Math.PI, -0.99, -Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_86.geometry}
        material={materials.Texture}
        position={[-4.48, 0, -2.75]}
        rotation={[-Math.PI, -0.57, -Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_88.geometry}
        material={materials.Texture}
        position={[-3.01, 0, -3.79]}
        rotation={[0, 0.6, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_90.geometry}
        material={materials.Texture}
        position={[-3.72, 0, -2.89]}
        rotation={[0, 0.64, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_92.geometry}
        material={materials.Texture}
        position={[-2.08, 0, -4.32]}
        rotation={[-Math.PI, -0.6, -Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_94.geometry}
        material={materials.Texture}
        position={[-1.02, 0, -4.49]}
        rotation={[0, 0.31, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_96.geometry}
        material={materials.Texture}
        position={[-0.08, 0, -5.03]}
        rotation={[-Math.PI, -0.04, -Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_98.geometry}
        material={materials.Texture}
        position={[-5.31, 1.83, -1.41]}
        rotation={[0, 1.06, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_100.geometry}
        material={materials.Texture}
        position={[-4.18, 1.83, -3.06]}
        rotation={[-Math.PI, -0.46, -Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_102.geometry}
        material={materials.Texture}
        position={[-1.76, 1.83, -3.6]}
        rotation={[0, -1.16, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_104.geometry}
        material={materials.Texture}
        position={[-0.25, 1.83, -5.54]}
        rotation={[0, 1.55, 1.57]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_106.geometry}
        material={materials.Texture}
        position={[-4.19, 1.84, -2.77]}
        rotation={[0, 0.66, Math.PI / 2]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        geometry={nodes.Object_108.geometry}
        material={materials.Texture}
        position={[-5.28, 2.14, -2.33]}
        rotation={[-Math.PI, -0.75, -Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_110.geometry}
        material={materials.Texture}
        position={[-5.95, 2.14, -0.64]}
        rotation={[-Math.PI, -0.95, -Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_112.geometry}
        material={materials.Texture}
        position={[-5.49, 2.14, -1.38]}
        rotation={[0, 0.99, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_114.geometry}
        material={materials.Texture}
        position={[-4.48, 2.14, -2.75]}
        rotation={[0, 0.57, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_116.geometry}
        material={materials.Texture}
        position={[-3.01, 2.14, -3.79]}
        rotation={[-Math.PI, -0.6, -Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_118.geometry}
        material={materials.Texture}
        position={[-3.73, 2.14, -3.1]}
        rotation={[-Math.PI, -0.64, -Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_120.geometry}
        material={materials.Texture}
        position={[-2.08, 2.14, -4.32]}
        rotation={[0, 0.6, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_122.geometry}
        material={materials.Texture}
        position={[-1.02, 2.14, -4.49]}
        rotation={[-Math.PI, -0.31, -Math.PI]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_124.geometry}
        material={materials.Texture}
        position={[-0.08, 2.14, -5.03]}
        rotation={[0, 0.04, 0]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_126.geometry}
        material={materials.Texture}
        position={[-5.31, 3.98, -1.41]}
        rotation={[0, 1.06, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_128.geometry}
        material={materials.Texture}
        position={[-4.18, 3.98, -3.06]}
        rotation={[-Math.PI, -0.46, -Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_130.geometry}
        material={materials.Texture}
        position={[-1.17, 3.98, -4.45]}
        rotation={[0, 0.17, Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_132.geometry}
        material={materials.Texture}
        position={[-0.94, 3.98, -4.66]}
        rotation={[Math.PI, 0.02, -Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        geometry={nodes.Object_134.geometry}
        material={materials.Texture}
        position={[-4.19, 3.98, -2.77]}
        rotation={[0, 0.66, Math.PI / 2]}
        scale={[-1.52, 1.52, 1.52]}
      />
      <mesh
        geometry={nodes.Object_136.geometry}
        material={materials.Texture}
        position={[-1.1, 4.29, -4.43]}
        rotation={[0, 0.36, 0]}
      />
      <mesh
        geometry={nodes.Object_138.geometry}
        material={materials.Texture}
        position={[-5.25, 4.29, -1.47]}
        rotation={[0, 1.25, 0]}
      />
      <mesh
        geometry={nodes.Object_140.geometry}
        material={materials.Texture}
        position={[5.53, 2.18, 0.17]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_142.geometry}
        material={materials.Texture}
        position={[5.79, 0.94, 0.18]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_144.geometry}
        material={materials.Texture}
        position={[5.74, 1.57, 0.05]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_146.geometry}
        material={materials.Texture}
        position={[5.43, 0.32, 0.37]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_148.geometry}
        material={materials.Texture}
        position={[5.65, 2.79, 0.11]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_150.geometry}
        material={materials.Texture}
        position={[5.56, 4.03, 0.35]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_152.geometry}
        material={materials.Texture}
        position={[5.46, 3.41, 0.26]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_154.geometry}
        material={materials.Texture}
        position={[5.87, 4.66, 0.08]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_156.geometry}
        material={materials.Texture}
        position={[4.86, 0, -2.54]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_158.geometry}
        material={materials.Texture}
        position={[5.53, 0, -0.85]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_160.geometry}
        material={materials.Texture}
        position={[5.06, 0, -1.6]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_162.geometry}
        material={materials.Texture}
        position={[4.05, 0, -2.96]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_164.geometry}
        material={materials.Texture}
        position={[2.59, 0, -4]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_166.geometry}
        material={materials.Texture}
        position={[3.29, 0, -3.1]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_168.geometry}
        material={materials.Texture}
        position={[1.66, 0, -4.54]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_170.geometry}
        material={materials.Texture}
        position={[0.59, 0, -4.7]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_172.geometry}
        material={materials.Texture}
        position={[4.89, 1.83, -1.62]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_174.geometry}
        material={materials.Texture}
        position={[3.75, 1.83, -3.28]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_176.geometry}
        material={materials.Texture}
        position={[1.33, 1.83, -3.82]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_178.geometry}
        material={materials.Texture}
        position={[3.77, 1.84, -2.98]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_180.geometry}
        material={materials.Texture}
        position={[4.86, 2.14, -2.54]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_182.geometry}
        material={materials.Texture}
        position={[5.53, 2.14, -0.85]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_184.geometry}
        material={materials.Texture}
        position={[5.06, 2.14, -1.6]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_186.geometry}
        material={materials.Texture}
        position={[4.05, 2.14, -2.96]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_188.geometry}
        material={materials.Texture}
        position={[2.59, 2.14, -4]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_190.geometry}
        material={materials.Texture}
        position={[3.3, 2.14, -3.31]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_192.geometry}
        material={materials.Texture}
        position={[1.66, 2.14, -4.54]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_194.geometry}
        material={materials.Texture}
        position={[0.59, 2.14, -4.7]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_196.geometry}
        material={materials.Texture}
        position={[4.89, 3.98, -1.62]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_198.geometry}
        material={materials.Texture}
        position={[3.75, 3.98, -3.28]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_200.geometry}
        material={materials.Texture}
        position={[0.75, 3.98, -4.66]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_202.geometry}
        material={materials.Texture}
        position={[3.77, 3.98, -2.98]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Object_204.geometry}
        material={materials.Texture}
        position={[3.2, 4.29, -3.09]}
        rotation={[0, -0.56, 0]}
        scale={[-1, 1, 1]}
      />
    </group>
  );
};
export default Computers;

useGLTF.preload('/computers.glb');