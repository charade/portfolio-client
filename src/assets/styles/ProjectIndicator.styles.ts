import { makeStyles } from "@material-ui/core";
import { color } from "../../utils/color";

const useProjectIndicatorStyle = makeStyles(theme => ({
    container : {
        height : "100%",
        width : '36rem',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        '& > *' :{
            marginBottom : '1rem'
        },
        marginLeft :"13rem"
        
    },
    block : {
        display : 'flex',
        alignItems : 'center',
        transition : 'flex .3s ease',
        '& > *' : {
            margin : '5px',
        },
    },
    bar :{
        width: '70px',
        height : '3px',
        background : `${color.red}`,
        borderTopLeftRadius : '0.5rem',
        borderBottomLeftRadius : '0.5rem',
    },
    label : {
        fontSize :`${.8 * window.devicePixelRatio}rem`,
    }
}))

export default useProjectIndicatorStyle;