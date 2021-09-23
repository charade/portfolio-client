import { useRef } from 'react';
import { Mesh } from 'three';
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import FictionalModel from '../../assets/textures/fictional.jpeg';
import * as THREE from 'three';

const Fictional = () => {
    const FictionalMap = useTexture(FictionalModel);
    const meshRef = useRef<Mesh>();

    useFrame(() => {
        meshRef.current.rotation.x += THREE.MathUtils.lerp(meshRef.current.rotation.x, 0.001, 1)
        meshRef.current.rotation.y += THREE.MathUtils.lerp(meshRef.current.rotation.y, 0.001, 1)
    });

    return(
        <mesh position = {[15, 2, 8]} ref= {meshRef}>
            <sphereBufferGeometry attach = 'geometry' />
            <meshStandardMaterial
                attach = 'material' 
                map = {FictionalMap} 
                metalness = {1}
                roughness = {0.7}
            />
        </mesh>
    )
}

export default Fictional;