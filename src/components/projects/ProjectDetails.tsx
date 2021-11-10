import { useProjectDetailsStyle } from "../../assets/styles/index.styles";
import { motion } from "framer-motion";
import { ProjectItemType } from "../../utils/projectsDetails";
import { AnimateUnderLine } from "../AnimateUnderLine";
import { IconButton } from '@material-ui/core';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

export interface SelectedItem {
    item : ProjectItemType;
    layoutId : string
}
type ItemsDetailsType = {
    selected : SelectedItem;
    setExpand : (expand : boolean) => void
};

const detailsVariants = {
    expand : {
        opacity : 1,
    },
    exit : {
        opacity : 0
    }
}

export const ProjectDetails = ({selected, setExpand} : ItemsDetailsType) => {
    const classes = useProjectDetailsStyle();

    const handleCloseDetails = () => setExpand(false);

    return(
        <motion.div 
            layoutId = { selected.layoutId }
            className = {classes.detailsContainer} onClick = {handleCloseDetails}
            aria-label = {`${selected.item.title}-project-detail`}
            variants = {detailsVariants}
            animate = "expand"
            exit = "exit"
        >
            <img className = {classes.img} src = {selected.item.image} alt = {`${selected.item.title}-project`}/>
            <div className = {classes.box }>
                <IconButton className = {classes.closeBtn}>
                    <CloseFullscreenIcon />
                </IconButton>
                <h2 className = {classes.caption} style = { selected.item.captionStyle }>
                    { selected.item.caption }
                    <AnimateUnderLine bg = { selected.item.underlineColor }/>
                </h2>
                <p className = {classes.description}> { selected.item.description } </p>
                <h4 className = {classes.stack}>stack : { selected.item.stack }</h4>
                <a className = {classes.link} href = {selected.item.link} target = "_external"  rel='opener'>
                    visit
                    <OpenInNewIcon />
                </a>
           </div>
        </motion.div>
    )
}

