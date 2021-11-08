import { makeStyles } from "@material-ui/core";
import { color } from "../../utils/color";

const useCardStyle = makeStyles(theme => ({
    cardContainer : {
        position : 'relative',
        width : '250px',
        height : '280px',
        margin : '10px',
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
        opacity : .6,
        borderRadius : '20px',
        boxShadow : '0 0 10px white'
    },
    upperLayer : {
        zIndex : 2,
        width : '95%',
        height : '95%',
        top : '50%',
        left :'50%',
        transform : 'translate3d(-50%,-50%,0)'
    }
}))

export default useCardStyle;