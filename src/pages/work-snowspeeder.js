import * as React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import * as THREE from 'three'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, BakeShadows, ContactShadows } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Snowspeeder from '../components/snowspeeder'


function Model() {
  const ref = useRef()
  return (
    <Suspense fallback={
null
    }>   
        <group position-y={0} dispose={null}>
          <Snowspeeder scale={0.01} position={[0, 1, 1]} rotation={[0, Math.PI * 1, 0]}/>
        </group>         
  </Suspense>
  )
}

const SnowspeederPage = () => (
  
  <Layout>
    

    <Helmet>
      <body className="body-yellow"></body>
    </Helmet>

<section className="h-screen flex content-end">
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 10, 5], fov: 30 }}> 
      <Model /> 
    <spotLight position={[5, 15, 5]} angle={0.25} penumbra={1} castShadow intensity={1} shadow-bias={-0.0001} />    
    <ambientLight intensity={0.1} />
    <ContactShadows resolution={1024} frames={1} position={[0, -0.5, 0]} scale={10} blur={0.5} opacity={0.5} far={10} />
    <BakeShadows />
    <CameraRig />  
    <EffectComposer multisampling={8}>
      <Bloom intensity={0.4} luminanceThreshold={0.8} luminanceSmoothing={0.01} kernelSize={5} />
    </EffectComposer>         
    <Html distanceFactor={20} className="model-title flex items-end">
      <div>
        <h1 className="display-1 p-24">Snowspeeder</h1>
      </div>  
      </Html>    
  </Canvas>
  </section>
 
  </Layout>
)

function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime
    state.camera.position.lerp(v.set(Math.sin(t / 5), 8, 10 + Math.cos(t / 5)), 0.01)
    state.camera.lookAt(0, 0, 0)
  })
}



export default SnowspeederPage
