import { makeStyles } from "@material-ui/core";
import { UPPER_MEDIUM } from "./constants";

const useBoldTextStyle = makeStyles(theme => ({
    bold :{
        zIndex :2,
        position :'absolute',
        top : '2%',
        left :'50%',
        transform : 'translate3d(-45%, 0, 0)',
        color : 'rgba(255, 255, 255, .6)',
        fontSize: '3.5rem',
        width :'90%',
        display : 'flex',
        flexDirection :'column',
        fontFamily : theme.typography.fontFamily,
        // border :'1px solid red',
        [theme.breakpoints.up('sm')] :{
            fontSize : '7rem',
            width : '200px',
            transform : 'translate3d(-33rem, 13rem, 0)',
        },
        [theme.breakpoints.up('md')]: {
            fontSize :'8rem', 
            transform : 'translate3d(-43rem, 20rem, 0)',
        },
        [theme.breakpoints.up(UPPER_MEDIUM)]: {
            fontSize :'8rem', 
            transform : 'translate3d(-43rem, 0, 0)',
        },
    },
}));

export default useBoldTextStyle;