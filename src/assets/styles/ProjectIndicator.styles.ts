import { makeStyles } from "@material-ui/core";
import { color } from "../../utils/color";

const useProjectIndicatorStyle = makeStyles(theme => ({
    container : {
        height : "100%",
        // width : '300px',
        // margin : '0 200px',
        // border : "2px solid blue",
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        // alignItems : 'flex-end',
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
        // border :'2px solid white'
    },
    bar :{
        width: '70px',
        height : '7px',
        background : color.lightBlue,
        // clipPath : 'polygon(0 0, 80% 0, 100% 100%, 0 100%)',
        borderTopLeftRadius : '5px',
        borderBottomLeftRadius : '5px',
        // transition : '.4s ease-in-out'
    },
    label : {
        fontSize :'1.5rem',
    }
}))

export default useProjectIndicatorStyle;