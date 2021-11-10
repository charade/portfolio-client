import { makeStyles } from "@material-ui/core";
import { color } from "../../utils/color";

const useCardStyle = makeStyles(theme => ({
    cardContainer : {
        position : 'relative',
        display : 'flex',
        justifyContent : 'flex-end',
        alignItems : 'center',
        width : `${13 * window.devicePixelRatio}rem`,
        height : '90%',
        margin : ' 0 10px',
        overflow : 'hidden',
        cursor : 'pointer',
        boxShadow : `0 0 7px ${color.white}`,
        borderRadius : '20px',
        '& > *:not(img)' : {
            position : 'absolute',
        }
    },
    caption : {
        zIndex : 2,
        fontWeight : 800,
        top : '-10px',
        left : '10px',
    },
    lowerLayer : {
        zIndex : -1,
        background : color.lightDark,
        opacity : .6,
        width : '100%',
        height : '100%',
    },
    upperLayer : {
        // zIndex : 2,
        backgroundSize : 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition : 'center center',
        margin : '55px  20px 0 0',
        width : `${9.5 * window.devicePixelRatio}rem`,
        height : '75%',
        filter : 'blur(1.3px)'
    },
}))

export default useCardStyle;