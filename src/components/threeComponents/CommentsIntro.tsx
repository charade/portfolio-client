import { useThree } from "@react-three/fiber";

const CommentsIntro = () => {
    const { size } = useThree();

    return(
        <mesh position = {[0, 0, 0]}>
            <planeBufferGeometry attach = 'geometry' args = {[3, 3, 3]}/>
            <meshBasicMaterial attach = 'material'/>
        </mesh>
    )
}
export default CommentsIntro;