import { motion } from 'framer-motion';
import { useSoftSkillsStyle, useBlockTitleStyle } from '../../../assets/styles/index.styles';
import { AnimateUnderLine } from '../../AnimateUnderLine';
import { color } from '../../../utils/color';

const variants = {
    open : {
        y : 0,
        opacity : 1,
        transition : {
            duration : .4,
            delay : .4
        }
    },
    hidden : {
        y : 100,
        opacity : 0,
        transition : {
            duration : .3
        }
    }
}
export default function SoftSkills(){
    const classes = useSoftSkillsStyle();
    const titleClasses = useBlockTitleStyle();

    return(
        <motion.div
            className = {classes.root}
            variants = {variants}
            initial = 'hidden'
            animate = 'open'
            exit = 'hidden'
        >
            <div className = {classes.section}>
                <h3 className = {titleClasses.blockTitle}>
                    team player
                    <AnimateUnderLine bg = {color.gray}/>
                </h3>
                <p className = {classes.text}>
                    what is better than pair-programming ?
                    or knowledges sharing ?
                 </p>
            </div>
            <div className = {classes.section}>
                <h3 className = {titleClasses.blockTitle}>
                    self-taught
                    <AnimateUnderLine bg = {color.lightGreen}/>
                </h3>
                <p className = {classes.text}>
                    I'm one of those who spend their free time 
                    learning new things.
                </p>
            </div>
            <div className = {classes.section}>
                <h3 className = {titleClasses.blockTitle}>
                    Challenge-seeker
                    <AnimateUnderLine bg = {color.lightBlue} />
                </h3>
                <p className = {classes.text}>
                    Constantly discovering new issues, new concepts, is what i like the most in programming.
                </p>
            </div>
        
        </motion.div>
    )
}