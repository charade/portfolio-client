import { makeStyles } from "@material-ui/core";
import { color } from "../../utils/color";

const useScrollTextStyle = makeStyles(theme => ({
    container : {
        zIndex: 5,
        position :'absolute',
        display : 'flex',
        top :'7%',
        right :'4%',
        overflow :'hidden',
        flexDirection : "column",
        // border : '2px solid red',
        [theme.breakpoints.up('sm')] : {
            right: '3%',
            top :'70%',
        },
        [theme.breakpoints.up('md')] : {
            right: '3%',
            top :'47%',
        },
    },
    word : {
        display : 'flex',
        flexDirection : 'column',
        alignItems :'center',
        margin : '10px'
    },
    letter : {
        fontSize :'1.5rem',
        // fontSize : '1.8rem',
        fontFamily : theme.typography.fontFamily,
        [theme.breakpoints.up('sm')] : {
            fontSize :'2rem'
        },
        [theme.breakpoints.up('md')] : {
            fontSize : '2rem',
        }
    }
}))

export default useScrollTextStyle