import { useFrame, extend } from "@react-three/fiber";
import {  Mesh, MathUtils, FrontSide } from 'three';
import { FC, useLayoutEffect, useRef } from "react";
import * as THREE from 'three';

type PropsType = {
    setLoaded? : (args : boolean) => void,
    position : [x: number, y: number, z: number],
    map ?: any,
    bumpMap?: any,
    roughness?: number, 
    metalness?: number,
    rotationSpeed : number[],
    args? : any,
    bumpScale? : number
}

const Model : FC<PropsType> = ({
    setLoaded,
    position,
    map,
    metalness,
    roughness,
    rotationSpeed,
    args,
    bumpScale,
    bumpMap
    }) => {
    const modelRef = useRef<Mesh>();
    const materialRef = useRef<any>();
    
    useLayoutEffect(() => {
            setLoaded && setLoaded(true);
    }, [map, setLoaded])

    useFrame(({clock}) => {
        // materialRef.current.uTime = clock.getElapsedTime();
        modelRef.current.rotation.z +=  MathUtils.lerp(modelRef.current.rotation.z, rotationSpeed[2], 1);
        modelRef.current.rotation.y +=  MathUtils.lerp(modelRef.current.rotation.y, rotationSpeed[1] , 1);
        modelRef.current.rotation.x +=  MathUtils.lerp(modelRef.current.rotation.x, rotationSpeed[0] , 1);
    });

    return(
        <mesh position = {position} ref = {modelRef} dispose = {null}>
            <sphereBufferGeometry  attach = 'geometry' args = {args && args}/>
            {/* <astralShaderMaterial 
                ref = {materialRef}
                uColor = {new THREE.Color('red')}
                uMap = {map}
            /> */}
            
            <meshStandardMaterial
                side = {FrontSide}
                attach = 'material' 
                map = {map}
                bumpMap = {bumpMap}
                bumpScale = {bumpScale}
                metalness = {metalness && metalness}
                roughness = {roughness && roughness}
            />
        </mesh>
    )
}

export default Model;