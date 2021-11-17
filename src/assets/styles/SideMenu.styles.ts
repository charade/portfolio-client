import { makeStyles } from "@material-ui/core";

const useIconsMenuStyle = makeStyles(theme => ({
    root : {
        position: 'fixed',
        zIndex : 7,
        background : 'transparent',
        border : 'none',
        width : '5rem',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'flex-end',
        paddingBottom: '10px',
        top :0,
        left : 0,
        height :'100%',
    },
    listEl :{
        position : 'relative',
        display : 'flex',
        alignItems : 'center',
        flexDirection : 'column',
        justifyContent : 'space-evenly',
        margin : '20px 0',
        background :'transparent',
        '&::before, &::after' : {
            content : '""',
            position : 'absolute',
            left : '50%',
            transform : 'translateX(-50%)',
            borderLeft : '1px solid rgba(255, 255, 255, 0.3)'
        },
        '&::before' : {
            bottom : '100%',
            height : '25px',
        },
        ' &::after' : {
            top : '100%',
            height : '20px'
        },
    },
    icon :{
        position : 'relative',
        margin :'5px 0',
        padding :'0 8px',
        cursor : 'pointer',
        color : 'lightgrey',
        display : 'flex',
        justifyContent :'center',
        '& > *:nth-child(n)' :{
            minWidth : '2rem',
            minHeight :'2rem',
            //override redirect btn style
            position : 'static',
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