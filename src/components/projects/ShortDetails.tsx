import { useShortDetailsStyle } from "../../assets/styles/index.styles";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ProjectItemType } from "../../utils/projectsDetails";
import { CloseIconButton } from "../CloseIconButton";
import { AnimatedUnderline } from "../AnimatedUnderline";
import { RedirectBtn } from "../RedirectBtn";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useEffect } from "react";

type ShortDetailsPropsType = {
    item : ProjectItemType;
    setExpand : (expand : boolean) => void
    id : string;
    canOpen : boolean;
    currentId : string;
    setCurrentId : (current : string) => void
}

const presenceVariants : Variants = {
    expand : {
        width :'100%',
        height : '100%',
        clipPath : 'circle(75%)',
        opacity : 1,
        transition : {
            duration : 1
        }
    },
    exit : {
        width :'0',
        height : '0',
        clipPath : 'circle(15%)',
        opacity : 0,
        transition : {
            duration : 1
        }
    }
}

export const ShortDetails = ({item, id, currentId, setExpand, canOpen, setCurrentId} : ShortDetailsPropsType) => {
    const classes = useShortDetailsStyle();
    
    const handleClose = () =>{
        setExpand(false);
        setCurrentId('');
    }
    
    return(
        <AnimatePresence>
            {
                (id === currentId) && canOpen && 
                <motion.div
                    variants = { presenceVariants } 
                    animate = 'expand'
                    exit = 'exit'
                    initial = 'exit'
                    className = {classes.container}
                    onClick = { handleClose }
                >
                    <CloseIconButton action = { handleClose } />
                    <h2 
                        className = {classes.title}
                        style = {item.captionStyle}
                    >
                        { item.title }
                        <AnimatedUnderline bg = { item.underlineColor } />
                    </h2>

                    <p className = {classes.description}>{ item.description }</p>

                    <h4 className = {classes.stack}>stack : {item.stack} </h4>

                    <RedirectBtn label = "visit" link = { item.link }>
                        <OpenInNewIcon />
                    </RedirectBtn>
                </motion.div>
            }
        </AnimatePresence>
    )
}