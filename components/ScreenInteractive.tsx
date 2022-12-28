import { PerspectiveCamera } from '@react-three/drei';
import { ScreenProps } from '../@types/computers';
import Screen from './Screen';
import SpinningBox from './SpinningBox';

const ScreenInteractive = ({
  invert,
  x = 0,
  y = 1.2,
  ...props
}: ScreenProps & JSX.IntrinsicElements['group']) => {
  return (
    <Screen {...props}>
      <PerspectiveCamera
        makeDefault
        manual
        aspect={1 / 1}
        position={[0, 0, 10]}
      />
      <color attach="background" args={['orange']} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.75} />
      <pointLight position={[-10, -10, -10]} />
      <SpinningBox position={[-3.15, 0.75, 0]} scale={0.5} />
    </Screen>
  );
};

export default ScreenInteractive;
