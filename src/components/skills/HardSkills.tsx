import { useHardSkillsStyle } from '../../assets/styles/index.styles';
import { Divider } from '@material-ui/core';

export default function HardSkills(){
    const classes = useHardSkillsStyle();

    return(
        <div className = {classes.root}>
            <div className = {classes.section}>
                <h3 className = {classes.blockTitle}>Programming languages</h3>
                <ul> 
                    <li className = {classes.block}>
                        <ul>
                            <li className = {classes.techno}>Javascript (es5 / es6)</li>
                            <li className = {classes.techno}>Typescript</li>
                        </ul>
                    </li>
                    <li className = {classes.block}>
                        <h3 className = {classes.blockTitle}>Front-end</h3>
                        <ul>
                            <li className = {classes.techno}>ReactJS</li>
                            <li className = {classes.techno}>Redux</li>
                        </ul>
                    </li>
                    <li className = {classes.block}>
                        <h3 className = {classes.blockTitle}>Back-end</h3>
                        <ul>
                            <li className = {classes.techno}>NodeJs</li>
                            <li className = {classes.techno}>Express Server</li>
                        </ul>
                    </li>
                    <li className = {classes.block}>
                        <h3 className = {classes.blockTitle}>Data base</h3>
                        <ul>
                            <li className = {classes.techno}> Mysql </li>
                            <li className = {classes.techno}> Sequelize </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <Divider component = 'div' orientation = 'vertical' className = {classes.divider}/>
            <div className  = {classes.section}>
                <h3 className = {classes.blockTitle}> Work flow </h3>
                <ul>
                    <li className = {classes.techno}>Git</li>
                    <li className = {classes.techno}>Github</li>
                    <li className = {classes.techno}>Figma</li>
                    <li className = {classes.techno}>Vs code</li>
                </ul>
            </div>
        </div>
    )
    
}