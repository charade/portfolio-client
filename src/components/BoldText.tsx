import { useBoldTextStyle } from "../assets/styles/index.styles";
import { AnimatedUnderline } from "./AnimatedUnderline";
import { color } from "../utils/color";

export const BoldText = () => {
    const classes = useBoldTextStyle();

    return(
        <h2 className = { classes.bold }>
           Get in touch with me
           <AnimatedUnderline bg = { color.orange }/>
        </h2>
    )
}