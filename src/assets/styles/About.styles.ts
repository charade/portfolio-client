import {makeStyles} from '@material-ui/core';

const useAboutStyle = makeStyles(theme => ({
    root :{
        width : '100%',
        height: '100vh',
        border: '3px solid red'
    },
    html : {
        // position : 'absolute',
        // top: '-50%',
        // border: '2px solid blue',
        // width : '100%'
    }
}))

export default useAboutStyle;