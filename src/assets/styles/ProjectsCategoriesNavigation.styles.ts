import { makeStyles } from '@material-ui/core'

const useCategoriesNavigationStyle = makeStyles(theme => ({
    root : {
        zIndex : 10,
        position : 'absolute',
        display : 'flex',
        alignItems : 'center',
        // justifyContent : 'space-around',
        top : '30px',
        right : '5%',
        // transform : 'translateX(-50%)',
        width : '25rem',
        // height ; 
        '& > *' : {
            display : 'flex',
            // border: '2px solid blue',
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
        // border: '2px solid',
        width : '200px',
        transform : 'translateY(-22px)',
        // boxShadow : '0 0 2px white'
    }
}))

export default useCategoriesNavigationStyle;