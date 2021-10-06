import { AnimatePresence } from 'framer-motion';
import { Story } from './Story';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../../state/store';
import { useAboutSectionsStyle } from '../../../assets/styles/index.styles';
import AboutSubNavigation from '../AboutSubNavigation';

const variants = {

}
export const SectionIndex = () => {

    const section = useSelector((state: RootStateType) => state.section)
    const classes = useAboutSectionsStyle();

    return(
        <AnimatePresence exitBeforeEnter>
            <div className = {classes.root} key = {section.label}>
                <AboutSubNavigation />
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
        case 'story' : 
            return <Story />
        default : return null
    }
}