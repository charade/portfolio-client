import { makeStyles} from '@material-ui/core';

const useSubNavigationStyle = makeStyles(theme => ({
    root : {
        zIndex : 10,
        position : 'absolute',
        top : '40px',
        left : '4%',
        width : '14rem',
        height : '14rem',
        borderRadius :'50%',
        borderBottom : '1px solid white',
        borderRight : '1px solid red',
        [theme.breakpoints.up('sm')] : {
            width : '19rem',
            height : '19rem',
        }
    },
    block : {
        position : 'absolute',
        minWidth : '118px',
        // border: '2px solid blue',
        display : 'flex',
        alignItems : 'center',
        '& > *' : {
            marginRight: '7px'
        }
    },
    
}))

export default useSubNavigationStyle;