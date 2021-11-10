import React, { useMemo, useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useNavigationCirclesStyle, useCategoriesNavigationStyle } from '../../assets/styles/index.styles';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as categoriesActionCreators from  '../../state/action-creators/categories-action-creators';

export const CategoriesNavigation = () =>{
    const [selected, setSelected] = useState<string>('');
    const dispatch = useDispatch();
    const { setCategory } = bindActionCreators(categoriesActionCreators, dispatch);
    const navigationItemsClasses = useNavigationCirclesStyle();
    const classes = useCategoriesNavigationStyle();

    const categories = useMemo(() => {
        return['front', 'back', 'fullstack']
    },[]);
    
    const handleChooseCategory = (e : React.MouseEvent<HTMLDivElement>) => {
        const target = e.currentTarget as HTMLDivElement;
        const label = target.getAttribute('aria-labelledby');
        let position = 0;
        switch(label){
            case 'front' : 
                position = 1;
                break;
            case 'back' : 
                position = 2;
                break;
            default : 
                position = 3;
                break
        }
        setCategory({label, position});
        //animate lighting ball
        setSelected(label)
    };

    return(
        <motion.div className = {classes.root}>
            <AnimateSharedLayout>
                {categories.map((category, i) => {
                    return(
                        <>
                            <div
                                className = {classes.box} 
                                aria-labelledby = { category }
                                onClick = { handleChooseCategory }
                                key = {`${category}-catagory`} 
                                role = 'button'
                            >
                                <span 
                                    className = {navigationItemsClasses.circle}
                                    onClick = {() => setSelected(category)}
                                >
                                    {/* animated lighting ball */}
                                    {selected === category &&
                                        <motion.span 
                                            layoutId = "indicator"
                                            className = {navigationItemsClasses.indicator}
                                        >
                                        </motion.span>
                                    }
                                </span>
                                <h3 className = {navigationItemsClasses.label}>
                                    {category}
                                </h3>
                            </div>
                            {/* ensure to only adding separator between circles*/}
                            { (i < (categories.length - 1)) && <span className = {classes.separator}></span> }
                        </>
                    )
                })}
            </AnimateSharedLayout>
        </motion.div>
    )
}