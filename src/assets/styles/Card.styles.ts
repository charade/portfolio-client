import { makeStyles } from "@material-ui/core";
import { color } from "../../utils/color";

const useCardStyle = makeStyles(theme => ({
    cardContainer : {
        position : 'relative',
        display : 'flex',
        justifyContent : 'flex-end',
        flexDirection : 'column',
        alignItems : 'center',
        maxWidth : `280px`,
        height : '90%',
        margin : ' 0 10px',
        cursor : 'pointer',
        '& > *:not(img)' : {
            position : 'absolute',
        },
        [theme.breakpoints.up('xs')]: {
            width : "400px"
        },
        [theme.breakpoints.up('md')] :{
            width : '500px'
        }
    },
    caption : {
        zIndex : 2,
        fontWeight : 800,
        top : '-10px',
        left : '10px',
        fontSize : "3.5rem",
        lineHeight :'30px'
    },
    lowerLayer : {
        boxShadow : `0 0 7px ${color.white}`,
        borderRadius : '20px',
        zIndex : -1,
        background : color.lightDark,
        opacity : .6,
        width : '100%',
        height : '100%',
    },
    upperLayer : {
        // zIndex : 2,
        backgroundSize : 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition : 'center center',
        margin : '55px  20px',
        width : `250px`,
        height : '75%',
        filter : 'grayscale(1.3%)',
    },
}))

export default useCardStyle;