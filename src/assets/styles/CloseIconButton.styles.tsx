import { makeStyles } from "@material-ui/core"
import { color } from "../../utils/color";

const useCloseIconButtonStyle  = makeStyles(() => ({
    closeBtn :{
        padding : '3px ',
        border: '1px solid rgba(255, 255, 255, .4)',
        width :'40px',
        height :'40px',
        color : color.gray,
        alignSelf : 'flex-end',
    }
}))

export default useCloseIconButtonStyle ;