import { useProjectDetailsStyle } from "../../assets/styles/index.styles";
import { motion, Variants } from "framer-motion";
import { ProjectItemType } from "../../utils/projectsDetails";
import { AnimatedUnderline } from "../AnimatedUnderline";
import { CloseIconButton } from "../CloseIconButton";
import { RedirectBtn } from "../RedirectBtn";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export interface SelectedItem {
    item : ProjectItemType;
    layoutId : string
}
type ItemsDetailsType = {
    selected : SelectedItem;
    setExpand : (expand : boolean) => void
};


const backdropVariants : Variants = {
    expand : {
        opacity : 1,
        backdropFilter : 'grayscale(100%) blur(10px)',
    },
    exit : {
        backdropFilter : 'grayscale(0)',
        opacity : 0,
    }
};
const imageVariants : Variants = {
    expand : {
        filter : 'grayscale(0%)',
        transition :{
            duration : .5
        }
    },
    exit : {
        filter : 'grayscale(100%)'
    }
}


export const ProjectDetails = ({selected, setExpand} : ItemsDetailsType) => {
    const classes = useProjectDetailsStyle();

    const handleCloseDetails = () => setExpand(false);

    return(
        <motion.div 
            variants= {backdropVariants}
            animate = 'expand'
            exit = 'exit'
            className = {classes.backdrop}
        >
            <motion.div
                layoutId = {`layer-${selected.layoutId}`}
                className = {classes.detailsContainer} onClick = {handleCloseDetails}
                aria-label = {`${selected.item.title}-project-detail`}
                >
                <motion.img
                    variants = {imageVariants}
                    animate = 'expand'
                    exit = 'exit'
                    initial = 'exit'
                    layoutId = { `image-${selected.layoutId}` } 
                    className = {classes.img} 
                    src = {selected.item.image} 
                    alt = {`${selected.item.title}-project`}
                />
                <motion.div className = {classes.box }>
                    <CloseIconButton action = { handleCloseDetails }/>
                    <motion.h2
                        layoutId = {`caption-${selected.layoutId}`}
                        className = {classes.caption} 
                        style = { selected.item.captionStyle }
                        >
                        { selected.item.caption }
                        <AnimatedUnderline bg = { selected.item.underlineColor }/>
                    </motion.h2>
                    <p className = {classes.description}> { selected.item.description } </p>
                    <h4 className = {classes.stack}>stack : { selected.item.stack }</h4>
                    <RedirectBtn link = {selected.item.link} label = "visit">
                        <OpenInNewIcon />
                    </RedirectBtn>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

