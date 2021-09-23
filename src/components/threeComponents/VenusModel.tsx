import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Mesh, MathUtils } from "three";
import Venus from '../../assets/textures/venus.jpeg';
import Venus_Atmosphere from '../../assets/textures/venus_atmosphere.jpeg';
 
const VenusModel = () => {
    const [VMap,VAtmosphereMap ] = useTexture([Venus, Venus_Atmosphere ]);
    const meshRef = useRef<Mesh>();

    useFrame(({clock}) => {
        meshRef.current.rotation.z += MathUtils.lerp(meshRef.current.rotation.z, 0.0002, 1)
        meshRef.current.rotation.y += MathUtils.lerp(meshRef.current.rotation.y, 0.002, 1)
    });

    return(
        <mesh 
            ref = {meshRef}
            position = {[0, -3, -4]}
        >
            <sphereBufferGeometry args = {[1, 30, 30]}/>
            <meshStandardMaterial 
                map = {VMap}
                attach = 'material'
                alphaMap = {VAtmosphereMap}
                opacity = {0.4}
                transparent = {true}
            />
        </mesh>
    )
}

export default VenusModel;