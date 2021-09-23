import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import {  Mesh, MathUtils } from 'three';
import { useTexture } from '@react-three/drei'
import EarthMap from '../../assets/textures/earth.jpeg';
import EarthSpecMap from '../../assets/textures/earthSpec.jpg';
import EarthBumpMap from '../../assets/textures/earthBump.jpg';
import { useEffect, useRef } from "react";
import { CircularProgress } from "@material-ui/core";

const Earth = () => {
    const [Map, SpecMap, BumpMap] = useTexture([EarthMap, EarthSpecMap, EarthBumpMap]);
    const earthRef = useRef<Mesh>();

    useEffect(() => {
        console.log(Map)
    }, [Map])

    useFrame(() => {
        earthRef.current.rotation.z +=  MathUtils.lerp(earthRef.current.rotation.z, 0.003, 1);
        earthRef.current.rotation.y +=  MathUtils.lerp(earthRef.current.rotation.y, 0.003, 1);
    });

    return(
        <mesh position = {[20, 2, 0]} ref = {earthRef}>
            <pointLight position = {[500, 100,120]} intensity = {0.2} color = 'lightgrey'/>
            <sphereBufferGeometry attach = 'geometry'/>
            <ambientLight intensity = {2} color = 'white'/>
            <meshNormalMaterial 
                bumpMap = {BumpMap}
                bumpScale = {3}
            />
            <meshStandardMaterial
                attach = 'material' 
                map = {Map}
                metalness = {0.1}
                roughness = {0.5}
            />
        </mesh>
    )
}

export default Earth;