import { makeStyles } from '@material-ui/core';
import { UPPER_MEDIUM } from './constants';

//for softskill & hard skills title
const useBlockTitleStyle = makeStyles(theme => ({
    blockTitle :{
        fontSize :'1.7rem',
        width : '100px',
        display : 'flex',
        flexDirection : 'column',
        [theme.breakpoints.up('xs')] : {
            width : '100%'
        },
        [theme.breakpoints.up('sm')] : {
            fontSize :'3.5rem'
        },
        [theme.breakpoints.up(UPPER_MEDIUM)] : {
            fontSize :'2.2rem'
        }
    }
}));

export default useBlockTitleStyle;
