import { makeStyles } from "@material-ui/core";

const useNavigationCirclesStyle = makeStyles({
    circle : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        cursor : 'pointer',
        width : '13px',
        height : '13px',
        background : 'rgb(14, 25,44)',
        border : '1px solid white',
        borderRadius : '50%',
    },
    indicator:{
        width : '9px',
        height: '9px',
        borderRadius : '50%',
        background : 'white',
        boxShadow :'-2px 0 10px gold; 2px 0 30px white; 0 2px 20px gold; 0 -2px 30px white'
    },
    label :{
        fontSize : '1.4rem',
        fontWeight : 300
    },
})

export default useNavigationCirclesStyle;