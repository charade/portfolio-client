import { makeStyles } from "@material-ui/core";

const useProjectsStyle = makeStyles(theme => ({
    root : { 
        zIndex : 4,
        position : 'relative',
        height: '100vh',
    },
    overlay : {
        zIndex : 6,
        position : 'absolute',
        width :'100%',
        height : '100%',
        display  :'flex',
        justifyContent: 'center',
        // padding : '0 3%',
        alignItems : 'center',
        // border :'2px solid white'
        '& > *' : {
            margin : "3%"
        }
    },
    canvasContainer : {
        zIndex : 5,
        height : '100%'
    }
}))

export default useProjectsStyle;