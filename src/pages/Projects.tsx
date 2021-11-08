import { Suspense } from "react";
import { motion } from "framer-motion"
import { useProjectsStyle } from '../assets/styles/index.styles';
import { Canvas } from "@react-three/fiber";
import { Stars, useTexture, Environment, OrbitControls } from "@react-three/drei";
import AstralModel from "../components/threeComponents/AstraModel";
import NeonTexture from '../assets/textures/neon_shymere.jpeg';
import MainCamera from '../components/threeComponents/MainCamera';
import {ProjectsOverLay} from "../components/projects/ProjectsOverLay";

export default function Projects(){
    const classes = useProjectsStyle();
    const NeonMap = useTexture(NeonTexture);

    return(
        <div className = {classes.root}>
            <ProjectsOverLay />
            <div className = {classes.canvasContainer}>
                <Canvas
                    gl = {{antialias : true, pixelRatio : window.devicePixelRatio}}
                    mode = 'concurrent'
                    camera = {{
                        near: 0.1,
                        zoom: 4,
                        fov : 76,
                    }}
                >
                    <Stars count = {3000} depth = {200} radius = { 100 }/>
                    <directionalLight color = 'white' position = {[40, 40, 0]} />
                    <MainCamera />
                    <OrbitControls 
                        enablePan = {false} 
                        enableZoom = {false} 
                        enableRotate = {false}
                        maxDistance = {120} 
                        minDistance = {113.5}
                    />
                    <Suspense fallback = {null} >
                            <AstralModel
                                position = {[-10, 0, 9]}
                                map = {NeonMap}
                                args = {[8, 50, 50]}
                                metalness = {0.8}
                                roughness = {0.00001}
                                bumpScale = {0.14}
                                rotationSpeed = {[0.00005, 0.00005, -0.0005]}
                            />
                    </Suspense >
                    <Environment preset = "night"/>
                </Canvas>
            </div>
        </div>
    )
}