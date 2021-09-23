import { makeStyles } from "@material-ui/core";

const useNavbarStyle = makeStyles( theme => ({
    
    root : {
        display : 'flex',
        flexDirection : 'row',
        padding : '20px',
        alignItems : 'center',
        background : 'transparent',
        height : '80px',
        boxShadow : 'none',
        fontSize : '1.8rem'
    },
    avatar : {
        borderBottom : `1px solid rgba(255,255,255,.8)`,
        borderLeft : `1px solid white`,
        alignSelf : 'flex-start',
        width : '80px',
        height : '80px',
        zIndex : 5,
        '& > *' :{
            transform : 'translateY(8%)'
        },
    },
    toolbar : {
        // borderBottom : 'thin solid rgba(255, 255, 255, 0.2)',
        justifyContent : 'flex-end',
        width : '100%',
        maxHeight : '50%',
    },
    upperList : {
        position : 'relative',
        padding : 0,
        display : 'flex',
        alignItems : 'center',
        justifyContent :'space-between',
        // border : '2px solid blue',
        listStyle : 'none',
        [theme.breakpoints.up('sm')] : {
            width : '75%',
        }
    },
    list : {
        padding : 0,
        margin :0,
        display : 'flex',
        alignItems : 'center',
        listStyle : 'none',
        // border : '2px solid',
        [theme.breakpoints.up('sm')] :{
            width : '400px',
            justifyContent : 'space-between'
        },
        '& > *':{
            flex : 1,
            height: '100%',
        },
    },
    panelIndicator:{
        height : '100%',
        width : '130px',
        // boxShadow : '0 0 5px white',
        borderRadius : '8px',
        border : `1px solid lightgrey`,
        position : 'absolute',
        top : 0,
        left : 0,
        zIndex : 1,
        transitionDelay : '1s',
        transition : '0.5s linear'
    },
    listItem : {
        fontSize : '1.5rem',
        textAlign : 'center',
        padding : '5px 20px',
        cursor : 'pointer',
        fontWeight : 500,
        zIndex : 2
    }
}))

export default useNavbarStyle;

