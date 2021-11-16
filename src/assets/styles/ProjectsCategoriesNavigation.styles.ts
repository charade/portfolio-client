import { makeStyles } from '@material-ui/core'
import { color } from "../../utils/color";

const useCategoriesNavigationStyle = makeStyles(theme => ({
    root : {
        display : 'flex',
        alignItems : 'center',
        height : `${32 * window.devicePixelRatio}px`,
        width : '30%',
        marginRight : '80px'
    },
    container : {
        width : '100%',
        display :'flex',
        '& > *:last-child' :{
            alignItems : 'flex-start',
            paddingLeft : '10px'
        },
    },
    box : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        '& > *' :{
            marginBottom : ' 5px'
        },
        justifyContent : 'flex-start',
    },
    separator : {
        borderBottom : `2px solid ${color.red}`,
        width : '100%',
        alignSelf : 'flex-start',
        transform :'translateY(7px)'
    }
}));
export default useCategoriesNavigationStyle;