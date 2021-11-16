import { makeStyles } from '@material-ui/core';
import { UPPER_MEDIUM } from './constants';

const useAboutSlidersStyle = makeStyles(theme => ({
    root : {
        position : 'absolute',
        top : '40%',
        left : '10%',
        [theme.breakpoints.up('sm')] :{
            top : '27%',
            left : '50%',
            transform : 'translateX(-50%)'
        },
        [theme.breakpoints.up(UPPER_MEDIUM)]: {
            transform : 'translateX(-34%)',
            top :'10%'
        }
    }
}))

export default useAboutSlidersStyle;