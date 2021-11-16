import React, { useCallback, useEffect, useRef } from "react";
import { useLandingStyle } from "../assets/styles/index.styles";
import { AnimatedLoading } from "./AnimatedLoading";
import { motion, Variants } from "framer-motion";
import { useSelector,useDispatch } from "react-redux";
import * as landingEvntActionCreators from "../state/action-creators/landingEvent-action-creators";
import { ReducerRootStateType } from "../state/store";
import { bindActionCreators } from "redux";

const landingVariants : Variants = {
    open : {
        opacity : 1
    },
    close : {
        opacity : 0,
        display : 'none'
    }

}
const captionVariants : Variants = {
    open : {
        opacity : 1,
        transition : {
            duration : .3
        }
    },
    close : {
        opacity : 0
    }
}

export const Landing = () => {
    const classes = useLandingStyle();
    //user click
    const ref = useRef<HTMLDivElement>(null)
    const landingEvent = useSelector((store :ReducerRootStateType) => store.landingEvent);
    const dispatch = useDispatch();
    const { setActive } = bindActionCreators(landingEvntActionCreators, dispatch);
    //requesting meshes loading progress;

    useEffect(() => {
        if(!landingEvent.loading && ref.current){
            ref.current.style.cursor = 'pointer'
        }
    },[landingEvent.loading])

    const handleCloseLanding = useCallback((e : React.MouseEvent<HTMLDivElement>) => {
       //wait loading animation end before listening click ev
        !landingEvent.loading && setActive(true);
   },[landingEvent.loading, setActive])

    return(
        <motion.div
            ref = {ref}
            variants = { landingVariants } 
            initial = 'open'
            animate = { landingEvent.active ? 'close' : 'open' }
            className = {classes.root} 
            onClick = { handleCloseLanding }
        >
            <motion.h4 
                variants = { captionVariants }
                initial = "close"
                animate = { landingEvent.loading ? "close" : "open" }
                className = {classes.caption}
            >
                click to continue
            </motion.h4>
            <AnimatedLoading />
        </motion.div>
    )
}