import React, {useCallback, useEffect, useMemo} from "react";
import { useProjectIndicatorStyle } from "../../assets/styles/index.styles";
import { projectsDetails, ProjectItemType } from "../../utils/projectsDetails";
import { useSelector } from "react-redux";
import { ReducerRootStateType } from "../../state/store";
import {  motion, Variants, useAnimation } from 'framer-motion';

const hoveredVariants : Variants = {
    hover : {
        scale : 1.1,
        width : '90px',
        boxShadow : '0 0 39px white',
        transition: {
            type : "spring",
            damping: 20
        }
    },
    out: {
        width : .7
    }
};

const sliderVariants : Variants = {
    initial : {
        x : -50,
        opacity : 0,
        transition : {
            type : 'spring',
            duration : .8
        }
    },
    animate : {
        x : 0,
        opacity : 1,
        transition : {
            type : 'spring',
            damping: 20. ,
        }
    }
}

export const ProjectIndicator = () => {
    const classes = useProjectIndicatorStyle();
    const category = useSelector((store : ReducerRootStateType) => store.category);
    const projects = useSelector((store : ReducerRootStateType) => store.projects);
    const controls = useAnimation();

    //need to set titles out of view to animated them in when projects are set
    useEffect(() => {
        //only want to animate when category is either back/fullstack/front
        if(projectsDetails[category.label] || (!category.label))
            controls.start("initial")
    },[category, controls]);
    
   

    const handleSliderAnimationEnd = useCallback(() => {
        controls.start("animate")
    },[controls]);

    return(
        <motion.div className = {classes.container}>
           { projects.map(( project: ProjectItemType, i) => {
               return(
                   <motion.div
                        variants = { sliderVariants } 
                        onAnimationComplete = { handleSliderAnimationEnd }
                        whileHover = "hover"
                        initial = {false}
                        animate = {controls}
                        className = {classes.block} 
                        key = {i} 
                    >
                        <motion.span
                            variants = { hoveredVariants } 
                            className = {classes.bar}
                        >
                        </motion.span>
                        <span className = {classes.label}>{project.title}</span>
                   </motion.div>
               )
           })}
        </motion.div>
    )
}