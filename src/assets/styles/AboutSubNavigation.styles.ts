import { makeStyles} from '@material-ui/core';

const useSubNavigationStyle = makeStyles(theme => ({
    root : {
        position : 'absolute',
        top : '40px',
        left : '4%',
        width : '150px',
        height : '150px',
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
        width : '130px',
        display : 'flex',
        '& > *' : {
            marginRight: '7px'
        },
    },
}))

export default useSubNavigationStyle;