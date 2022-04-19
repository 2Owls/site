import * as React from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"
import LogoDiamond from "../components/LogoDiamond"
import { StaticImage } from "gatsby-plugin-image"
import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { PresentationControls, Html} from '@react-three/drei'
import Room from '../components/homera-room'
import FadeUp from "../components/fadeUp"

function Scene() {
  const ref = useRef()
  return (
    <Suspense fallback={
      <Html center className="loader">
        <h1 className="display-1">LOADING</h1>
      </Html>
    }>   
        <group position-y={0} dispose={null}>
          <Room scale={1.6} position={[-0.5, -0.18, 0]} rotation={[0, Math.PI / 5, 0]}/>
        </group>         
  </Suspense>
  )
}


const HomeraPage = () => (
  
  <Layout>

    <Helmet>
      <body className="body-homera"></body>
    </Helmet>

<section className="grid grid-cols-1 lg:grid-cols-2">

    <div className="h-screen/34 lg:h-screen">
        <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 2, 12] }}>
          <color attach="background" args={['#e5c3d1']} />
          <directionalLight position={[0, 5, 5]} intensity={3}/>
          <PresentationControls global rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]} snap={true}>
              <Scene />
          </PresentationControls>
          <EffectComposer multisampling={8}>
            <Bloom intensity={0.4} luminanceThreshold={0.8} luminanceSmoothing={0.01} kernelSize={5} />
          </EffectComposer>          
        </Canvas>
    </div>

    <div className="flex lg:h-screen items-center justify-center order-last lg:order-first bg-owlwhite p-4 lg:p-8 text-center lg:text-left">
      <motion.div className="md:w-2/3"
        initial={{x: -300, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 1}}
      >
        <div className="w-4 my-8 mx-auto lg:mx-8"><LogoDiamond/></div>  
        <h1 className="display-1 w-full text-7xl xl:text-8xl text-owlgreen-dark">Homera</h1>
        <motion.hr 
          initial={{width: 0}}
          animate={{width: "100%"}}
          transition={{duration: 1.5}}                  
        />   
        <p className="text-owlgray">Brand identity | Logo design | Website | Marketing materials | Social media | Press releases | Direct marketing | Email campaigns | Marketing strategy</p>
      </motion.div>
    </div>
    
</section>          

<section class="section text-owlwhite">
    <div class="grid sm:grid-cols-2">
      <FadeUp className="flex items-center justify-center">
        <div className="w-2/3">
          <h2 className="display-3 border-b py-2">About Homera</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </FadeUp>

      <FadeUp className="flex items-center justify-center">
        <div className="w-2/3">
          <h2 className="display-3 border-b py-2">Our work</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </FadeUp>
        
    </div>      
</section>  

<section class="section bg-homerapurple">
    <div class="container">

        <div className="w-100 flex justify-center">
          <StaticImage
            src="../images/homera-logo.svg"
            alt="Homera Logo"
            layout="constrained"
            />          
        </div>

        <h1 className="display-1 text-center">The creation of a new brand wanting to make an impact in the industry.</h1>
        </div>      
</section> 

<section class="section bg-owlwhite">
  <div className="container">
    <div className="flex items-center justify-center">            
        <FadeUp className="sm:w-2/3 p-12">
        <StaticImage
          src="../images/homera_blueprint.png"  
          alt="Homera Logo Blueprint"
          objectFit="constrain"
        />
        </FadeUp>  
    </div>  
  </div>
</section>  
            
   
<section className="section">
    <div className="container">

    <div class="flex">
          <StaticImage
            src="../images/tile-homera-cavity.jpg"
            alt="Homera Example 1"
            layout="constrained"
          />
          <StaticImage
            src="../images/tile-homera-box.jpg"
            alt="Homera Example 2"
            layout="constrained"
          />
          <StaticImage
            src="../images/tile-homera-house.jpg"
            alt="Homera Example 3"
            layout="constrained"
          />             
        </div>                  
    </div>
</section>       
      
<section class="section bg-owlwhite">
  <div className="container">
    <div className="flex items-center justify-center">            
        <FadeUp className="w-50 sm:w-2/3 p-12">
        <StaticImage
            src="../images/tile-homera-balloon.png"
            alt="Homera Balloon"
            layout="constrained"
          />  
        </FadeUp>  
    </div>  
  </div>
</section>          

<section className="section section-testimonial">
    <div className="container">
        <div className="w-full md:w-1/2 mx-auto">
            <div className="text-right">
                <h1 className="display-1 text-center">"2 Owls listened to everything we wanted, then used their vision to create a brand stronger than we could have imagined. They fit perfectly with our ethos and helped us to engage with our target client from the outset" </h1>
                <hr />                
                <h1 className="text-4xl">- Homera Ltd</h1>
            </div>            
        </div>    
    </div>
</section>             



  </Layout>
)

export default HomeraPage
