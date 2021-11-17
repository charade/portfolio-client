import { makeStyles } from "@material-ui/core"
import { color } from "../../utils/color";

const useCloseIconButtonStyle  = makeStyles(() => ({
    closeBtn :{
        padding : '3px ',
        border: `1px solid ${color.lightBlue}`,
        width :'40px',
        height :'40px',
        color : color.gray,
        alignSelf : 'flex-end',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : '50%',
        cursor : 'pointer'
    }
}))

export default useCloseIconButtonStyle ;