import { Canvas } from '@react-three/fiber';
import { useCommentsStyle } from '../assets/styles/index.styles';
import { CommentsIntro, Controls } from "../components/threeComponents";

const Comments = () => {
    const classes = useCommentsStyle();

    return(
        <div className = { classes.root }>
            <Canvas
                camera = {{
                    //device pixel ratio
                    aspect : window.innerWidth / window.innerHeight,
                    position : [0, 0 , 3],
                    fov : 80,
                    near : 0.1,
                    far : 200,
                    zoom : 2
                }}
            >
                <CommentsIntro />
                <Controls />
            </Canvas>
        </div>
    )
};
export default Comments ;