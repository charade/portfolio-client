import { useGLTF } from '@react-three/drei';

export default function MilkyWay(){
    const model = useGLTF('milkyWay/scene.gltf');
    
    return(
        <primitive object = {model.scene} />
    )
}