import { useState, useMemo } from 'react';
import { useSubNavigationStyle, useNavigationCirclesStyle } from '../../assets/styles/index.styles';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoriesActionCreators from  '../../state/action-creators/categories-action-creators';
import { ReducerRootStateType } from "../../state/store";
import { aboutCategories, AboutCategoryProperties } from "../../utils/aboutCategories";

export default function AboutSubNavigation(){
        
    const [selected, setSelected] = useState<string>('');
    const classes = useSubNavigationStyle();
    const circleNavigationClass = useNavigationCirclesStyle();
    const dispatch = useDispatch();
    const { setCategory } = bindActionCreators(categoriesActionCreators, dispatch);
    const category = useSelector((store : ReducerRootStateType) => store.category);

    //check if category is in [soft skills, hard skills , story]
    const isSelectedLabelValid = useMemo(()=> {
        return category.label === 'soft skills' || 
        category.label === 'hard skills' || category.label === 'story'
    },[category]);

    const handleIndicatorPos = (e : React.PointerEvent<HTMLSpanElement>) => {
        const target = e.target as HTMLSpanElement;
        const selectedLabel = target.getAttribute('aria-label');
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
        };
        setCategory(payload);
    };

    return(
        <AnimateSharedLayout>
            <div className = {classes.root}>
                {aboutCategories.map((section : AboutCategoryProperties, i : number) => {
                    return(
                        <div
                            key = {i}
                            className = {classes.block}
                            style = {section.style}
                        >
                            
                            <SectionItem
                                 classes = {circleNavigationClass}
                                 //if selected label not in {soft skill, hard skill, story}
                                 //lighting ball desapear
                                 isSelected = { selected === section.label && isSelectedLabelValid}
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
};

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