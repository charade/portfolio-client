import { useProjectsCategoriesSliderStyle } from "../../assets/styles/index.styles";
import { useSelector, useDispatch } from "react-redux";
import { ReducerRootStateType } from "../../state/store";
import { bindActionCreators } from "redux";
import * as projectsActionCreators from "../../state/action-creators/projects-action-creators";
import { motion, Variants } from "framer-motion";
import { Card } from "../Card";
import { projectsDetails } from "../../utils/projectsDetails";
import { useCallback, useEffect, useState } from "react";

const contentVariants : Variants = {
    //when content is out of view
    start : {
        x : 300,
        opacity : 0,
        transition : {
            duration : .5
        }
    },
    //when content get back into view
    exit : {
        x : 0,
        opacity : 1,
        transition : {
            type : "spring",
            damping : 30,
            // duration : .1
        }
    },
};

export const ProjectsCategoriesSlider = () => {
    const classes = useProjectsCategoriesSliderStyle();
    const dispatch = useDispatch();
    const { loadProjects } = bindActionCreators(projectsActionCreators, dispatch);
    const category = useSelector((store : ReducerRootStateType) => store.category);
    const projects = useSelector((store : ReducerRootStateType) => store.projects);
    const [transitionActive, setTransitionActive] = useState<boolean>(false);

    //wait transtion exit end to load projects card
    const handleTransitionEnd = useCallback(()=>{
        //check if category is either front, back or fullstack
        //before getting projects list
        if(projectsDetails.hasOwnProperty(category.label)){
            loadProjects(projectsDetails[category.label])
        }
    },[category,loadProjects]);
    
    //listening to user change category to start animating
    useEffect(() => {
        setTransitionActive(!transitionActive);
    },[category]);
    
    //content in/out animation delay
     useEffect(() => {
        if(transitionActive){
            setTimeout(() => setTransitionActive(false), 600)
       }
     },[transitionActive]);

    return(
        <motion.div 
            onAnimationComplete = { handleTransitionEnd }
            className = {classes.container}
            variants = { contentVariants }
            animate = { transitionActive ? "start" : "exit"}
            initial = "start"
        >
            { projects.map( project => (
                <Card />
            ))}
        </motion.div>
    )
}
