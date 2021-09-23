import { useNavbarStyle } from "../../assets/styles/index.styles";

type Iposition = {
    position : {
        top : number,
        left : number
    }
}
export default function PanelIndicator(props : Iposition){
    const classes = useNavbarStyle();

    return(
        <span 
            className = {classes.panelIndicator} 
            style = {{...props.position}}
        >
        </span>
    )
}