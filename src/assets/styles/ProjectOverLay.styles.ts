import { makeStyles } from "@material-ui/core";

const useProjectOverLayStyle = makeStyles(theme => ({
    overlay : {
        zIndex : 6,
        position : 'absolute',
        width :'100%',
        height : '100%',
        display  :'flex',
        flexDirection :'column',
        // justifyContent: 'center',
        // overflow : 'scroll',
    },
    navContainer : {
        display : 'flex',
        justifyContent : 'flex-end',
        padding : '10px'
    },
    box : {
        display : 'flex',
    }
}))

export default useProjectOverLayStyle;