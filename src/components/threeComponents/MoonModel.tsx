import { Suspense, useMemo } from "react";
import { useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import moonTexture from '../../assets/textures/moon.jpeg';
import moonNormalTexture from "../../assets/textures/moonNormal.jpeg";

const MoonModel = () => {
    const { size } = useThree();
    const [moonMap, moonNormalMap] = useTexture([moonTexture, moonNormalTexture]);
    const y = useMemo(() => size.width < 1024 ? -0.4 : -0.4 ,[size]);

    return(
        <Suspense fallback = {null}>
            <group  >
                <mesh position = {[.5 , y, -2]} >
                    <sphereBufferGeometry attach = 'geometry' args = {[1.2, 30, 30]}/>
                    <meshBasicMaterial map = {moonMap} attach = "material"/>
                </mesh>
            </group>
            </Suspense>
    )
}
export default MoonModel;