import { AnimatePresence } from 'framer-motion';
import { Story } from './Story';
import { useSelector } from 'react-redux';
import { ReducerRootStateType } from '../../../state/store';
import { useAboutSlidersStyle } from '../../../assets/styles/index.styles';
import HardSkills from './HardSkills';
import SoftSkills from './SoftSkills';

export const AboutSliders = () => {
    const category = useSelector((state: ReducerRootStateType) => state.category)
    const classes = useAboutSlidersStyle();

    return(
        <AnimatePresence >
            <div className = {classes.root} key = {category.label}>
                <Switch label = {category.label}/>   
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