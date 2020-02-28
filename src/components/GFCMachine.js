/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import propellerImg from '../images/propeller.png'

export default function GFCMachine(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, 'gfc-hq.glb', loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('draco-gltf/')
    loader.setDRACOLoader(dracoLoader)
  })

  // const propellerTex = useLoader(THREE.TextureLoader, '/propeller.png')
  const [propellerTex] = useLoader(THREE.TextureLoader, [propellerImg])

  const propeller = useRef();
  useFrame( () => (
    propeller.current.rotation.y += .4
  ))

  const arrow1 = useRef();
  const arrow2 = useRef();
  const arrow3 = useRef();
  const sphere = useRef();
  useFrame( () => (
    arrow1.current.rotation.x += .04,
    arrow2.current.rotation.x += .04,
    arrow3.current.rotation.x += .04,
    sphere.current.rotation.y += .0134
  ))

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials['gfc main']} geometry={nodes.casing.geometry} position={[0, 0, 0]}>
        <mesh ref={arrow1} material={materials['gfc main']} geometry={nodes.arrow1.geometry} position={[0.38, 0.06, 0.35]} />
        <mesh ref={arrow2} material={materials['gfc main']} geometry={nodes.arrow2.geometry} position={[0.38, 0.06, -0.35]} />
        <mesh ref={arrow3} material={materials['gfc main']} geometry={nodes.arrow3.geometry} position={[0.38, -0.54, 0]} />

        <mesh material={materials['gfc main']} geometry={nodes.button1.geometry} position={[0.06, 0.33, 0.83]} />
        <mesh material={materials['gfc main']} geometry={nodes.button2.geometry} position={[0.06, 0.33, -0.82]} />
        <mesh material={materials['gfc main']} geometry={nodes.button3.geometry} position={[0.06, -1.09, 0]} />

        <mesh material={nodes.light1.material} geometry={nodes.light1.geometry}>
          <meshPhongMaterial 
            attach = "material" 
            emissive = {new THREE.Color('#00ff00')}
            emissiveIntensity = {50}
          />
        </mesh>
        <mesh material={nodes.light2.material} geometry={nodes.light2.geometry}>
          <meshPhongMaterial 
            attach = "material" 
            emissive = {new THREE.Color('#00ff00')}
            emissiveIntensity = {50}
          />
        </mesh>
        <mesh material={nodes.light3.material} geometry={nodes.light3.geometry}>
          <meshPhongMaterial 
            attach = "material" 
            emissive = {new THREE.Color('#00ff00')}
            emissiveIntensity = {50}
          />
        </mesh>

        <mesh ref={sphere} material={materials['gfc main']} geometry={nodes.sphere.geometry} position={[0.18, -0.14, 0]} />
        
        <group ref={propeller} position={[-0.01, 0.86, 0]}>
          <mesh material={materials['gfc main']} geometry={nodes.propeller_0.geometry} />
          <mesh geometry = {nodes.propeller_1.geometry}>
            <meshStandardMaterial 
              attach="material" 
              map={propellerTex} 
              side={THREE.DoubleSide}
              transparent
            />
          </mesh>
        </group>
      </mesh>
    </group>
  )
}

// export default function Sphere(props) {
//   const texture = useLoader(THREE.TextureLoader, '/flakes.png')
//   const normalMap = useMemo(() => {
//     const clone = texture.clone(true)
//     clone.needsUpdate = true
//     return clone
//   }, [texture])
//   const [hovered, set] = useState(false)
//   useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
//   return (
//     <group {...props}>
//       <mesh onPointerOver={() => set(true)} onPointerOut={() => set(false)}>
//         <sphereBufferGeometry attach="geometry" args={[1.5, 64, 64]} />
//         <meshPhysicalMaterial
//           attach="material"
//           clearcoat={1.0}
//           clearcoatRoughness={0}
//           metalness={0.9}
//           roughness={0.1}
//           color={hovered ? 'red' : 'blue'}
//           normalMap={normalMap}
//           normalScale={[0.3, 0.3]}
//           normalMap-wrapS={THREE.RepeatWrapping}
//           normalMap-wrapT={THREE.RepeatWrapping}
//           normalMap-repeat={[20, 20]}
//           //normalMap-anisotropy={16}
//         />
//       </mesh>
//       <Shadow position={[0, -1.5, 0]} scale={[4, 4, 1]} rotation={[-Math.PI / 2, 0, 0]} />
//     </group>
//   )
// }
