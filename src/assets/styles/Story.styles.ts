import { makeStyles } from "@material-ui/core";
import { UPPER_MEDIUM } from './constants';

const useStoryStyle = makeStyles(theme => ({
    root : {
        display:'flex',
        flexDirection : 'column',
    },
    title :{
        fontSize: '1.8rem',
        fontWeight : 800,
        [theme.breakpoints.up('sm')] : {
            fontSize :'3.5rem'
        },
    }, 
    introBox :{
        position : 'relative',
        diplay : 'flex',
        flexDirection:  'column',
        justifyContent: 'flex-start',
        paddingLeft : '15px',
        // border:'2px solid',
    },
    bar : {
        position : 'absolute',
        top : '5px', 
        left : 0,
        width : '5px',
        height : '40px',
        borderRadius : '8px',
        background : 'rgb(69, 165, 240)'
    },
    text :{
        margin :0,
        fontSize :'1.3rem',
        [theme.breakpoints.up('sm')] : {
            fontSize : '1.8rem'
        },
        [theme.breakpoints.up('sm')] : {
            fontSize :'2.8rem'
        },
        [theme.breakpoints.up(UPPER_MEDIUM)] : {
            fontSize :'2rem'
        },
    },
    line : {
        position : 'relative',
        marginBottom : '2px',
        display : 'inline-block',
    }
}))

export default useStoryStyle;