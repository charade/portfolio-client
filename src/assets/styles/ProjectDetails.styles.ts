import { makeStyles } from "@material-ui/core";
import { color } from "../../utils/color";

const useProjectDetailsStyle = makeStyles(theme => ({
    detailsContainer : {
        zIndex: 4,
        position : 'absolute',
        height: '100%',
        width : '100%',
        top : 0,
        left:0,
        background : 'rgba(0, 0, 0, 1)',
        backgroundSize : 'contain',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center center',
        display : 'flex',
        alignItems : 'center',
        boxShadow : `0 0 7px ${color.white}`,
        borderRadius : '20px',
        overflow : 'hidden'
    },
    img : {
        width : "50%",
        height: '100%',
        border : 'none',
        boxShadow : '0 0 5px white',
    },
    box : {
        position : 'relative',
        display : 'flex',
        flexDirection : 'column',
        padding: '5px 15px',
        height : '100%',
    },
    caption : {
        // border :'2px solid red',
        width : '100%',
        margin : '2% 0',
        display : 'flex',
        flexDirection : 'column',
        '& > *' : {
            margin : '5px'
        }
    },
    description: {
        fontSize : `${.68 * window.devicePixelRatio}rem`,
        margin : '5% 0'
        // border :'2px solid white'
    },
    stack : {
        fontSize : `${.55 * window.devicePixelRatio}rem`,
        fontWeight : 500
    },
    
    closeBtn :{
        padding : '3px',
        border: '1px solid rgba(255, 255, 255, .4)',
        width :'40px',
        height :'40px',
        color : color.gray,
        alignSelf : 'flex-end'
    }
}));

export default useProjectDetailsStyle;