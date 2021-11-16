import { makeStyles } from "@material-ui/core";

const useLandingStyle = makeStyles(theme => ({
    root : {
        display : 'flex',
        justifyContent :'center',
        alignItems : 'center',
        zIndex : 15,
        position  : 'fixed',
        top :0, 
        left : 0,
        width : '100vw',
        height : '100vh',
        background : 'black'
    },
    caption : {
        textAlign : 'center',
        fontSize :'1.7rem',
        color :'white',
        fontWeight : 200
    }
}))

export default useLandingStyle