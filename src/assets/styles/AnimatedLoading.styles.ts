import { makeStyles } from "@material-ui/core";

const useAnimatedLoadingStyle = makeStyles(theme => ({
    circle : {
        position : 'absolute',
        top :'80%',
        left :'80%',
        transform : 'translate(-50%, -50%)',
        fill : "none",
        stroke: "lightgrey",
        strokeWidth : '0.3px',
        // border:'2px solid'
    },
    progress : {
        strokeWidth : '1px',
        stroke : 'gold',
        strokeDasharray : '440',
        boxShadow : '0 0 5px white'
    },
    text : {
        position : 'absolute',
        fontSize : '1rem',
        fill : "white",
    }
}));

export default useAnimatedLoadingStyle;