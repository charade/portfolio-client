import { useFrame } from "@react-three/fiber";
import {  Mesh, MathUtils, MeshBasicMaterialParameters } from 'three';
import { FC, useEffect, useRef } from "react";

type PropsType = {
    setLoaded? : (args : boolean) => void,
    position : [x: number, y: number, z: number],
    map : any,
    roughness?: number, 
    metalness?: number,
    rotationSpeed : number[],
    args? : any
}

const Model : FC<PropsType> = ({setLoaded, position, map, metalness, roughness, rotationSpeed, args}) => {
    const modelRef = useRef<Mesh>();

    useEffect(() => {
        setLoaded && setLoaded(true);
    }, [map, setLoaded])

    useFrame(() => {
        modelRef.current.rotation.z +=  MathUtils.lerp(modelRef.current.rotation.z, rotationSpeed[2], 1);
        modelRef.current.rotation.y +=  MathUtils.lerp(modelRef.current.rotation.y, rotationSpeed[1] , 1);
        modelRef.current.rotation.x +=  MathUtils.lerp(modelRef.current.rotation.x, rotationSpeed[0] , 1);
    });

    return(
        <mesh position = {position} ref = {modelRef}>
            <sphereBufferGeometry attach = 'geometry' args = {args && args}/>
            <meshStandardMaterial
                attach = 'material' 
                map = {map}
                metalness = {metalness && metalness}
                roughness = {roughness && roughness}
            />
        </mesh>
    )
}

export default Model;