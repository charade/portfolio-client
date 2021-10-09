
import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei'
import { AboutSectionsIndex } from '../components/about/sections/Index';
import { useAboutStyle } from '../assets/styles/index.styles';
import FictionalTexture from '../assets/textures/fictional.jpeg';
import JupiterTexture from '../assets/textures/jupiter.jpeg';
import AstraModel from '../components/threeComponents/AstraModel';
import VenuModel from  '../components/threeComponents/VenusModel';
import MainCamera from '../components/threeComponents/MainCamera';
import { motion } from 'framer-motion';
import AboutSubNavigation from '../components/about/AboutSubNavigation';

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
                    fov : 76,
                    position : [10, -11, 113]
                }}
            >
                 
                <directionalLight color = 'white' position = {[40, 40, 0]} />
                <pointLight intensity = {0.4} position = {[12, 15, -40]}/>
                <OrbitControls 
                    enablePan = {false} 
                    enableZoom = {false}
                    enableRotate = {false}
                />
                <MainCamera loaded = {loaded} />
                <Suspense fallback = {null} >  
                    {loaded && <Stars radius = {200} depth = {200} count = {10000}/>}
                    <group position={[-3, -3.5, 50]}>
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
                            position = {[13, 4, 30]}
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
            {loaded && 
                <>
                    <AboutSectionsIndex />
                    <AboutSubNavigation />
                </>
            }
            
        </motion.div>
    )
};

export default About;


