import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei'

import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 600px)')

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <Float speed={2.5} rotationIntensity={0.5} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={isMobile ? 1.8 : 2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameLoop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas
