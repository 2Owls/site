import * as React from "react"
import * as THREE from "three"
import Layout from "../components/layout"
import { Suspense, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ContactShadows, Html} from '@react-three/drei'
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"
import Model from '../components/hendersons_balance'
import LogoDiamond from "../components/LogoDiamond"
import { StaticImage } from "gatsby-plugin-image"
import FadeUp from "../components/fadeUp"



function Rig({ hover }) {
  const ref = useRef()
  const { mouse } = useThree()
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
        <Model castShadow scale={0.02} position={[0, -2, 0]} rotation={[0, -0.6, 0]}/>
        <mesh scale={10000} position={[100, -2, -1000]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry />
          <meshPhongMaterial color="#DBD3AD" />
        </mesh>     
      </group>
      <ContactShadows />
  </Suspense>
  )
}

const HendersonsPage = () => (
  
  <Layout>

    <Helmet>
      <body className="body-hendersons"></body>
    </Helmet>

<section className="grid grid-cols-1 md:grid-cols-2 h-screen">

    <div className="h-screen/34 lg:h-screen hendersons">

    </div>

    <div className="flex lg:h-screen items-center justify-center order-last lg:order-first bg-owlyellow p-4 lg:p-8 text-center lg:text-left">
      <motion.div className="md:w-2/3"
        initial={{x: -300, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 1}}
      >
        <div className="w-6 ml-1">
          <LogoDiamond/>  
        </div>  
        <br />
        <h1 className="display-2 w-full text-6xl text-owlgray">Hendersons</h1>
        <motion.hr 
          initial={{width: 0}}
          animate={{width: "100%"}}
          transition={{duration: 1.5}}                  
        />   
        <p className="text-owlgray">Rebrand | Logo design | Website Design &amp; Build | Marketing materials | Social media | Direct mail | Marketing strategy</p>
      </motion.div>
    </div>


  </section>   

<section class="section text-owlwhite">
    <div class="grid sm:grid-cols-2">
      <FadeUp className="flex items-center justify-center">
        <div className="w-2/3">
          <h2 className="display-3 border-b py-2">About Hendersons</h2>
          <p>Hendersons were previously called Henderson Claims, however this limited growth into new areas. Their website was old fashioned and the brand had no strong look.</p>
        </div>
      </FadeUp>

      <FadeUp className="flex items-center justify-center">
        <div className="w-2/3">
          <h2 className="display-3 border-b py-2">Our work</h2>
          <p>By shortening to Hendersons, we kept the friendly feel but broadened the possiblities. With the modern address 'trusthendersons', they are ready for the future with a bold new look.</p>
        </div>
      </FadeUp>
        
    </div>      
</section>         


<section class="section section-white">
    <div class="container">

          <div className="w-100 flex justify-center">
          <StaticImage
              src="../images/work-hendersons-logo.svg"
              alt="Hendersons Logo"
              layout="constrained"
              />                
          </div>  

        <h1 className="display-1 text-center mt-16">An SME who found their current brand prevented growth and needed a new direction.</h1>               
    </div>      
</section>

<section class="section bg-owlyellow">
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

<section className="section bg-owlgray">
  <div className="container">
      <div className="w-100 flex justify-center">        
        <StaticImage
            src="../images/hendersons_balls.jpg"
            alt="Homera Logo"
            layout="constrained"
            />                
        </div> 
  </div>  
  
</section>            
   
<section className="section section-white">
    <div className="container">
      <div>
      <StaticImage
            src="../images/work-hendersons-logo-progress.png"
            width={2560}
            quality={95}
            alt="Homera Example 1"
            objectFit="cover"
          />  
      </div>                    
    </div>
</section>               

<section className="section section-testimonial">
    <div className="container">
        <div className="w-1/2 mx-auto">
            <div className="text-right">
                <h1 className="display-1 text-center">"2 Owls helped us through a rebrand, creating the perfect solution to take the company forward as we grew. The website is exceptional and they are always there on the end of the phone to help with anything we need." </h1>
                <hr />                
                <h1 className="display-2">- Hendersons</h1>
            </div>            
        </div>    
    </div>
</section>             



  </Layout>
)

export default HendersonsPage



