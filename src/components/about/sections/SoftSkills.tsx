import { motion } from 'framer-motion';
import { useSoftSkillsStyle, useBlockTitleStyle } from '../../../assets/styles/index.styles';
import { AnimateUnderLine } from '../../AnimateUnderLine';
import { color } from '../../../utils/color';
import { softsSkills, SoftSkillsType } from "../../../utils/softSkills";

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
            { softsSkills.map((skill: SoftSkillsType, index )=> (
                /* block containing title and description */
                <div className = {classes.section} key = {index}>
                    <h3 className = {titleClasses.blockTitle}>
                        { skill.label }
                        <AnimateUnderLine bg = { skill.underlineColor }/>
                    </h3>
                    <p className = {classes.text}>
                        { skill.description }
                    </p>
                </div>
            ))}
        </motion.div>
    )
}