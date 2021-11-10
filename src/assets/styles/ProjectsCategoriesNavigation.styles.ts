import { makeStyles } from '@material-ui/core'

const useCategoriesNavigationStyle = makeStyles(theme => ({
    root : {
        display : 'flex',
        alignItems : 'center',
        height : `${32 * window.devicePixelRatio}px`,
        width : '70%',
        '& > *:last-child' :{
            alignItems : 'flex-start',
            paddingLeft : '10px'
        },
        [theme.breakpoints.up('sm')]: {
           width : `${10 * window.devicePixelRatio}rem`
        },
    },
    box : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        '& > *' :{
            marginBottom : ' 5px'
        },
        justifyContent : 'flex-start',
    },
    separator : {
        borderBottom : '2px solid rgba(250, 0 , 0, .5)',
        transform: `translateY(-30px)`,
        width : '20%',
    }
}));
export default useCategoriesNavigationStyle;