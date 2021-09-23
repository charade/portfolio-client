import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { FlyControls, Stars, OrbitControls } from '@react-three/drei'
import * as THREE from 'three';

export default function DefaultCanvas(){

    return(
        <Canvas
            
            camera = {{
                near : 0.1,
                far : 1000,
                zoom : 300,
                position : [100, 20, 50]
            }}
        >
          
            <OrbitControls autoRotate = {true}/>
            <Stars count = {5000} depth = {100} radius = {100}/>
        </Canvas>
    )
}