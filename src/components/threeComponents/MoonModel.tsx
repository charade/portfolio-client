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
            <group  >
                <mesh position = {[1 , 0, -2]} >
                    <sphereBufferGeometry attach = 'geometry' args = {[1.4, 30, 30]}/>
                    <meshBasicMaterial map = {moonMap} attach = "material"/>
                </mesh>
            </group>
            </Suspense>
    )
}
export default MoonModel;