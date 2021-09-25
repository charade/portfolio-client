import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { ReactThreeFiber } from '@react-three/fiber';

type AstralShader = {
    uColor : string | THREE.Color;
    map : THREE.Texture
}

const AstralShaderMaterial  =  shaderMaterial(
    //Uniform
{uColor : new THREE.Color(0.0,0.0,0.0), map : new THREE.Texture()},
    //vertex shader
    `   
        varying vec2 vertex_uv;
        void main(){
            vertex_uv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
        
    `,
    //Fragment shader
    `
        uniform vec3 uColor;
        uniform sampler2D map;
        varying vec2 vertex_uv;
        void main(){
            vec3 texture = texture2D(map, vertex_uv).xyz;
            gl_FragColor = vec4(texture, 1.0);
        }
    `
    )
    
declare global{
    namespace JSX{
        interface IntrinsicElements{
            astralShaderMaterial :  ReactThreeFiber.Object3DNode<AstralShader, AstralShader>
        }
    }
};

export default AstralShaderMaterial