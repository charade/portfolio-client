import { makeStyles } from '@material-ui/core';
import { UPPER_MEDIUM } from './constants';

const useHardSkillsStyle = makeStyles(theme => ({
    root : {
        display : 'flex',
        transformOrigin : 'top left',
        justifyContent : 'center',
        '& > *' : {
            margin : '15px'
        },
        [theme.breakpoints.up('sm')] : {
            width : '480px',
        }
    },
    section : {
        position : 'relative',
        display : 'flex',
        flexDirection : 'column',
        '& > ul' :{
            listStyle : 'none',
            padding : 0
        },
        [theme.breakpoints.up('sm')] : {
            flex: 1,
        },
    },
    block : {
    },
    techno : {
        fontSize : '1.8rem',
        fontWeight : 400,
        [theme.breakpoints.up('sm')] : {
            margin : '10px',
            fontSize :'3rem'
        },
        [theme.breakpoints.up(UPPER_MEDIUM)] : {
            fontSize :'2rem'
        },
    },
}))

export default useHardSkillsStyle;
