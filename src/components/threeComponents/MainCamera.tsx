import { useState } from 'react';
import { Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';


type CameraProps ={
    active?: boolean
}
const Camera = ({active} : CameraProps)=>{
    const [vec] = useState(() => new Vector3(0, 0, 0));
    //update camara position on mouse move
    return(
        useFrame(({camera, mouse}) => {
            //planetes vertices stay on screen
            const y = mouse.y <= -1 ? 0.00001 * mouse.y : -1.3*mouse.y
            vec.set( -mouse.x * 2 ,  y , camera.position.z);
            //wait user clik on landing to animate camera at the Intro
            if(active){
                camera.position.lerp(vec, 0.05);
                camera.lookAt(5, 2, -1);
                camera.updateProjectionMatrix();
            }
        })
    )
};
export default Camera;