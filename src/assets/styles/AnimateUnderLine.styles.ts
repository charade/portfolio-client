import { makeStyles } from "@material-ui/core";

const useAnimateUnderlineStyle = makeStyles(theme => ({
    root : {
        height : '3px',
        borderRadius : '20px',
        boxShadow : '-15px 2px 14px white'
    }
}))

export default useAnimateUnderlineStyle;