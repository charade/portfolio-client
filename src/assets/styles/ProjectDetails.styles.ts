import { makeStyles } from "@material-ui/core";
import { color } from "../../utils/color";

const useProjectDetailsStyle = makeStyles(theme => ({
    detailsContainer : {
        zIndex: 4,
        position : 'absolute',
        height: '100%',
        width : '100%',
        // top :'50%',
        // left : '50%',
        // transform : 'translate(-100%, -100%)',
        background : 'rgba(0, 0, 0, 1)',
        backgroundSize : 'contain',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center center',
        display : 'flex',
        alignItems : 'center',
        boxShadow : `0 0 7px ${color.white}`,
        borderRadius : '20px',
        overflow : 'hidden'
        // justifyContent : 'center'
        // border : '2px solid yellow'
    },
    img : {
        width : `${230 * window.devicePixelRatio}px`,
        height: '100%',
        // borderRadius : '15px',
        border : 'none',
        boxShadow : '0 0 5px white',
        // margin : '20px'
    },
    box : {
        position : 'relative',
        display : 'flex',
        flexDirection : 'column',
        padding: '5px 15px',
        // justifyContent : 'flex-start',
        height : '100%',
        // '& > *' : {
        //     margin :0
        // },
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
    link : {
        position : 'absolute',
        bottom : '5%',
        right :'5%',
        color : color.lightBlue,
        fontSize : `${.4 * window.devicePixelRatio}rem`,
        border : '1px solid rgba(255, 255, 255, .5)',
        borderRadius : '8px',
        padding :'3px 5px',
        transition : '.1s linear',
        '&:hover' : {
            background : color.lightBlue,
            color : color.gray,
        }
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