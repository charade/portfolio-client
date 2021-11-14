import { useBoldTextStyle } from "../assets/styles/index.styles";
import { AnimatedUnderline } from "./AnimatedUnderline";
import { color } from "../utils/color"
export const BoldText = ({text} : {text : string}) => {
    const classes = useBoldTextStyle();

    return(
        <h2 className = { classes.bold }>
           { text }
           <AnimatedUnderline bg = { color.orange }/>
        </h2>
    )
}