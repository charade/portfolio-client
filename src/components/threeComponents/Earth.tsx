import { useFrame } from "@react-three/fiber";
import {  Mesh, MathUtils } from 'three';
import { useTexture } from '@react-three/drei'
import EarthMap from '../../assets/textures/earth.jpeg';
import EarthSpecMap from '../../assets/textures/earthSpec.jpg';
import EarthBumpMap from '../../assets/textures/earthBump.jpg';
import { FC, useEffect, useRef } from "react";

type PropsType = {
    setLoaded : (args : boolean) => void
}
const Earth : FC<PropsType> = ({setLoaded}) => {

    const [Map, SpecMap, BumpMap] = useTexture([EarthMap, EarthSpecMap, EarthBumpMap]);
    const earthRef = useRef<Mesh>();

    useEffect(() => {
        setLoaded(true);
    }, [BumpMap])

    useFrame(() => {
        earthRef.current.rotation.z +=  MathUtils.lerp(earthRef.current.rotation.z, 0.003, 1);
        earthRef.current.rotation.y +=  MathUtils.lerp(earthRef.current.rotation.y, 0.003, 1);
    });

    return(
        <mesh position = {[20, 2, 0]} ref = {earthRef}>
            <sphereBufferGeometry attach = 'geometry'/>
            <meshStandardMaterial
                attach = 'material' 
                // bumpMap = {BumpMap}
                // bumpScale = {0.1}
                map = {Map}
                metalness = {0.1}
                roughness = {0.5}
            />
        </mesh>
    )
}

export default Earth;