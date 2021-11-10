import { makeStyles } from "@material-ui/core";
import { color } from "../../utils/color";

const useRedirectBtnStyle = makeStyles(theme => ({
    link : {
        position : 'absolute',
        bottom : '5%',
        right :'5%',
        color : color.lightBlue,
        fontSize : `${.4 * window.devicePixelRatio}rem`,
        border : '1px solid rgba(255, 255, 255, .5)',
        borderRadius : '8px',
        padding :'3px 5px',
        transition : '.1s linear',
        '&:hover' : {
            background : color.lightBlue,
            color : color.gray,
        }
    },
}));

export default useRedirectBtnStyle;