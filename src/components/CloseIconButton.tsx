import { useCloseIconButtonStyle } from '../assets/styles/index.styles';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

type PropType = {
    action : ()  => void
}

export const CloseIconButton = ({action} : PropType) => {
    const classes = useCloseIconButtonStyle();
    return(
        <span role = "button" className = {classes.closeBtn} onClick = {action}>
            <CloseFullscreenIcon />
        </span>
    )
}