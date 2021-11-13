import { useCallback, useEffect, useState } from "react";
import { useCardStyle } from "../assets/styles/index.styles";
import { ProjectItemType } from "../utils/projectsDetails";
import { motion } from "framer-motion";
import { SelectedItem } from "./projects/ProjectDetails";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { IconButton, useMediaQuery } from '@material-ui/core';
import { ShortDetails } from "./projects/ShortDetails";
import { device } from "../utils/device";

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
    const isScreenSmall = !useMediaQuery(device.sm);
    //when device mobile only expand choosen one details
    const [currentId, setCurrentId] = useState<string>('');

    //open datails
    const handleExpand = useCallback(async() =>{
        //save expanding item id and datas
        setSelected({layoutId : itemKey, item : item});
        //open details when animation totally done to avoid flickering on transform scale
        await setCurrentId(itemKey)
        setTimeout(async() => {
            setExpand(true);
        },0)
        
    },[setSelected, setExpand, item, itemKey])

    useEffect(() => {
        console.log(currentId)
    },[currentId]);

    return(
        <motion.div
            aria-label = {`${item.title}-project-details`}
            className = {classes.mainContainer}
        >
            <motion.div onClick = { handleExpand } className = {classes.cardContainer}>
                <motion.h2
                    layoutId = {`caption-${itemKey}`} 
                    className = {classes.caption} 
                    style = { item.captionStyle}
                >
                    { item.caption }
                </motion.h2>
                <motion.div layoutId = {`layer-${itemKey}`} className = {classes.lowerLayer}></motion.div>
                <motion.img 
                    layoutId = {`image-${itemKey}`}
                    className = {classes.upperLayer} 
                    src = {item.image}
                    alt = {`${item.title}-project`}
                />
                <IconButton 
                    onClick = {  handleExpand } 
                    className = {classes.expandBtn}
                    aria-label = "expand-card"
                >
                    <OpenInFullIcon />
                </IconButton>
            </motion.div>
            {/* only open if device screen <= xs over selected card*/}
            <ShortDetails
                canOpen = {isScreenSmall && expand} 
                setExpand = { setExpand }
                item = { item }
                id = { itemKey }
                currentId = { currentId}
                setCurrentId = { setCurrentId }
            />
            
        </motion.div>
    )
}