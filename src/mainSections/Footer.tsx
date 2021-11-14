import { Canvas } from '@react-three/fiber';
import { useFooterStyle } from '../assets/styles/index.styles';
import { MoonModel } from "../components/threeComponents";
import { EffectComposer, Bloom, DepthOfField } from "@react-three/postprocessing";
import { GetMeInTouch } from "../components/GetMeInTouch";
import { OrbitControls } from '@react-three/drei';
import { BoldText } from "../components/BoldText";

const Footer = () => {
    const classes = useFooterStyle();
    return(
        <div className = { classes.root }>
            <GetMeInTouch />
            <BoldText text = {'Get me in touch'}/>
            <Canvas
                // dpr={Math.max(window.devicePixelRatio, 2)}
                camera = {{
                    position : [0, 0 ,2],
                    fov : 60,
                    near : 0.1,
                    far : 200,
                }}
            >
                {/* <OrbitControls enableDamping dampingFactor= {.4} enableRotate enableZoom = {false}/> */}
                <EffectComposer>
                    <DepthOfField focusDistance={5} focalLength={1} bokehScale={.1} />
                    <Bloom intensity = {.6} luminanceThreshold = {0} luminanceSmoothing = {0}/>
                </EffectComposer>
                    <MoonModel />
            </Canvas>
        </div>
    )
};
export default Footer ;