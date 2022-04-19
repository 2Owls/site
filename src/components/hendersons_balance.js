/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGLTF} from '@react-three/drei'
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/hendersons_balance.glb')

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 102.66, 0]}>
        <group position={[61.93, 33.77, 0.69]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.smallSphere1.geometry}
            material={nodes.smallSphere1.material}
            position={[68.05, 31.8, 0.68]}
            rotation={[0, Math.PI / 9, 0]}
           >
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.smallSphere1.geometry}
            material={nodes.smallSphere1.material}
            position={[41.27, -7.33, 10.43]}
            rotation={[0, Math.PI / 9, 0]}
            >
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.smallSphere1.geometry}
            material={nodes.smallSphere1.material}
            position={[90.98, -7.33, 18.69]}
            rotation={[0, Math.PI / 9, 0]}
            >
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.smallSphere1.geometry}
            material={nodes.smallSphere1.material}
            position={[73.55, -7.33, -28.43]}
            >
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MainSphere.geometry}
            material={nodes.MainSphere.material}
            position={[-211.93, 17.38, -0.69]}
            >
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MainSphere.geometry}
            material={nodes.MainSphere.material}
            position={[-61.93, -86.42, -0.69]}
            >
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plank.geometry}
            material={nodes.plank.material}
            position={[-61.93, -34.43, -0.69]}
            >
          </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/hendersons_balance.glb')