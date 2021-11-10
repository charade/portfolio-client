import { makeStyles } from "@material-ui/core";
import { color } from "../../utils/color";

const useNavigationCirclesStyle = makeStyles({
    circle : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        cursor : 'pointer',
        width : `${7 * window.devicePixelRatio}px`,
        height : `${7 * window.devicePixelRatio}px`,
        background : color.dark,
        border : `1px solid ${color.lightBlue}`,
        borderRadius : '50%',
    },
    indicator:{
        width : '9px',
        height: '9px',
        borderRadius : '50%',
        background : 'white',
        boxShadow :'-2px 0 10px gold; 2px 0 30px white; 0 2px 20px gold; 0 -2px 30px white'
    },
    label :{
        cursor : 'pointer',
        fontSize : `${.7 * window.devicePixelRatio}rem`,
        fontWeight : 300
    },
})

export default useNavigationCirclesStyle;