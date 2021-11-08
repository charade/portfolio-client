import { makeStyles } from "@material-ui/core";

const useLandingStyle = makeStyles(theme => ({
    root : {
        zIndex : 10,
        position  : 'fixed',
        top :0, 
        left : 0,
        width : '100vw',
        height : '100vh',
        background : 'black'
    },
    circle : {
        position : 'absolute',
        top :'80%',
        left :'50%',
        transform : 'translate(-50%, -50%)',
        fill : "none",
        stroke: "lightgrey",
        strokeWidth : '0.3px',
        // border:'2px solid'
    },
    progress : {
        strokeWidth : '2px',
        stroker : 'white',
        strokeDasharray : '440',
        
    }
}))

export default useLandingStyle