import { Suspense } from "react";
import { useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import moonTexture from '../../assets/textures/moon.jpeg';
import moonNormalTexture from "../../assets/textures/moonNormal.jpeg";

const MoonModel = () => {
    const { size } = useThree();
    const [moonMap, moonNormalMap] = useTexture([moonTexture, moonNormalTexture]);

    return(
        <Suspense fallback = {null}>
            <group position = {[0, 0, -5]}>
                <mesh>
                    <sphereBufferGeometry attach = 'geometry' args = {[2, 30, 30]}/>
                    <meshBasicMaterial map = {moonMap}/>
                </mesh>
            </group>
            </Suspense>
    )
}
export default MoonModel;