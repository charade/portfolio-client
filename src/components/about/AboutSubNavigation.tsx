import { useState, useMemo } from 'react';
import { useSubNavigationStyle, useNavigationCirclesStyle } from '../../assets/styles/index.styles';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from  '../../state/action-creators/switchAction-creators';

type PositionT = {
    top : string;
    left : string;
};
type SectionProperties = {
    label : string,
    style : PositionT
};

export default function AboutSubNavigation(){
        
    const [selected, setSelected] = useState<string>('');
    const classes = useSubNavigationStyle();
    const circleNavigationClass = useNavigationCirclesStyle();
    const dispatch = useDispatch();
    const { switchSection } = bindActionCreators(actionCreators, dispatch);

    const sections = useMemo(() => [
        {
            label : 'story',
            style: {
                top : '32.5%',
                left : '95.3%'
            }
        },
         {
            label : 'hard skills',
            style : {
                top : '70%',
                left : '83.5%' 
            }
        },
        {
            label : 'soft skills',
            style : {
                flexDirection : 'column',
                top : '87.5%',
                left : '-10%' 
            }
        },
    ],[]);
    
    
    const handleIndicatorPos = (e : React.PointerEvent<HTMLSpanElement>) => {
        const target = e.target as HTMLSpanElement;
        const selectedLabel = target.getAttribute('aria-label')
        setSelected(selectedLabel);
        let position = 0;
        //each label corresponds to a position;
        
        switch(selectedLabel){
            case 'story' : 
                position = 1;
                break;
            case 'hard skills' : 
                position = 2;
                break;
            case 'soft skills' : 
                position = 3;
                break;
            default : return
        };

        const payload = {
            label : selectedLabel,
            position
        }

        switchSection(payload);
    };

    return(
        <AnimateSharedLayout>
            <div className = {classes.root}>
                {sections.map((section : SectionProperties, i : number) => {
                    return(
                        <div
                            key = {i}
                            className = {classes.block}
                            style = {section.style}
                        >
                            
                            <SectionItem
                                 classes = {circleNavigationClass}
                                 isSelected = { selected === section.label }
                                 onClick = { handleIndicatorPos }
                                 ariaLabel = {section.label}
                            />
                            <h3 className = {circleNavigationClass.label}>{section.label}</h3> 
                        </div>
                    )
                })}
            </div>
        </AnimateSharedLayout>
    )
}

const SectionItem = ({classes, onClick, ariaLabel, isSelected}) => {
    return(
        <span 
            className = {classes.circle}
            onClick = { onClick }
            aria-label = { ariaLabel }
        >
            {isSelected && 
                <motion.span
                    className = {classes.indicator}
                    initial = {false}
                    layoutId = "indicator"
                    // transition = {spring}
                />}
        </span>
    )
    

    
}