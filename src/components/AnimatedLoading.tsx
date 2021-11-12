import { motion, Variants } from "framer-motion";
import { useAnimatedLoadingStyle } from '../assets/styles/index.styles';
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { ReducerRootStateType } from "../state/store";
import * as landingEvntActionCreators from "../state/action-creators/landingEvent-action-creators";

const loadingVariants : Variants  = {
    start: (custom : number )=> ({
        //converting progress percentage
        strokeDashoffset : (440 - 440 * custom / 100) + 1,
        transition : {
            duration : 2,
            delay : .5
        }
    }),
    initial:{
        strokeDashoffset : "440"
    }
}

const loadingVariant: Variants = {
    start : {
        opacity : [0.5, 1],
        transition : {
            duration : 1,
            repeat : Infinity
        }
    },
    initial : {
        opacity : 1
    },
}

export const AnimatedLoading = ({progress} : {progress : number})=>{
    const classes = useAnimatedLoadingStyle();
    const dispatch = useDispatch();
    const  { setLoading } = bindActionCreators(landingEvntActionCreators, dispatch);
    
    //waiting for load event or clik evnt
    const landingEvent = useSelector((store : ReducerRootStateType) => store.landingEvent);
    //when progress circle nimation end
    const handleProgressEnd = () => setLoading(false);

    return(
        <motion.svg
            animate = {landingEvent.loading ? "start" : {opacity : 0}}
            initial = "initial" 
            className = {classes.circle} 
            width = '200' 
            height = "200" 
            aria-label = "loading"
        >
                <circle cx = "50%" cy = "50%" r="50" />
                <motion.text 
                    custom = { progress }
                    variants = { loadingVariant }
                    className = {classes.text} 
                    x = "44.4%" 
                    y = "52%"
                >
                    { `${progress.toFixed(0)} %`} 
                </motion.text>
                <motion.circle 
                    onAnimationComplete = { handleProgressEnd }
                    variants = { loadingVariants }
                    cx = "50%" cy = "50%" r="50" 
                    className = {classes.progress}
                />
        </motion.svg>
    )
}