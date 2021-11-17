import { makeStyles } from '@material-ui/styles';

const useAppStyle = makeStyles({
    root : {
        height : '100%',
        width : '100%',
        overflowX : 'hidden'
    },
    container : {
        height :'100%',
        width : '100%',
        overflow : 'scroll',
    }
})

export default useAppStyle;