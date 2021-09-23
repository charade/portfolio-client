import { makeStyles } from "@material-ui/core";

const useIconsMenuStyle = makeStyles(theme => ({
    root : {
        background : 'transparent',
        border : 'none',
        width : '9rem',
        justifyContent : 'flex-end',
        alignItems : 'center',
        paddingBottom: '20px',
    },
    listEl :{
        position : 'relative',
        display : 'flex',
        alignItems : 'center',
        // border : '1px solid',
        flexDirection : 'column',
        justifyContent : 'center',
        margin : '50px',
        '&::before, &::after' : {
            content : '""',
            position : 'absolute',
            left : '50%',
            transform : 'translateX(-50%)',
            borderLeft : '1px solid rgba(255, 255, 255, 0.3)'
        },
        '&::before' : {
            bottom : '100%',
            height : '35px',

        },
        ' &::after' : {
            top : '100%',
            height : '20px'
        }
    },
    icon :{
        position : 'relative',
        margin :'10px 0',
        padding :'0 8px',
        cursor : 'pointer',
        color : 'lightgrey',
        '& > *' :{
            minWidth : '2rem',
            minHeight :'2rem'
        },
        '&::before' : {
            content  : '""',
            position : 'absolute',
            bottom :0, 
            left :0,
            background : 'lightgrey',//'rgb(69, 165, 240)',
            height : 0,
            width :'2px',
            transition : 'height 0.3s',
        },
        '&:hover::before' : {
            height: '100%'
        }
    }
}))

export default useIconsMenuStyle;