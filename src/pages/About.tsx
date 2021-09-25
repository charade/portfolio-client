
import { useState, Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html, useTexture, CameraShake  } from '@react-three/drei'
import Intro from '../components/about/Intro';
import { useAboutStyle } from '../assets/styles/index.styles';
import { CircularProgress } from '@material-ui/core';
import FictionalTexture from '../assets/textures/fictional.jpeg';
import EarthTexture from '../assets/textures/earth.jpeg';
import VenusTexture from '../assets/textures/venus.jpeg';
import Model from '../components/threeComponents/Model';
import Camera from '../components/threeComponents/AboutPageCamera'
import { motion } from 'framer-motion';

const About = () => {
    const [EarthMap, VenusMap, FictionalMap] = useTexture([EarthTexture,VenusTexture,FictionalTexture])
    const [loaded, setLoaded] = useState<boolean>(false); 

    return(
        <>
            <Canvas
                    mode = 'concurrent'
                    camera={{
                        near: 0.1,
                        far: 2000,
                        zoom: 13,
                        fov : 75,
                        position : [18, -10, 100]
                    }}
                >
                    {!loaded &&
                        <Html center fullscreen>
                            <h1>Loading</h1>
                        </Html>
                    }
                    <directionalLight color = 'white' position = {[20, 2, 0]} />
                    <pointLight intensity = {1} position = {[45, 15, -40]}/>
                    <OrbitControls />
                    <Camera loaded = {loaded} />
                    <Suspense fallback = {null} >
                            <group position={[0, -1, -40]}>
                            <Stars radius = {80} depth = {200} count = {70000}/>
                            <Model 
                                position = {[10, 2, 0]}
                                map = {EarthMap}
                                metalness = {0.1}
                                roughness = {0.5}
                                rotationSpeed = {[0, 0.003, 0]}
                                />
                            <Model 
                                setLoaded = {setLoaded}
                                position = {[0, -3, 7]}
                                map = {VenusMap}
                                metalness = {0.7}
                                args = {[4, 40, 40]}
                                roughness = {0.5}
                                rotationSpeed = {[0.001, 0.001, 0.001]}
                                />
                            <Model 
                                position = {[15, 2, 8]}
                                map = {FictionalMap}
                                metalness = {1}
                                roughness = {0.7}
                                rotationSpeed = {[0.002, 0, 0.0002]}
                            />
                        </group>
                    </Suspense>
            </Canvas>
            {loaded && <Intro />}  
        </>
    )
};

export default About;