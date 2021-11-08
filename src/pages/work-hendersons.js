import * as React from "react"
import * as THREE from "three"
import Layout from "../components/layout"
import { Suspense, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html  } from '@react-three/drei'
import { Helmet } from "react-helmet"
import Model from '../components/hendersons_balance'
import LogoDiamond from "../components/LogoDiamond"
import { StaticImage } from "gatsby-plugin-image"



function Rig({ hover }) {
  const ref = useRef()
  const { mouse, clock } = useThree()
  const [size, set] = useState(0.5)
  const [hidden, setVisible] = useState(false)
  const [rEuler, rQuaternion] = useMemo(() => [new THREE.Euler(), new THREE.Quaternion()], [])
  useFrame(() => {
    if (ref.current) {
      rEuler.set((-mouse.y * Math.PI) / 18, (mouse.x * Math.PI) / 12, 0)
      ref.current.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.2)
    }
  })
  return (
    <Suspense fallback={
      <Html center className="loader">
        <h1 className="display-1">LOADING</h1>
      </Html>
    }>   
      <group ref={ref} >    
        <Model castShadow scale={0.02} position={[0, -2, 0]} rotation={[0, 2.6, 0]}/>
        <Html
          className="floating-text"
          distanceFactor={3}
          position={[0.5, 2.5, 0]}
          transform>
                  <div className="w-3">
                    <LogoDiamond /> 
                  </div>  
                <br />
                <h1 className="display-1 text-6xl text-owlgreen-dark">Hendersons</h1>
                <hr />    
                <p className="text-owlwhite">Brand identity | Logo design | Website | Marketing materials | Social media | Press releases | Direct marketing | Email campaigns | Marketing strategy</p>
        </Html>   
        <mesh scale={10000} position={[100, -2.1, -1000]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry />
          <meshPhongMaterial color="#F5CB5C" />
        </mesh>     
      </group>
  </Suspense>
  )
}

const IndexPage = () => (
  
  <Layout>

    <Helmet>
      <body className="body-hendersons"></body>
    </Helmet>

    <div className="h-screen">
        <Canvas shadows camera={{ position: [0, 10, 20], fov: 15, near: 1, far: 1000, zoom: 0.5}}>  
        <color attach="background" args={['#F5CB5C']} />
        <fog attach="fog" args={['#F5CB5C', 10, 50]} /> 
        <spotLight
            castShadow
            position={[0, 15, 15]}  
            shadow-mapSize-width={4096}
            shadow-mapSize-height={4096}                  
            penumbra={2}
            intensity={0.5}
          />      
          <spotLight
            castShadow
            position={[-5, 20, 10]}
            shadow-mapSize-width={4096}
            shadow-mapSize-height={4096}                         
            intensity={0.5}
          />             
            <Rig />  
        </Canvas>
    </div>      


<section class="section">
    <div class="container">

        <div className="w-100 flex justify-center">
          <StaticImage
            src="../images/work-hendersons-logo.svg"
            width={2560}
            quality={95}
            alt="Homera Logo"
            objectFit="cover"
            />          
        </div>

        <div class="flex">
          <StaticImage
            src="../images/work-hendersons-logo-progress.png"
            width={2560}
            quality={95}
            alt="Homera Example 1"
            objectFit="cover"
          />            
        </div>                              
        <div className="grid grid-cols-2 gap-32 pt-8">
          <div>
            <h1>The Brief:</h1>
            <hr />         
            <p className="lead work-p">Creation of a new B2B brand which would communicate the twin objectives of the company: improving homes for tenants and reducing costs for providers.</p>
          </div> 
          <div>
            <h1>The Concept:</h1>
            <hr />
            <p className="lead work-p">We wanted the brand to reflect the company mission statement of turning houses into homes. This needed to be shown creatively with a strong, professional feel. Warm colours were used, along with images of blueprints and building blocks transitioning to cosy homes and interiors.</p>
          </div>         
        </div>     
  </div>
</section>  
            
   
<section className="section">
    <div className="container">
      <div>
        <StaticImage
          src="../images/work-homera-logo-progress.svg"
          width={2560}
          quality={95}
          alt="Homera Logo"
          objectFit="cover"
        />
      </div>                    
    </div>
</section>       
      
      
      
      
<section className="section">
    <div className="container">  
        <div className="text-center w-100 md:w-1/2 mx-auto">
            <div>
                <h1>The Solution:</h1>
                <hr/>
                <p className="lead work-p">The client had a name but no more. From that, the logo was created then extended out into a full brand identity, using striking imagery. This was then brought to life on a dynamic, informative website and through various other routes to the audience.</p>                
            </div>    
        </div>           
        <div className="w-50 flex justify-center">
            <StaticImage
            src="../images/tile-homera-balloon.png"
            width={500}
            quality={95}
            alt="Homera Example 3"
            objectFit="cover"
          />                
      </div>            
      <div className="text-center w-100 md:w-1/2 mx-auto">       
            <h1>Ongoing:</h1>
            <hr />
            <p class="lead">The marketing strategy was divised to ensure all objectives were being met through multiple channels and this is under constant review to ensure ROI and all targets are met.</p>   
      </div>            
    </div>
</section>      

<section className="section section-testimonial">
    <div className="container">
        <div className="w-1/2 mx-auto">
            <div className="text-right">
                <h1 className="display-1 text-center">"2 Owls listened to everything we wanted, then used their vision to create a brand stronger than we could have imagined. They fit perfectly with our ethos and helped us to engage with our target client from the outset" </h1>
                <hr />                
                <h1 className="display-2">- Homera Ltd</h1>
            </div>            
        </div>    
    </div>
</section>             



  </Layout>
)

export default IndexPage
