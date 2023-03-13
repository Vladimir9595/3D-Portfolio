import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 12,
          color: '#373737',
          fontWeight: 800,
          marginTop: 180,
          marginLeft: -22,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader
