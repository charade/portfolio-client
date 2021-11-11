import { useRef } from 'react';
import { OrbitControls,  } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const NEAR = 5;

const Controls = () => {
    const ref = useRef<any>(null);
    const { gl, camera } = useThree();

    useFrame(({ clock }) => {
        ref.current && ref.current.update();

        if(camera.position.z > NEAR){
            if(camera.position.z < NEAR){
                ref.current.enableZoom = false
            }

        }
    });

    return <OrbitControls 
            dampingFactor = {30} 
            enableDamping 
            args = {[camera, gl.domElement]} 
            enableZoom 
            ref = {ref}
        />
}

export default Controls