import { makeStyles } from "@material-ui/core";
import { color } from "../../utils/color";

const useCardStyle = makeStyles(theme => ({
    cardContainer : {
        position : 'relative',
        width : '250px',
        height : '280px',
        cursor : 'pointer',
        '& > *' : {
            position : 'absolute',
            width : '100%',
            height : '100%',
        }
    },
    lowerLayer : {
        zIndex : -1,
        background : '#4A4A4A',
        opacity : .4,
        borderRadius : '20px',
        boxShadow : '0 0 10px white'
    },
    middleLayer : {
        stroke : 'rgba(255, 255, 255, .2)',
        strokeWidth : ".8px",
        fill : "none"
    },
    upperLayer : {
        zIndex : 2,
        backgroundImage: 'url(./imgs/traveler.png)',
        backgroundSize : 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition : 'center center',
        width : '95%',
        height : '95%',
        top : '50%',
        left :'50%',
        transform : 'translate3d(-50%,-50%,0)'
    }
}))

export default useCardStyle;