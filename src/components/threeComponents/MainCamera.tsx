import { useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { m } from 'framer-motion';

const Camera = ({loaded }: { loaded? :boolean })=>{
    const [vec] = useState(() => new THREE.Vector3())
    return(
        useFrame(({camera, mouse}) => {
            console.log(window.innerHeight, mouse.y)
                const y = mouse.y <= -1 ? 0.00001 * mouse.y : -1.3*mouse.y
                vec.set( -mouse.x * 2 ,  y , camera.position.z)
                camera.position.lerp(vec, 0.04);
                camera.lookAt(5, 2, -1);
                camera.updateProjectionMatrix();
        })
    )
}

export default Camera;