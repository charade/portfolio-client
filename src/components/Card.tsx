import React from "react";
import { useCardStyle } from "../assets/styles/index.styles";
import { ProjectItemType } from "../utils/projectsDetails";
import {  motion } from "framer-motion";
import { SelectedItem } from "./projects/ProjectDetails";
import { useMediaQuery } from "@mui/material";
import { RedirectBtn } from './RedirectBtn';

type CardProps = {
    itemKey : string
    item : ProjectItemType
    setSelected : (selected : SelectedItem) => void
    //trigger expand evnt
    setExpand : (expand : boolean) => void
    expand : boolean
};

export const Card = (props : CardProps) => {
    const classes = useCardStyle();

    const handleHandleExpand = () =>{
        //save expanding item id and datas
        props.setSelected({layoutId : props.itemKey, item : props.item});
        //open details
        props.setExpand(true);
    } 

    return(
        <motion.div
            onClick = { handleHandleExpand }
            aria-label = {`${props.item.title}-project-details`}
            key = {props.itemKey}
            className = {classes.cardContainer}
        >
            <motion.h2  className = {classes.caption} style = { props.item.captionStyle}>
                { props.item.caption }
            </motion.h2>
            <div  className = {classes.lowerLayer}></div>
            <motion.img 
                layoutId = {props.itemKey}
                className = {classes.upperLayer} 
                src = {props.item.image}
                alt = {`${props.item.title}-project`}
            />
            <RedirectBtn link = { props.item.link }/>
        </motion.div>
    )
}