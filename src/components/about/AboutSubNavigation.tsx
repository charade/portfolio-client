import { useState, useMemo } from 'react';
import { useSubNavigationStyle } from '../../assets/styles/index.styles';
import { motion, AnimateSharedLayout } from 'framer-motion';

type PositionT = {
    top : string;
    left : string;
};
type SectionProperties = {
    title : string,
    style : PositionT
};

const INDICATOR_INITIAL_POS = {top : '57.8px', left : '93.6%'};

export default function AboutSubNavigation(){
        
    const [indicatorPos, setIndicatorPos] =useState<PositionT>(INDICATOR_INITIAL_POS);
    const [selected, setSelected] = useState<string>('');
    const classes = useSubNavigationStyle()
    const sections = useMemo(() => [
        {
            title : 'story',
            style: {
                top : '40px',
                left : '93%'
            }
        },
         {
            title : 'hard skills',
            style : {
                top : '149px',
                left : '82%' 
            }
        },
        {
            title : 'soft skills',
            style : {
                flexDirection : 'column',
                top : '190px',
                left : '10%' 
            }
        },
       ],[]);
    
    const handleIndicatorPos = (e : React.MouseEvent<HTMLSpanElement>) => {
        const target = e.target as HTMLSpanElement;
        const selectedLabel = target.getAttribute('aria-label')
        setSelected(selectedLabel);
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
                                 selected = {selected} 
                                 classes = {classes}
                                 isSelected = { selected === section.title }
                                 onClick = { handleIndicatorPos }
                                 ariaLabel = {section.title}
                            />
                            <h3 className = {classes.title}>{section.title}</h3> 
                        </div>
                    )
                })}
            </div>
        </AnimateSharedLayout>
    )
}

const SectionItem = ({selected, classes, onClick, ariaLabel, isSelected}) => {
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
                    animate = {{x : 1}}
                    // transition = {spring}
                />}
        </span>
    )
    

    
}