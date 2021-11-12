import { useRef } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import VenusTexture from '../../assets/textures/venus.jpeg';
import AstralShaderMaterial from '../../shaders/AstralShaderMaterial';
import * as THREE from 'three';

extend({AstralShaderMaterial });
 
export default function VenusModel(){
    const materialRef = useRef<any>();
    const meshRef = useRef<THREE.Mesh>();
    const VenusMap = useTexture(VenusTexture);

    useFrame(({clock}) => {
        // materialRef.current.uTime = clock.getElapsedTime();
        meshRef.current.rotation.x += 0.0002
        meshRef.current.rotation.y += 0.001
        meshRef.current.rotation.z += 0.0003;
    })

    return(
        <group ref = {meshRef} position = {[-5.5, 0, 9]}>
            <mesh>
                <sphereBufferGeometry 
                    args = {[5, 40, 40]}
                />
                <astralShaderMaterial 
                    ref = {materialRef}
                    uColor = {new THREE.Color('red')}
                    uMap = {VenusMap}
                />
            </mesh>
        </group>
    )
}