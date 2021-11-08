import { useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Camera = ({loaded }: { loaded? :boolean })=>{
    const [vec] = useState(() => new THREE.Vector3());

    //update camara position on mouse move
    return(
        useFrame(({camera, mouse}) => {
            //planetes vertices stay on screen
            const y = mouse.y <= -1 ? 0.00001 * mouse.y : -1.3*mouse.y
            vec.set( -mouse.x * 2 ,  y , camera.position.z)
            camera.position.lerp(vec, 0.04);
            camera.lookAt(5, 2, -1);
            camera.updateProjectionMatrix();
        })
    )
};

export default Camera;