import { makeStyles } from '@material-ui/core'

const useCategoriesNavigationStyle = makeStyles(theme => ({
    root : {
        zIndex : 10,
        position : 'absolute',
        display : 'flex',
        alignItems : 'center',
        top : '.5%',
        right : '5%',
        height : `${32 * window.devicePixelRatio}px`,
        width : `${15 * window.devicePixelRatio}rem`,
        '& > *:last-child' :{
            alignItems : 'flex-start',
            paddingLeft : '10px'
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