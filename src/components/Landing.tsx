import { useLandingStyle } from "../assets/styles/index.styles";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

const loadingVariants : Variants  = {
    start: {
        strokeDashoffset : ["440", "0"],
        transition : {
            duration : 3,
            delay : .5
        }
    },
    initial:{
        strokeDashoffset : "440"
    }
}

export const Landing = () => {
    const classes = useLandingStyle();
    const progressRef = useRef<SVGCircleElement>(null);

    return(
        <div className = {classes.root}>
            <svg className = {classes.circle} width = '200' height = "200">
                <circle cx = "50%" cy = "50%" r="70" />
                <motion.circle 
                    onAnimationComplete = {() => console.log('end')}
                    variants = { loadingVariants }
                    animate = "start"
                    initial = "initial"
                    ref = { progressRef }
                    cx = "50%" cy = "50%" r="70" 
                    className = {classes.progress}
                />
            </svg>
        </div>
    )
}