import { useRedirectBtnStyle } from "../assets/styles/index.styles";

type RedirectProps = {
    link : string;
    children ?: React.ReactNode;
    label ?: string
}
export const RedirectBtn = ({link, children, label} : RedirectProps) => {
    const classes = useRedirectBtnStyle();

    return(
        <a className = {classes.link} href = {link} target = "_external" rel='opener'>
            { label }
            { children }
        </a>
    )
}