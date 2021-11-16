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
        fontSize: '2.5rem',
        width :'90%',
        display : 'flex',
        flexDirection :'column',
        fontFamily : theme.typography.fontFamily,
        "& > *" : {
            margin : '5px 0'
        },
        [theme.breakpoints.up('sm')] :{
            fontSize : '5rem',
            width : '250px',
            transform : 'translate3d(-33rem, 13rem, 0)',
        },
        [theme.breakpoints.up('md')]: {
            transform : 'translate3d(-43rem, 20rem, 0)',
        },
        [theme.breakpoints.up(UPPER_MEDIUM)]: {
            transform : 'translate3d(-43rem, 0, 0)',
            lineHeight :'55px',
            width : "300px"
        },
    },
}));

export default useBoldTextStyle;