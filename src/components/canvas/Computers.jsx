import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  let scale = 0.55
  let position = [0, -3.3, -1]

  if (isTablet) {
    scale = 0.45
    position = [0, -3.5, -0.4]
  } else if (isMobile) {
    scale = 0.3
    position = [0, -3, -0.3]
  }

  return (
    <mesh>
      <ambientLight intensity={0.1} />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mobileQuery = window.matchMedia('(max-width: 640px)')
    const tabletQuery = window.matchMedia('(max-width: 1024px)')

    // Set initial values
    setIsMobile(mobileQuery.matches)
    setIsTablet(!mobileQuery.matches && tabletQuery.matches)

    // Define callback functions to handle changes
    const handleMobileQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    const handleTabletQueryChange = (event) => {
      setIsTablet(!mobileQuery.matches && event.matches)
    }

    // Add listeners for media query changes
    mobileQuery.addEventListener('change', handleMobileQueryChange)
    tabletQuery.addEventListener('change', handleTabletQueryChange)

    // Remove listeners when the component is unmounted
    return () => {
      mobileQuery.removeEventListener('change', handleMobileQueryChange)
      tabletQuery.removeEventListener('change', handleTabletQueryChange)
    }
  }, [])

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas
        style={{
          width: '100vw',
          height: '100vh',
        }}
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate={true}
            autoRotateSpeed={isMobile ? 1 : 1}
          />
          <Computers isMobile={isMobile} isTablet={isTablet} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default ComputersCanvas
