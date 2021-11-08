import { useMemo, useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { 
    useNavigationCirclesStyle, 
    useCategoriesNavigationStyle 
} from '../../assets/styles/index.styles';

export default function CategoriesNavigation(){
    const navigationItemsClasses = useNavigationCirclesStyle();
    const classes = useCategoriesNavigationStyle();
    const [selected, setSelected] = useState<string>('');

    const categories = useMemo(() => {
        return['front', 'back', 'fullstack']
    },[]);
    
    return(
        <motion.div className = {classes.root}>
            <AnimateSharedLayout>
                {categories.map((category, i) => {
                    return(
                        <>
                            <div
                                key = {`${category}-catagory`}
                            >
                                <span 
                                    className = {navigationItemsClasses.circle}
                                    onClick = {() => setSelected(category)}
                                >
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
                            {i < (categories.length - 1) &&
                                <span 
                                    className = {classes.separator}
                                >
                                </span>
                            }
                        </>
                    )
                })}
            </AnimateSharedLayout>
        </motion.div>
    )
}