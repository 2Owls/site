/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGLTF} from '@react-three/drei'
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { motion } from "framer-motion/three"


export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/owl_lisa.glb')

  const [colorDictionary] = useLoader(TextureLoader, [
    '/tex_dictionary.jpg',
  ])
  colorDictionary.mapping = THREE.UVMapping 
  colorDictionary.encoding = THREE.sRGBEncoding
  colorDictionary.minFilter = THREE.LinearFilter
  colorDictionary.magFilter = THREE.LinearFilter
  colorDictionary.wrapS = colorDictionary.wrapT = THREE.RepeatWrapping  
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 44.05, 108.86]} rotation={[0, 0, 0]}>
        <group position={[0.7, -43.94, -109.24]} rotation={[0, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.paper.geometry}
            material={materials.paper}
            position={[-63.49, 42.05, 99.19]}
            rotation={[0.02, -0.75, -0.02]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.paper1.geometry}
            material={materials['paper.1']}
            position={[-64.67, 41.55, 98.08]}
            rotation={[0.02, -0.57, -0.02]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.paper_top.geometry}
            material={materials.paper_top}
            position={[-63.48, 42.59, 99.21]}
            rotation={[0.02, -0.57, -0.02]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.calendar.geometry}
            material={materials.calendar}
            position={[115.19, 59.09, 33.13]}
            rotation={[0, -0.69, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pen.geometry}
            material={materials.pen}
            position={[-89.71, 43.26, 79.74]}
            rotation={[-0.01, -1.28, -0.04]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pen1.geometry}
            material={materials['pen.1']}
            position={[-88.31, 43.11, 84.13]}
            rotation={[0, -1.2, -0.04]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp.geometry}
            material={materials.lamp}
            position={[-60.74, 132.32, -81.68]}
            rotation={[0, -0.34, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mug.geometry}
            material={materials.mug}
            position={[77.86, 53.54, 88.63]}
            rotation={[0, 1.23, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.desk.geometry}
            material={materials.desk}
            position={[-0.12, 34.68, 0.37]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cactus.geometry}
            material={materials.cactus}
            position={[52.88, 100.75, -95.21]}
            rotation={[0, 0.01, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cactus_small.geometry}
            material={materials.cactus_small}
            position={[79.32, 90.91, -71.02]}
            rotation={[0, 0.01, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.book1.geometry}
            material={nodes.book1.material}
            position={[-123.28, 70.48, 23.87]}
            rotation={[0, 0.2, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.book1_1.geometry}
            material={nodes.book1_1.material}
            position={[-120.6, 73.14, 43.94]}
            rotation={[0, 0.17, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.typewriter.geometry}
            material={materials.typewriter}
            position={[1.81, 51.55, 120.13]}
            rotation={[0, 0.02, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cactus_small1.geometry}
            material={materials['cactus_small.1']}
            position={[104.22, 89.44, -75.12]}
            rotation={[0, 1.06, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.owl.geometry}
            material={materials.owl}
            position={[-0.12, 46.85, 40.11]}
            rotation={[0, 0.01, 0]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/owl_lisa.glb')

