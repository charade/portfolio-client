import { makeStyles } from '@material-ui/core';

const useAboutSlidersStyle = makeStyles(theme => ({
    root : {
        position : 'absolute',
        top : '10%',
        left : '50%',
        transform : 'translateX(-40%)',
        [theme.breakpoints.up('sm')] : {
            transform : 'translateX(0)',
            top: '5%',
            left : '36%',
        }
    }
}))

export default useAboutSlidersStyle;