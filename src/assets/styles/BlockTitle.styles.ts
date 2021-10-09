import { makeStyles } from '@material-ui/core';

const useBlockTitleStyle = makeStyles(theme => ({
    blockTitle :{
        fontSize :'1.7rem',
        width : '100px',
        display : 'flex',
        flexDirection : 'column',
        [theme.breakpoints.up('xs')] : {
            width : '100%'
        }
    }
}));

export default useBlockTitleStyle;
