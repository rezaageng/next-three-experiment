import { PerspectiveCamera, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { IText, ScreenProps } from '../@types/computers';
import Screen from './Screen';

const ScreenText = ({
  invert,
  x = 0,
  y = 1.2,
  ...props
}: ScreenProps & JSX.IntrinsicElements['group']) => {
  const ref = useRef<null | IText>(null);

  const rand = Math.random() * 10000;

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.x =
      x + Math.sin(rand + state.clock.elapsedTime / 2) * 4;
  });

  return (
    <Screen {...props}>
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
        fontSize={3}
        font="/assets/fonts/PlayfairDisplay.ttf"
        letterSpacing={0}
        color={!invert ? 'black' : '#35c19f'}
      >
        kaizinn.
      </Text>
    </Screen>
  );
};
export default ScreenText;
