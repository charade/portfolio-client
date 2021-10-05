
import { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei'
import Intro from '../components/about/Intro';
import { useAboutStyle } from '../assets/styles/index.styles';
import FictionalTexture from '../assets/textures/fictional.jpeg';
import JupiterTexture from '../assets/textures/jupiter.jpeg';
import VenusTexture from '../assets/textures/venus.jpeg';
import AstraModel from '../components/threeComponents/AstraModel';
import MainCamera from '../components/threeComponents/MainCamera';
import { extend, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Down from '../components/directions/Down';
import AboutSubNavigation from '../components/about/AboutSubNavigation';
import AstralShaderMaterial from '../shaders/AstralShaderMaterial';
import * as THREE from 'three';
extend({AstralShaderMaterial});

const rootVariants = {
    open : {
        y : 0,
        opacity : 1
    },
    close : {
        y : 500,
        opacity : 0
    }
};
const About = () => {
    const [JupiterMap, VenusMap, FictionalMap] = useTexture([JupiterTexture,VenusTexture,FictionalTexture])
    const [loaded, setLoaded] = useState<boolean>(false); 
    const classes = useAboutStyle();
    const materialRef = useRef<any>()
    
    useEffect(() => {
        let timer = null;
        if(loaded){
           timer = setInterval(() => materialRef.current.uTime += 1, 1);
        }
        return () => clearInterval(timer)
    }, [loaded]);

    return(
        <motion.div 
            className = {classes.root}
            variants = {rootVariants}
            animate = 'open'
            exit = 'close'
        >
            <Canvas
                gl = {{antialias : true, pixelRatio : window.devicePixelRatio}}
                mode = 'concurrent'
                camera={{
                    near: 0.1,
                    far: 10000,
                    zoom: 4,
                    fov : 82,
                    position : [10, -8, 110]
                }}
            >
                 
                <directionalLight color = 'white' position = {[40, 40, 0]} />
                <pointLight intensity = {0.4} position = {[12, 15, -40]}/>
                <OrbitControls enablePan = {false}/>
                <MainCamera loaded = {loaded} />
                <Stars radius = {150} depth = {200} count = {30000}/>
                <group position={[-4, -1, 50]}>
                    <Suspense fallback = {null} >
                        <AstraModel 
                            position = {[16, -2, 0]}
                            map = {JupiterMap}
                            args = {[3, 20, 20]}
                            metalness = {0.6}
                            roughness = {0.5}
                            rotationSpeed = {[0, 0.003, 0]}
                        />
                        <mesh 
                            position = {[-5, -3, 9]}
                            rotation = {[0.0003, 0.0003, 0.002]}
                        >
                            <sphereBufferGeometry 
                                args = {[5, 30, 30]}
                            />
                            <astralShaderMaterial 
                                ref = {materialRef}
                                uColor = {new THREE.Color('red')}
                                uMap = {VenusMap}
                            />
                        </mesh>
                        {/* <AstraModel 
                            position = {[-5, -3, 9]}
                            map = {VenusMap}
                            metalness = {0.8}
                            args = {[5, 40, 40]}
                            roughness = {0.5}
                            rotationSpeed = {[0.0004, 0.0004, 0.00035]}
                        /> */}
                        <AstraModel 
                            position = {[14, 5, 30]}
                            setLoaded = {setLoaded}
                            // map = {FictionalMap}
                            bumpMap = {FictionalMap}
                            args = {[4, 30, 32]}
                            metalness = {0.8}
                            roughness = {0.00001}
                            bumpScale = {0.14}
                            rotationSpeed = {[0.00005, 0.00005, -0.0005]}
                        />
                    </Suspense>
                </group>
            </Canvas>
            {/* {loaded && <Intro />}  */}
            {loaded && <AboutSubNavigation />} 
            {loaded && <Down to = 'skills' />} 
        </motion.div>
    )
};

export default About;