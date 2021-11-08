import { ProjectsCategoriesSlider} from './projectsCategoriesSlider';
import { CategoriesNavigation } from "./CategoriesNavigation";
import { useProjectsStyle } from "../../assets/styles/index.styles";

export const ProjectsOverLay = () => {
    const classes = useProjectsStyle();
    return(
        <div className = {classes.overlay}>
            <CategoriesNavigation/>
            <ProjectsCategoriesSlider />
        </div>
    )
}