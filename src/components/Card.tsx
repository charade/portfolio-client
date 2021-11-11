import React, { useCallback } from "react";
import { useCardStyle } from "../assets/styles/index.styles";
import { ProjectItemType } from "../utils/projectsDetails";
import { motion } from "framer-motion";
import { SelectedItem } from "./projects/ProjectDetails";
import { RedirectBtn } from './RedirectBtn';

type CardProps = {
    itemKey : string
    item : ProjectItemType
    setSelected : (selected : SelectedItem) => void
    //trigger expand evnt
    setExpand : (expand : boolean) => void
    expand : boolean
};

export const Card = ({item, itemKey, setSelected, setExpand, expand} : CardProps) => {
    const classes = useCardStyle();

    const handleHandleExpand = useCallback(async() =>{
        //save expanding item id and datas
        setSelected({layoutId : itemKey, item : item});
        //open details when animation totally done to avoid flickering on transform scale
        setTimeout(() => setExpand(true),350);
    },[setSelected, setExpand, item, itemKey])

    return(
        <motion.div
            onClick = { handleHandleExpand }
            aria-label = {`${item.title}-project-details`}
            key = {itemKey}
            className = {classes.cardContainer}
        >
            <motion.h2
                layoutId = {`caption-${itemKey}`} 
                className = {classes.caption} 
                style = { item.captionStyle}
            >
                { item.caption }
            </motion.h2>
            <motion.div layoutId = {`layer-${itemKey}`} className = {classes.lowerLayer}>
            </motion.div>
            <motion.img 
                layoutId = {`image-${itemKey}`}
                className = {classes.upperLayer} 
                src = {item.image}
                alt = {`${item.title}-project`}
            />
            <RedirectBtn link = { item.link }/>
        </motion.div>
    )
}