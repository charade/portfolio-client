import { makeStyles } from '@material-ui/core'

const useCategoriesNavigationStyle = makeStyles(theme => ({
    root : {
        zIndex : 10,
        position : 'absolute',
        display : 'flex',
        alignItems : 'center',
        top : '30px',
        right : '5%',
        width : '20rem',
        '& > *' : {
            display : 'flex',
            flexDirection : 'column',
            alignItems : 'center',
            maxWidth : '300px',
            '&:last-child' :{
                alignItems : 'flex-start',
                paddingLeft : '10px'
            },
        },
    },
    separator : {
        borderBottom : '2px solid rgba(250, 0 , 0, .5)',
        margin : '10px',
        width : '200px',
        transform : 'translateY(-22px)',
    }
}));
export default useCategoriesNavigationStyle;