import { makeStyles } from "@material-ui/core";
import { color } from "../../utils/color";

const useProjectDetailsStyle = makeStyles(theme => ({
    backdrop: {
        zIndex: 10,
        position : 'fixed',
        top : 0, 
        left:0,
        height: '100%',
        width : '100%',
        display : 'flex',
        justifyContent : 'center',
        alignItems :'center',
        background : 'rgba(0, 0, 0, .7)',
        backdropFilter : 'grayscale(100%) blur(10px)',
    },
    detailsContainer : {
        // position : 'absolute',
        height: '60%',
        width : '65%',
        top : 0,
        right:0,
        display : 'flex',
        // alignItems : 'center',
        boxShadow : `0 0 10px ${color.white}`,
        borderRadius : '25px',
        overflow : 'hidden',
        borderRight : '3px solid rgba(255, 255, 255, .7)',
        // border :'1px solid rgba(255, 255, 255, .8)',
    },
    img : {
        width : "50%",
        height: '100%',
        boxShadow : '0 0 10px white',
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
        fontSize : "3.5rem",
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