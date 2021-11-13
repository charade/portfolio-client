import { useCloseIconButtonStyle } from '../assets/styles/index.styles';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { IconButton } from "@material-ui/core";

type PropType = {
    action : ()  => void
}

export const CloseIconButton = ({action} : PropType) => {
    const classes = useCloseIconButtonStyle();
    return(
        <IconButton className = {classes.closeBtn} onClick = {action}>
                <CloseFullscreenIcon />
        </IconButton>
    )
}