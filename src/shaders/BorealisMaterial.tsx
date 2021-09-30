import { ReactThreeFiber } from "@react-three/fiber";
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';
import * as THREE from 'three';

// console.log(glsl);

type BorealisShaderProps = {
    uColor : string | THREE.Color;
    uTime : number,
    uGeoDimension : number[]
}

const BorealisShaderMaterial = shaderMaterial(
    //uniforms
    {
        uColor : new THREE.Color(),
        uTime : 0.0,
        uGeoDimension : [0,0]
    },
    //vertex shaders
    glsl`
    precision mediump float;
    uniform float uTime;
    varying vec2 vUv;

    // vec3 noise( vec3 position){
    //     return (1., 1., 1.);
    // };

    void main(){
        vUv = uv;
        vec3 pos = vec3(uv, sin(0.2 *uTime)));
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`
    ,
    //fragment shaders
    glsl`   
    precision mediump float;
    uniform vec3 uColor;
    varying vec2 vUv;
    uniform float uTime;
    void main(){
        float st = abs(sin(uTime));
        vec3 pos = vec3(vUv.x + st);
        gl_FragColor = vec4(st + uColor, 1.);
    }
`

) 



declare global{
    namespace JSX{
        interface IntrinsicElements{
            borealisShaderMaterial :  ReactThreeFiber.Object3DNode<BorealisShaderProps, typeof BorealisShaderMaterial>
        }
    }
};


export default BorealisShaderMaterial;