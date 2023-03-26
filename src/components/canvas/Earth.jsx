import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Earth = ({ isMobile }) => {
  const earth = useGLTF('./earth/scene.gltf')

  return (
    <mesh>
      <ambientLight intensity={0.1} />
      <hemisphereLight intensity={0.3} groundColor="black" />
      <spotLight
        position={[50, 40, -20]}
        penumbra={2}
        intensity={0.5}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={earth.scene}
        scale={isMobile ? 0.02 : 0.024}
        position={isMobile ? [-0.1, -2.15, 0.1] : [-0.1, -2.15, 0.1]}
        rotation={[0.02, -0.45, -0.5]}
      />
    </mesh>
  )
}

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')

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
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas
        style={{
          width: isMobile ? '100vw' : '100vw',
          height: isMobile ? '100vh' : '100vh',
        }}
        frameLoop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={isMobile ? 0.5 : 0.5}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default EarthCanvas
