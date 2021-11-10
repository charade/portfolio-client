import { makeStyles } from "@material-ui/core";
import { color } from "../../utils/color";

const UPPER_MEDIUM = 1025;

const useCardStyle = makeStyles(theme => ({
    cardContainer : {
        position : 'relative',
        display : 'flex',
        justifyContent : 'flex-end',
        flexDirection : 'column',
        alignItems : 'center',
        maxWidth : `270px`,
        height : '90%',
        margin : ' 0 10px',
        // overflow : 'hidden',
        cursor : 'pointer',
        '& > *:not(img)' : {
            position : 'absolute',
        },
        [theme.breakpoints.up('xs')]: {
            maxWidth : "500px"
        },
        [theme.breakpoints.down(UPPER_MEDIUM)] :{
            width : '400px',
            height : '93%'
        },
    },
    caption : {
        zIndex : 2,
        fontWeight : 800,
        top : '-10px',
        left : '10px',
        fontSize : "3.5rem",
        lineHeight :'30px',
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
        filter : 'grayscale(100%)',
    },
}))

export default useCardStyle;