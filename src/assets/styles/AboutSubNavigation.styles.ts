import { makeStyles} from '@material-ui/core';

const useSubNavigationStyle = makeStyles(theme => ({
    root : {
        position : 'absolute',
        top: '70px',
        left : '5%',
        width : '20rem',
        height : '20rem',
        borderRadius :'50%',
        borderBottom : '1px solid white',
        borderRight : '1px solid red'
    },
    block : {
        position : 'absolute',
        minWidth : '118px',
        cursor : 'pointer',
        // border: '2px solid blue',
        display : 'flex',
        alignItems : 'center',
        '& > *' : {
            marginRight: '7px'
        }
    },
    circle : {
        width : '13px',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        background : 'rgb(14, 25,44)',
        height : '13px',
        borderRadius : '50%',
        border : '1px solid white'
    },
    title :{
        fontSize : '1.4rem',
        fontWeight : 300
    },
    indicator:{
        width : '9px',
        height: '9px',
        borderRadius : '50%',
        background : 'white',
        boxShadow :'-2px 0 10px gold; 2px 0 30px white; 0 2px 20px gold; 0 -2px 30px white'
    }
}))

export default useSubNavigationStyle;