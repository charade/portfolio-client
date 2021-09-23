import {Canvas, useLoader} from '@react-three/fiber';
import { TextureLoader } from 'three';
import RocksTexture from '../../assets/textures/rocks.jpg';

export default function TransitionCanvas(){
    const RocksMap = useLoader(TextureLoader, RocksTexture);

    return(
        <Canvas
            camera = {{
                zoom : 2,
                fov : 40,
                position : [0, -20, 20]
            }}
        >
            <mesh
                position = {[0, -4.5, 0]}
            >
                <planeBufferGeometry 
                    attach = 'geometry'
                    args = {[5, 3, 6, 5]}
                />
                <pointLight intensity = {1} color = 'white' position = {[2, 2, 10]}/>
                <meshStandardMaterial 
                    attach = 'material'
                    map  = {RocksMap}
                    displacementMap = {RocksMap}
                    displacementScale = {3}
                />
            </mesh>
        </Canvas>
    )
}