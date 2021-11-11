import { useProjectsCategoriesSliderStyle } from "../../assets/styles/index.styles";
import { useSelector, useDispatch } from "react-redux";
import { ReducerRootStateType } from "../../state/store";
import { bindActionCreators } from "redux";
import * as projectsActionCreators from "../../state/action-creators/projects-action-creators";
import { AnimatePresence, AnimateSharedLayout, motion, Variants } from "framer-motion";
import { Card } from "../Card";
import { projectsDetails } from "../../utils/projectsDetails";
import { useCallback, useEffect, useState } from "react";
import { ProjectDetails, SelectedItem } from "./ProjectDetails";
import { useMediaQuery } from "@mui/material";
import { device } from "../../utils/device";

const contentVariants : Variants = {
    //when content is out of view
    start : {
        x : 300,
        opacity : 0,
        transition : {
            duration : .3
        }
    },
    //when content get back into view
    exit : {
        x : 0,
        opacity : 1,
        transition : {
            type : "spring",
            damping : 20,
        }
    },
};

export const ProjectsCategoriesSlider = () => {
    const [transitionActive, setTransitionActive] = useState<boolean>(false);
    const [expand, setExpand] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<SelectedItem>();
    const dispatch = useDispatch();
    const { loadProjects } = bindActionCreators(projectsActionCreators, dispatch);
    const category = useSelector((store : ReducerRootStateType) => store.category);
    const projects = useSelector((store : ReducerRootStateType) => store.projects);
    const classes = useProjectsCategoriesSliderStyle();
    const canCrossfadeOnExpand = useMediaQuery(device.sm);

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
        if(projectsDetails.hasOwnProperty(category.label))
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
            initial = "exit"
        >
            <AnimateSharedLayout type = 'crossfade'>
                { projects.map((project, i) => (
                    <Card
                        setSelected = { setSelectedItem } 
                        setExpand = { setExpand }
                        itemKey = {`project-item${i}`} 
                        item = {project}
                        expand = {expand}
                    />
                ))}
                {/* animating on component unmounting */}
                {
                    canCrossfadeOnExpand &&
                    <AnimatePresence>
                        { expand && <ProjectDetails setExpand = {setExpand} selected = {selectedItem}/>}
                    </AnimatePresence>
                }
            </AnimateSharedLayout>
        </motion.div>
    )
}
