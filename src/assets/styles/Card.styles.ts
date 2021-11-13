import { makeStyles } from "@material-ui/core";
import { color } from "../../utils/color";

const UPPER_MEDIUM = 1025;

const useCardStyle = makeStyles(theme => ({
    mainContainer : {
        position : 'relative',
        maxWidth : `270px`,
        height : '90%',
        margin : ' 0 10px',
        // overflow : 'hidden',
        cursor : 'pointer',
        boxShadow : `0 0 7px ${color.white}`,
        borderRadius : '20px',
        background : color.lightDark,
        [theme.breakpoints.up('xs')]: {
            maxWidth : "500px"
        },
        [theme.breakpoints.down(UPPER_MEDIUM)] :{
            width : '400px',
            height : '93%'
        },
    },
    cardContainer :{
        zIndex :3,
        position :'relative',
        width :"100%",
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'flex-end',
        flexDirection : 'column',
        height :'100%',
        '& > *:not(img)' : {
            position : 'absolute',
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
        
        zIndex : -1,
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
    expandBtn : {
        border: `1px solid ${color.lightBlue}`,
        width :'35px',
        height :'35px',
        color : color.gray,
        alignSelf : 'flex-end',
        margin :'8px'
    }
}))

export default useCardStyle;