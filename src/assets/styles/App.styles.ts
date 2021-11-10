import { makeStyles } from '@material-ui/styles';

const useAppStyle = makeStyles({
    root : {
        height : '100%',
        width : '100%',
        display : 'flex',
        backgroud : 'white',
        overflow : 'hidden'
    },
    container : {
        height :'100%',
        width : '100%'
    }
})

export default useAppStyle;