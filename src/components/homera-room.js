/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture} from '@react-three/drei'
import { motion } from "framer-motion"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/homera_room.glb')
  const [texture1, texture2] = useTexture(['/homera_wallpaper_texture.jpeg', '/homera_wallpaper_texture.jpeg'])

  return (

    <group ref={group} {...props} dispose={null}>
      <group position={[10.42, -26.81, -1.37]} rotation={[0, 1.57, 0]}>
        <group position={[0, 0, 0]}>
          <group position={[-11.16, 55.02, -70.55]} rotation={[0.01, -1.57, 0]}
            initial={{x: -20}}
            animate={{x: 0}}
            transition={{duration: 1}}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.picture.geometry}
              material={nodes.picture.material}
              position={[0, 0, 0]}
              >
              <meshStandardMaterial color="#9AE19D" />    
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.picture_frame_inner.geometry}
              material={nodes.picture_frame_inner.material}
              position={[0, 0, 0]}
              >
              <meshStandardMaterial color="#fff" />    
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.picture_frame_frame.geometry}
              material={nodes.picture_frame_frame.material}
              position={[0, 0, 0]}
              >
              <meshStandardMaterial color="#9AE19D" />    
            </mesh>
          </group>
          <group position={[47, 55.02, -70.55]} rotation={[0.01, -1.57, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.picture.geometry}
              material={nodes.picture.material}
              position={[0, 0, 0]}
              >
              <meshStandardMaterial color="#9AE19D" />    
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.picture_frame_inner.geometry}
              material={nodes.picture_frame_inner.material}
              position={[0, 0, 0]}
              >
              <meshStandardMaterial color="#fff" />    
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.picture_frame_frame.geometry}
              material={nodes.picture_frame_frame.material}
              position={[0, 0, 0]}
              >
              <meshStandardMaterial color="#9AE19D" />    
            </mesh>
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_lamp_r.geometry}
            material={nodes.wall_lamp_r.material}
            position={[46.98, 101.11, -74.32]}
            rotation={[Math.PI, -1.57, 0]}
            >
            <meshStandardMaterial color="#537A5A" />    
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp_lightbulb.geometry}
            material={nodes.lamp_lightbulb.material}
            position={[50.54, 98.39, -67.21]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            >
            <meshStandardMaterial color="#fff" />    
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_lamp_l.geometry}
            material={nodes.wall_lamp_l.material}
            position={[-10.51, 101.11, -74.32]}
            rotation={[Math.PI, -1.57, 0]}
            >
            <meshStandardMaterial color="#537A5A" />    
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp_lightbulb.geometry}
            material={nodes.lamp_lightbulb.material}
            position={[-6.99, 98.39, -67.21]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            >
            <meshStandardMaterial color="#fff" />    
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp_lightbulb.geometry}
            material={nodes.lamp_lightbulb.material}
            position={[-41.89, 43.44, 70.81]}
            rotation={[0, -1.57, 0]}
            >
            <meshStandardMaterial color="#fff" />    
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp_shade.geometry}
            material={nodes.lamp_shade.material}
            position={[-41.91, 43.14, 70.82]}
            rotation={[0, -1.57, 0]}
            >
            <meshStandardMaterial color="#9AE19D" />    
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp.geometry}
            material={nodes.lamp.material}
            position={[-41.9, -2.21, 70.82]}
            rotation={[0, -1.57, 0]}
            >
            <meshStandardMaterial color="#333" />    
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.smart_meter.geometry}
            material={nodes.smart_meter.material}
            position={[86.11, -10.42, -52.22]}
            rotation={[0, -0.87, -1.4]}
            >
            <meshStandardMaterial color="#fff" />    
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.curtain_rail.geometry}
            material={nodes.curtain_rail.material}
            position={[-60.72, 89.65, 9.31]}
            >
            <meshStandardMaterial color="#333333" />    
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sofa.geometry}
            material={nodes.sofa.material}
            position={[17.77, -11.29, -56.18]}
            rotation={[0, -1.57, 0]}
            >
            <meshStandardMaterial color="#537A5A" />    
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cushion_left.geometry}
            material={nodes.cushion_left.material}
            position={[45.36, -5.48, -56.96]}
            rotation={[-1.9, 0.14, -0.21]}
            >
            <meshStandardMaterial color="#29ABE2" />  
          </mesh>   
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cushion_left.geometry}
            material={nodes.cushion_left.material}
            position={[-10.6, -5.48, -54.48]}
            rotation={[-2.07, -0.21, 0.41]}
            >
            <meshStandardMaterial color="#29ABE2" />  
          </mesh>   
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.window_top.geometry}
            material={nodes.window_top.material}
            position={[-74.32, 66.53, 8.72]}
            >
            <meshStandardMaterial color="#537A5A" />    
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.window_bottom.geometry}
            material={nodes.window_bottom.material}
            position={[-69.46, 26.27, 8.72]}
            >
            <meshStandardMaterial color="#537A5A" />    
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light_fitting.geometry}
            material={nodes.light_fitting.material}
            position={[8.67, 104.68, -0.18]}
            >
            <meshStandardMaterial color="#fff" />  
          </mesh>  
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rug.geometry}
            material={nodes.rug.material}
            position={[17.85, -34.3, 8.51]}
            >
            <meshStandardMaterial color="#29ABE2" />  
          </mesh>  
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tv_stand.geometry}
            material={nodes.tv_stand.material}
            position={[17.91, -27.74, 69.38]}
            >
            <meshStandardMaterial color="#A36840" />    
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tv.geometry}
            material={nodes.tv.material}
            position={[17.89, -2.95, 69.31]}
            >
            <meshStandardMaterial color="#333333" />    
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.radiator.geometry}
            material={nodes.radiator.material}
            position={[-58.84, -25.79, 36.87]}
            >
            <meshStandardMaterial color="#fff" />    
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.table.geometry}
            material={nodes.table.material}
            position={[-1.37, 26.81, -10.42]}
            rotation={[0, -1.57, 0]}
            >
            <meshStandardMaterial color="#A36840" />    
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.floor.geometry}
            material={nodes.floor.material}
            position={[8.96, -43.61, -0.18]}
            >
            <meshStandardMaterial color="#fff" />    
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.room_2.geometry}
            material={nodes.room_2.material}
            position={[-71.66, 36.72, -0.18]}
            >
            <meshStandardMaterial color="#fff"/>
            </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.wallpaper.geometry}
            material={nodes.wallpaper.material}
            position={[-71.66, 36.72, -0.18]}
            >
          <meshStandardMaterial map={texture1} attach="material" /> 
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.outer_wall.geometry}
            material={nodes.outer_wall.material}
            position={[-1.37, 26.81, -10.42]}
            rotation={[0, -1.57, 0]}
            >
            <meshStandardMaterial color="#7D82B8" />    
          </mesh>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.curtain.geometry}
        material={nodes.curtain.material}
        position={[55.63, 15.31, 58.56]}
        rotation={[-0.06, 0.02, 0]}
        >
          <meshStandardMaterial color="#537A5A" />    
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.curtain.geometry}
        material={nodes.curtain.material}
        position={[-14.93, 15.31, 57.45]}
        rotation={[3.13, 0.01, -3.14]}
        >
          <meshStandardMaterial color="#537A5A" />    
        </mesh>
    </group>
  )
}

useGLTF.preload('/homera_room.glb')