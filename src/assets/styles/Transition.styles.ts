import { makeStyles } from "@material-ui/core";

const useTransitionStyle = makeStyles(theme => ({
    root : {
        display :'flex',
        position : 'relative',
        // zIndex: 10,
        background : 'rgb(54, 57, 63)',
        height : '100vh',
    },
    container : {
        position: 'absolute',
        top: 0,
        left: 0,
        width : '100%',
        display : 'flex',
        margin : '300px 100px',
        flexDirection : 'column',
        '& > *' : {
            margin: '10px'
        }
    },
    title :{
        fontSize : '1.8rem',
        color : 'black'
    },
    line :{
        height : '5px',
        borderBottom : '1px solid rgb(69, 165, 240)' 
    }
}))

export default useTransitionStyle;