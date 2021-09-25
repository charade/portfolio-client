import { useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Camera = ({loaded }: { loaded :boolean })=>{
    const [vec] = useState(() => new THREE.Vector3())
    return(
        useFrame(({camera, mouse}) => {
            if(loaded){
                vec.set( -mouse.x * 8 , 5 - mouse.y * Math.PI, camera.position.z)
                camera.position.lerp(vec, 0.01);
                camera.lookAt(5, 2, -1);
                camera.updateProjectionMatrix();
            }
        })
    )
}

export default Camera;