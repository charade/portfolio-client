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
                    aspect : window.innerWidth / window.innerHeight,
                    position : [0, 0 , 3],
                    fov : 80,
                    near : 0.1,
                    far : 200,
                    zoom : 2
                }}
            >
                <EffectComposer>
                    <DepthOfField focusDistance={.1} focalLength={1} bokehScale={.4} />
                    <Bloom intensity = {.3} luminanceThreshold = {.20} luminanceSmoothing = {.23}/>
                </EffectComposer>
                    <MoonModel />
            </Canvas>
        </div>
    )
};
export default Comments ;