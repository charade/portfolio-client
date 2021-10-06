
import { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei'
import { SectionIndex } from '../components/about/sections/Index';
import { useAboutStyle } from '../assets/styles/index.styles';
import FictionalTexture from '../assets/textures/fictional.jpeg';
import JupiterTexture from '../assets/textures/jupiter.jpeg';
import VenusTexture from '../assets/textures/venus.jpeg';
import AstraModel from '../components/threeComponents/AstraModel';
import VenuModel from  '../components/threeComponents/VenusModel';
import MainCamera from '../components/threeComponents/MainCamera';
import { extend, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Down from '../components/directions/Down';

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
    const [JupiterMap, FictionalMap] = useTexture([JupiterTexture,FictionalTexture])
    const [loaded, setLoaded] = useState<boolean>(false); 
    const classes = useAboutStyle();

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
                <Suspense fallback = {null} >  
                    {loaded && <Stars radius = {150} depth = {200} count = {30000}/>}
                    <group position={[-4, -1, 50]}>
                        <AstraModel 
                            position = {[16, -2, 0]}
                            map = {JupiterMap}
                            args = {[3, 20, 20]}
                            metalness = {0.6}
                            roughness = {0.5}
                            rotationSpeed = {[0, 0.003, 0]}
                        />
                        <VenuModel />
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
                    </group>
                </Suspense>
            </Canvas>
            {loaded && <SectionIndex />} 
            {loaded && <Down to = 'skills' />} 
        </motion.div>
    )
};

export default About;


/*standard astral material*/

{/* <AstraModel 
    position = {[-5, -3, 9]}
    map = {VenusMap}
    metalness = {0.8}
    args = {[5, 40, 40]}
    roughness = {0.5}
    rotationSpeed = {[0.0004, 0.0004, 0.00035]}
/> */}