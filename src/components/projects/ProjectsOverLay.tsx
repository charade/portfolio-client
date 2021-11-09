import { ProjectsCategoriesSlider} from './projectsCategoriesSlider';
import { CategoriesNavigation } from "./CategoriesNavigation";
import { useProjectsStyle } from "../../assets/styles/index.styles";
import { ProjectIndicator } from "./ProjectIndicator";
import { motion } from 'framer-motion';
export const ProjectsOverLay = () => {
    const classes = useProjectsStyle();
    return(
        <motion.div layout = "position" className = {classes.overlay}>
            <CategoriesNavigation/>
            <ProjectIndicator />
            <ProjectsCategoriesSlider />
        </motion.div>
    )
}