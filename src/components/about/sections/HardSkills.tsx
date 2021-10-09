import { useHardSkillsStyle, useBlockTitleStyle } from '../../../assets/styles/index.styles';
import { Divider } from '@material-ui/core';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../../state/store';
import { AnimateUnderLine } from '../../AnimateUnderLine';
//animation variants
const variants = {
    open : {
        y : 0,
        opacity :1,
        transition : {
            delay : 0.3,
            duration : .7,
        }
    },
    hidden : position => ({
       y : position === 3 ? -100 : 100,
        opacity :0,
        transition : {
            duration : .5
        }
    })
}

export default function HardSkills(){
    const classes = useHardSkillsStyle();
    const titleClasses = useBlockTitleStyle();
    const section = useSelector((state : RootStateType) => state.section);

    return(
        <motion.div 
            className = {classes.root}
            variants = {variants}
            custom = { section.position }
            initial = 'hidden'
            animate = 'open'
            exit = 'hidden'
        >
            <div className = {classes.section}>
                <h3 className = {titleClasses.blockTitle}>
                    Stack
                    <AnimateUnderLine bg = '#f00'/>
                </h3>
                <ul className = {classes.block}> 
                    <li className = {classes.techno}>Javascript</li>
                    <li className = {classes.techno}>Typescript</li>
                    <li className = {classes.techno}>ReactJS</li>
                    <li className = {classes.techno}>Redux</li>
                    <li className = {classes.techno}>NodeJs</li>
                    <li className = {classes.techno}>ExpressJs</li>
                    <li className = {classes.techno}> Mysql </li>
                    <li className = {classes.techno}> Sequelize </li>
                    <li className = {classes.techno}>ElectronJs</li>
                </ul>
            </div>
            <Divider component = 'div' orientation = 'vertical' className = {classes.divider}/>
            <div className  = {classes.section}>
                <h3 className = {titleClasses.blockTitle}>
                    Work flow 
                    <AnimateUnderLine bg = '#f00'/>
                </h3>
                <ul className = {classes.block}>
                    <li className = {classes.techno}>Git</li>
                    <li className = {classes.techno}>Github</li>
                    <li className = {classes.techno}>Figma</li>
                    <li className = {classes.techno}>vs code</li>
                </ul>
            </div>
        </motion.div>
    )
    
}