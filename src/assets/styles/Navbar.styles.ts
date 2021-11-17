import { makeStyles } from "@material-ui/core";

const useNavbarStyle = makeStyles( theme => ({
    root : {
        position: 'fixed',
        top :0,
        left :0,
        zIndex : 9,
        display : 'flex',
        flexDirection : 'row',
        padding : '13px',
        alignItems : 'center',
        background : 'transparent',
        height : '45px',
        boxShadow : 'none',
        fontSize : '1.8rem',
        transition : '.3s ease',
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
    }
}))

export default useNavbarStyle;

