import { makeStyles } from "@material-ui/core";
import { color } from "../../utils/color";

const useShortDetailsStyle = makeStyles(() => ({

    container : {
        zIndex: 4,
        position : 'absolute',
        bottom : 0,
        right :0,
        background : color.lightDark,
        display :'flex',
        flexDirection :'column',
        borderRadius : '20px',
        border :  `2px solid ${color.red}`,
        padding :'8px'
    },
    title : {
        fontSize : '2.5rem',
        display : 'flex',
        flexDirection : 'column',
        paddingLeft :'20px',
        margin: 0
    },
    description : {
        fontSize : "1.5rem",
        paddingLeft : '20px',
        margin: '20px 0 0'
    },
    stack : {
        fontSize : '1.4rem',
        paddingLeft : '20px',
    }
   
}))

export default useShortDetailsStyle;