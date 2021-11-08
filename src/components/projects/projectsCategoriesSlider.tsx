import { useProjectsCategoriesSliderStyle } from "../../assets/styles/index.styles";
import { useSelector } from "react-redux";
import { ReducerRootStateType } from "../../state/store";
import { AnimatePresence } from "framer-motion";
import { Card } from "../Card";

export const ProjectsCategoriesSlider = () => {
    const classes = useProjectsCategoriesSliderStyle();
    const category = useSelector((store : ReducerRootStateType) => store.category);

    return(
        <AnimatePresence>
            <div className = {classes.container}>
                <Card />
            </div>
        </AnimatePresence>
    )
}


// function Switch({label} : {label : string}){
//     switch(label){
//         case 'story' : return;
//         case 'hard skills' : return 
//         case 'soft skills' : return 
//         default : return null
//     }
// }