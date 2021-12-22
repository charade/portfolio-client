import { makeStyles } from "@material-ui/core";
import { color } from "../../utils/color";

const UPPER_MEDIUM = 1025;

const useProjectDetailsStyle = makeStyles(theme => ({
    backdrop: {
        position : 'fixed',
        top : 0, 
        left:0,
        zIndex: 10,
        width :'100vw',
        height :'100vh',
        display : 'flex',
        justifyContent : 'center',
        alignItems :'center',
        background : 'rgba(0, 0, 0, .7)',
    },
    detailsContainer : {
        height: '60%',
        width : '65%',
        top : 0,
        right:0,
        display : 'flex',
        boxShadow : `0 0 10px ${color.white}`,
        background : 'rgba(0, 0, 0, .9)',
        borderRadius : '25px',
        overflow : 'hidden',
        //user can zoom over 100%
        borderRight : '3px solid rgba(255, 255, 255, .7)',

        [theme.breakpoints.up('sm')] : {
            width : '90%',  
            height :'55%'  
        },
        [theme.breakpoints.up('md')] :{
            width : '50%',
        },
        [theme.breakpoints.down(UPPER_MEDIUM)] : {
            width : '75%',
        },
    },
    img : {
        width : "50%",
        height: '100%',
        boxShadow : '0 0 10px white',
        [theme.breakpoints.up('sm')] : {
            minWidth : '45%'
        }
    },
    box : {
        position : 'relative',
        display : 'flex',
        flexDirection : 'column',
        padding: '5px 15px',
        height : '100%',
    },
    caption : {
        fontSize : '3.5rem',
        width : '100%',
        margin : '2% 0',
        display : 'flex',
        flexDirection : 'column',
        '& > *' : {
            margin : '5px'
        },
        [theme.breakpoints.down(UPPER_MEDIUM)] : {
            fontSize : '4rem',
            //set text on multilines
            width : '85%'
        }
    },
    description: {
        fontSize : '1.7rem',
        margin : '3% 0',
        [theme.breakpoints.up('sm')] : {
            fontSize : '1.8rem',
        },
        [theme.breakpoints.up('md')] : {
            fontSize : '2rem',
        },
        [theme.breakpoints.up(UPPER_MEDIUM)] :{
            fontSize :'1.4rem',
            margin : '6px 0'
        }
    },
    stack : {
        fontSize : '1.6rem',
        fontWeight : 500,
        [theme.breakpoints.up('sm')] : {
            fontSize : '1.5rem',
            fontWeight : 300
        },
        [theme.breakpoints.up('md')] : {
            fontSize : '1.8rem',
        },
        [theme.breakpoints.up(UPPER_MEDIUM)] : {
            fontSize : '1.3rem',
            fontWeight : 300
        },
    },
    
    
}));

export default useProjectDetailsStyle;