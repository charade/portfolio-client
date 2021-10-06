import { useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Camera = ({loaded }: { loaded? :boolean })=>{
    const [vec] = useState(() => new THREE.Vector3())
    return(
        useFrame(({camera, mouse}) => {
                vec.set( -mouse.x * 2 , 5 - mouse.y *Math.PI, camera.position.z)
                camera.position.lerp(vec, 0.04);
                camera.lookAt(5, 2, -1);
                camera.updateProjectionMatrix();
        })
    )
}

export default Camera;