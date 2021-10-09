import { AnimatePresence } from 'framer-motion';
import { Story } from './Story';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../../state/store';
import { useAboutSectionsStyle } from '../../../assets/styles/index.styles';
import HardSkills from './HardSkills';
import SoftSkills from './SoftSkills';

export const AboutSectionsIndex = () => {
    const section = useSelector((state: RootStateType) => state.section)
    const classes = useAboutSectionsStyle();

    return(
        <AnimatePresence >
            <div className = {classes.root} key = {section.label}>
                <Switch label = {section.label}/>   
            </div>
        </AnimatePresence>
    )
};

type SwitchProps = {
    label : string
};

function Switch({label} : SwitchProps){
    switch(label){
        case 'story' : return <Story />;
        case 'hard skills' : return <HardSkills />
        case 'soft skills' : return <SoftSkills />
        default : return null
    }
}