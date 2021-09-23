
import { Canvas, useThree } from '@react-three/fiber';
import { TrackballControls, Stars } from '@react-three/drei'
import VenusModel from '../threeComponents/VenusModel';
import Earth from '../threeComponents/Earth';
import Fictional from '../threeComponents/Fictional';

const AboutCanvas = () => {

    return(
        <Canvas
            mode = "concurrent"
            // frameloop = 'demand'
            camera={{
                near: 0.1,
                far: 50000,
                zoom: 5.8,
                fov : 70,
                position : [40, 10, 8]
            }}
        >
            <pointLight intensity = {3} position = {[10, 15, -50]}/>
            <TrackballControls />
            <Earth />
            <Fictional />
            <VenusModel /> 
            <Stars radius = {200} depth = {300} count = {50000}/>
        </Canvas>
    )
};

export default AboutCanvas;