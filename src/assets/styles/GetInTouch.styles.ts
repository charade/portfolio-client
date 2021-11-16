import { makeStyles } from "@material-ui/core";
import { UPPER_MEDIUM } from "./constants";
import { color } from "../../utils/color";

const useGetInTouchStyle = makeStyles(theme => ({
    form :{
        zIndex: 2,
        position :'absolute',
        top :'50%',
        left :'50%',
        transform : 'translate3d(-45%, -50%,0)',
        width : '85%',
        height : '37rem',
        display :'flex',
        flexDirection: 'column',
        borderRadius : '15px',
        alignItems: 'center',
        background :'rgba(0, 0, .3, .8)',
        border : `1px solid rgba(255, 255, 255, .5)`,
        backdropFilter :'blur(5px)',
        boxShadow :`0 0 3px ${color.lightBlue}`,
        overflow: 'hidden',
        '& > *' : {
            width : '80%',
            margin :'15px',
        },
        [theme.breakpoints.up('sm')] :{
            width : '53%',
            transform : 'translate3d(-20%, -60%,0)',
            height : '50rem'
        },
        [theme.breakpoints.up('md')] :{
            width : '47rem',
            height : '60rem',
            transform : 'translate3d(-20%, -33rem,0)',
        },
        [theme.breakpoints.up(UPPER_MEDIUM)] :{
            width : '30rem',
            height : '38rem',
            transform : 'translate3d(3rem, -60%,0)',
        },
    },
    emailLabel :{
        borderColor : 'white',
        fontSize : '1.3rem',
        color : 'lightgrey',
        fontFamily : theme.typography.fontFamily,
        [theme.breakpoints.up('md')] : {
            fontSize :'1.6rem'
        },
        [theme.breakpoints.up(UPPER_MEDIUM)] : {
            fontSize :'1.4rem'
        },
    },
    emailField :{
        border : '1px solid rgba(255, 255, 255, .4)',
        color : "white",
        borderRadius : '15px',
    },
    message : {
        fontStyle : '1.8rem',
        fontFamily : theme.typography.fontFamily,
        background : 'transparent',
        border :'1px solid rgba(255, 255, 255, .4)',
        color :'white',
        height : "100%",
        padding: '8px',
        width : '88%',
        borderRadius : '8px',
        [theme.breakpoints.up('md')] :{
            fontSize :'2.3rem'
        },
        [theme.breakpoints.up(UPPER_MEDIUM)] :{
            fontSize :'1.5rem'
        },

    },
    submitBtn :{
        width :'130px',
        height :'35px',
        borderRadius :'20px',
        padding : '5px 0',
        border : '1px solid  rgba(255, 255,255, .3)',
        color : "white",
        background: 'transparent',
        cursor: 'pointer',
        "&:hover": {
            color : "black",
            background :'rgba(255, 255,255, .7)'
        }
    }
}))

export default useGetInTouchStyle;