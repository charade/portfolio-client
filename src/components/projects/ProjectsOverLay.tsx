import { motion } from 'framer-motion';
import { useMediaQuery } from '@material-ui/core';
import { ProjectsCategoriesSlider} from './projectsCategoriesSlider';
import { CategoriesNavigation } from "./CategoriesNavigation";
import { useProjectOverLayStyle } from "../../assets/styles/index.styles";
import { ProjectIndicator } from "./ProjectIndicator";
import { device } from "../../utils/device";
import { useEffect } from 'react';

export const ProjectsOverLay = () => {
    const canDisplayIndicator = useMediaQuery(device.md);
    
    useEffect(() => {
        console.log(canDisplayIndicator)

    }, [canDisplayIndicator]);

    const classes = useProjectOverLayStyle();
    return(
        <motion.div className = {classes.overlay}>
            <div className = {classes.navContainer}>
                <CategoriesNavigation/>
            </div>
            <div className = {classes.box}>
                { canDisplayIndicator && <ProjectIndicator />}
                <ProjectsCategoriesSlider />
            </div>
        </motion.div>
    )
}