import { Alert, Snackbar, AlertColor } from "@mui/material";

export type NotificationType = {
    message : string,
    severity : AlertColor ,
};

type AlertPropsType = NotificationType & {
    open : boolean,
    setOpen : (open : boolean) => void
};

export const Notification = (props : AlertPropsType) => {
    return(
        <Snackbar
            autoHideDuration = { 4000 }
            open = { props.open }
            onClose = {() => props.setOpen(false)}
            anchorOrigin = {{vertical : 'bottom', horizontal :'center'}}
        >
            <Alert severity = { props.severity }> { props.message } </Alert>
        </Snackbar>
    )
}