import { makeStyles } from "@material-ui/core";

const useNavbarStyle = makeStyles( theme => ({
    root : {
        zIndex : 8,
        display : 'flex',
        flexDirection : 'row',
        padding : '13px',
        alignItems : 'center',
        background : 'transparent',
        height : '45px',
        boxShadow : 'none',
        fontSize : '1.8rem',
        transition : '.3s ease',
        backdropFilter : 'blur(5px)'
    },
    avatar : {
        borderBottom : `1px solid rgba(255,255,255,.8)`,
        borderLeft : `1px solid white`,
        alignSelf : 'flex-start',
        width : '80px',
        height : '80px',
        '& > *' :{
            transform : 'translateY(8%)'
        },
    },
    toolbar : {
        justifyContent : 'flex-end',
        width : '100%',
        maxHeight : '50%',
    },
    navLink : {
        fontSize : '1.4rem',
        fontWeight : 300,
        color : 'rgba(255, 255, 255, 0.6)',
        '&:hover' :{
            color : 'white'
        }
    },
    linkContainer : {
        display : 'flex',
        alignItems : 'center',
    },
    linkSeparator : {
        color : 'white',
        alignSelf : 'center',
    }
  
}))

export default useNavbarStyle;

