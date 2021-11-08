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
        top : 0,
        left :0,
        width :'100%',
        height : '100%',
        display  :'flex',
        justifyContent: 'center',
        alignItems : 'center'
    },
    canvasContainer : {
        zIndex : 5,
        height : '100%'
    }
}))

export default useProjectsStyle;