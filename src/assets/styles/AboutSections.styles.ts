import { makeStyles } from '@material-ui/core';

const useAboutSectionsStyle = makeStyles(theme => ({
    root : {
        zIndex :3,
        position : 'absolute',
        top: '5px',
        left : '3%',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'flex-start',
        width :'100%',
        '& > *' : {
            margin : '4%'
        },
        [theme.breakpoints.up('md')] : {
            flexDirection : 'row'
        }
    }
}))

export default useAboutSectionsStyle;