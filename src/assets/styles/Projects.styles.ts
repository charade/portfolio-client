import { makeStyles } from "@material-ui/core";

const useProjectsStyle = makeStyles(theme => ({
    root : { 
        zIndex : 4,
        position : 'relative',
        height: '100vh',
    },
    canvasContainer : {
        zIndex : 5,
        height : '100%'
    }
}))

export default useProjectsStyle;