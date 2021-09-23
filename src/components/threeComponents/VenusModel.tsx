import { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader, Mesh, MathUtils } from "three";
import Venus from '../../assets/textures/venus.jpeg';
import Venus_Atmosphere from '../../assets/textures/venus_atmosphere.jpeg';
 
const VenusModel = () => {
    const [VMap,VAtmosphereMap ] = useLoader(TextureLoader,[Venus, Venus_Atmosphere ]);
    const meshRef = useRef<Mesh>();

    useFrame(({clock}) => {
        meshRef.current.rotation.z += MathUtils.lerp(meshRef.current.rotation.z, 0.0002, 1)
        meshRef.current.rotation.y += MathUtils.lerp(meshRef.current.rotation.y, 0.002, 1)
    });

    return(
        <>
            <mesh position = {[0, -3, -4]} >
                <sphereBufferGeometry 
                    attach = 'geometry'
                    args = {[1.02, 30, 30]}
                />
                <meshBasicMaterial
                    attach = 'material'
                    alphaMap = {VAtmosphereMap}
                    opacity = {0.4}
                    transparent = {true}
                />
            </mesh>
            <mesh 
                ref = {meshRef}
                position = {[0, -3, -4]}
            >
                <sphereBufferGeometry args = {[1, 30, 30]}/>
                <meshBasicMaterial 
                    map = {VMap}
                />
            </mesh>
        </>
    )
}

export default VenusModel;