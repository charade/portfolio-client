import { makeStyles } from "@material-ui/core";

const useIntroStyle = makeStyles(theme => ({
    root : {
        position : 'absolute',
        top: '15%',
        left : '15%',
        // transform : 'translateX(-30%)',
        zIndex :3,
        display:'flex',
        flexDirection : 'column',
    },
    title :{
        fontSize: '3.5rem',
        fontWeight : 800,
    }, 
    introBox :{
        position : 'relative',
        diplay : 'flex',
        flexDirection:  'column',
        justifyContent: 'flex-start',
        paddingLeft : '15px'
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
    },
    line : {
        position : 'relative',
        marginBottom : '2px',
        display : 'inline-block',
    }
}))

export default useIntroStyle;