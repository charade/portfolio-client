import { makeStyles } from '@material-ui/core';

const useAboutSectionsStyle = makeStyles(theme => ({
    root : {
        position : 'absolute',
        top : '32%',
        left : '50%',
        transform : 'translateX(-40%)',
        [theme.breakpoints.up('sm')] : {
            transform : 'translateX(0)',
            top: '20%',
            left : '36%',
        }
    }
}))

export default useAboutSectionsStyle;