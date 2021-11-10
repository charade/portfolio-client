import { makeStyles } from "@material-ui/core";
import { color } from "../../utils/color";

const useProjectIndicatorStyle = makeStyles(theme => ({
    container : {
        height : "100%",
        width : '250px',
        // marginLeft : '200px',
        // marginRight : '150px',
        // border : "2px solid blue",
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        '& > *' :{
            marginBottom : '10px'
        },
        
    },
    block : {
        display : 'flex',
        cursor : 'pointer',
        alignItems : 'center',
        transition : 'flex .3s ease',
        '& > *' : {
            margin : '5px',
        },
    },
    bar :{
        width: '70px',
        height : '7px',
        background : color.lightBlue,
        borderTopLeftRadius : '5px',
        borderBottomLeftRadius : '5px',
    },
    label : {
        fontSize :`${.8 * window.devicePixelRatio}rem`,
    }
}))

export default useProjectIndicatorStyle;