import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';


export default function Skills(){
    return(
        <Canvas>
            <Suspense fallback = {null} >
                <Stars count = {10000} depth = {200} radius = {100} />  
            </Suspense>
        </Canvas>
    )
}