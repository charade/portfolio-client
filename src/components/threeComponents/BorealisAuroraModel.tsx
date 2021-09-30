import { useRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import  BorealisShaderMaterial from '../../shaders/BorealisMaterial';
import * as THREE from 'three';
extend({BorealisShaderMaterial});

export default function BorealisAuroraModel(){
    const materialRef = useRef<any>();

    useFrame(({clock}) =>{
        materialRef.current.uTime = clock.getElapsedTime();
    });

    return(
        <mesh>
            <planeBufferGeometry attach = 'geometry' args = {[2, 1, 9, 10]}/>
            <borealisShaderMaterial 
                ref = {materialRef}
                uColor = 'red'
                uGeoDimension = {[2, 1]}
            />
        </mesh>
    )
}