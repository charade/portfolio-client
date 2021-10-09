import { makeStyles } from "@material-ui/core";

const useDirectionStyle = makeStyles(theme => ({
    root : {
        position : 'absolute',
        left : '50%',
        cursor : 'pointer',
        justifyContent : 'center',
        transform : 'translateX(-50%)',
        display : 'flex',
        flexDirection : 'column',
        alignItems  :'center',
        '& > *' :{
            margin: '-3px'
        }
    },
    text : {
        fontSize :'1.7rem',
        fontWeight : 300
    },
    icon : {
        minWidth : '30px',
        minHeight :'30px'
    }
}));
export default useDirectionStyle;