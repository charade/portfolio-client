
import { useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, Html,  } from '@react-three/drei'
import VenusModel from '../components/threeComponents/VenusModel';
import Earth from '../components/threeComponents/Earth';
import Fictional from '../components/threeComponents/Fictional';
import { useMemo } from 'react';
import * as THREE from 'three';
import Intro from '../components/about/Intro';
import { useAboutStyle } from '../assets/styles/index.styles';
import { CircularProgress } from '@material-ui/core';
const About = () => {
    const material = useMemo(() => new THREE.SphereBufferGeometry(),[]);
    const [loaded, setLoaded] = useState(false);
    const classes = useAboutStyle();

    return(
        <>
            <Canvas
                    // mode = 'concurrent'
                    // frameloop = 'demand'
                    camera={{
                        near: 0.1,
                        far: 1000,
                        zoom: 5.8,
                        fov : 70,
                        position : [40, 10, 8]
                    }}
                >
                    {!loaded &&
                        <Html center>
                            <CircularProgress />
                        </Html>
                    }
                    <directionalLight color = 'white' position = {[20, 2, -100]} />
                    <pointLight intensity = {1} position = {[10, 15, -50]}/>
                    <OrbitControls />
                    <Suspense fallback = {null} >
                            <group>
                                <Stars radius = {150} depth = {200} count = {50000}/>
                                <Earth setLoaded = {setLoaded}/>
                                <Fictional />
                                <VenusModel />
                            </group>
                    </Suspense>
            </Canvas>
            {loaded && <Intro />}  
        </>
    )
};

export default About;