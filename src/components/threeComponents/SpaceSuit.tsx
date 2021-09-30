import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useState, useEffect } from 'react';

type MeshType = {
    node : any,
    materials : any
};

export default function SpaceSuit(){
    const model = useGLTF('space_suit/scene.gltf') as any;
    // const [model, setModel] = useState<any>();

//     useEffect(() => {
//         setModel(nodes['NHMW-Franz_Viehboeck_low_resobjcleanermaterialmergergles'])
//     },[]);

   console.log(model.scene);

    return(
        <primitive object = {model.scene} />
        // <group position = {[0, -5, -8]}>
        //     <mesh geometry = {nodes.Object_2.geometry} position = {[0, -5, -8]}/>
        //     <meshStandardMaterial attach = 'material' emissive = {new THREE.Color(0,0,0)}/>
        //     <mesh geometry = {nodes.Object_3.geometry} position = {[0, -5, -8]}/>
        //     <mesh geometry = {model?.children[0].geometry} position = {[0, -5, -8]}/>
        //     <mesh geometry = {model?.children[1].geometry} position = {[0, -5, -8]}/>
        // </group>
    )
}