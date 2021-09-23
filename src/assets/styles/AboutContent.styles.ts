import {makeStyles} from '@material-ui/core';

const useAboutContentStyle = makeStyles(theme => ({
    root :{
        position : 'absolute',
        top : '100px',
        left: 0,
        width :'100%',
        display :'flex',
        flexDirection : 'column',
        alignItems : 'center',
        // border: '1px solid lightgrey'
    }
}))

export default useAboutContentStyle;