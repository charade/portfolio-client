import { makeStyles } from "@material-ui/core";

const useCVViewerStyle = makeStyles(theme => ({
    root  : {
        background : 'red',
    },
    container :{
        position : 'absolute',
        top :'48px',
        left : '50%',
        transform : 'translateX(-50%)',
        width : '85%',
        height : '100%',
        display  :'flex',
        flexDirection : 'column',
        background : 'rgba(255,255, 255, .1)',
        boxShadow:  '0 0 5px white',
        alignItems : 'center',
        backdropFilter : 'blur(3px)',
        borderRadius : '30px',
    },
    bar :{
        display : 'flex',
        width : '100%',
        justifyContent : 'flex-end',
        alignItems : 'center',
        background : 'rgba(0, 0, 0, .6)',
        '& > *' : {
            margin : '10px'
        }
    },
    document : {
        height :'100%',
        overflowX : 'hidden',
        overflow :'scroll',

    }
}))

export default useCVViewerStyle;