import { useRedirectBtnStyle } from "../assets/styles/index.styles";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export const RedirectBtn = ({link} : {link : string}) => {
    const classes = useRedirectBtnStyle();

    return(
        <a className = {classes.link} href = {link} target = "_external" rel='opener'>
            visit
            <OpenInNewIcon />
        </a>
    )
}