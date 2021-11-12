import { Canvas } from '@react-three/fiber';
import { useCommentsStyle } from '../assets/styles/index.styles';
import { MoonModel } from "../components/threeComponents";
import { EffectComposer, Bloom, DepthOfField } from "@react-three/postprocessing";

import { Suspense } from 'react';

const Comments = () => {
    const classes = useCommentsStyle();

    return(
        <div className = { classes.root }>
            <Canvas
                camera = {{
                    //device pixel ratio
                    position : [0, 0 ,2],
                    fov : 60,
                    near : 0.1,
                    far : 200,
                }}
            >
                <EffectComposer>
                    <DepthOfField focusDistance={.1} focalLength={1} bokehScale={.4} />
                    <Bloom intensity = {.3} luminanceThreshold = {0} luminanceSmoothing = {0}/>
                </EffectComposer>
                    <MoonModel />
            </Canvas>
        </div>
    )
};
export default Comments ;