import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { ReactThreeFiber } from '@react-three/fiber';

type AstralShader = {
    uColor : string | THREE.Color;
    uMap ?: THREE.Texture;
    uTime : number,
}

const AstralShaderMaterial  =  shaderMaterial(
    //Uniform
{uColor : new THREE.Color(0.0,0.0,0.0), uMap : new THREE.Texture(), uTime : 0.0},
    //vertex shader
    `   precision mediump float;
        varying vec2 vertex_uv;
        uniform float uTime;
        void main(){
            vertex_uv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
        
    `,
    //Fragment shader
    `
        precision mediump float;
        uniform vec3 uColor;
        uniform sampler2D uMap;
        varying vec2 vertex_uv;
        uniform float uTime;
        void main(){
            vec3 texture = texture2D(uMap, vertex_uv).xyz + vec3(0.1);
            gl_FragColor = vec4(texture, 1.0);
        }
    `
    )
    
declare global{
    namespace JSX{
        interface IntrinsicElements{
            astralShaderMaterial :  ReactThreeFiber.Object3DNode<AstralShader, typeof AstralShaderMaterial>
        }
    }
};

export default AstralShaderMaterial