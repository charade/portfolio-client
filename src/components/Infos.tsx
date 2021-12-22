import { useInfoStyle } from '../assets/styles/index.styles';
import { Popover } from '@mui/material';

type InfoPropsType = {
    open : boolean,
    setOpen : (open : boolean) => void
    anchor : Element | null
}

export const Info = ({open, setOpen, anchor} : InfoPropsType) => {
    const classes = useInfoStyle();

    return(
        <Popover
            open = {open}
            onClose = { () => setOpen(false) }
            anchorEl = { anchor }
            anchorOrigin = {{vertical : 'center', horizontal : 'right'}}
        >
            <div className = {classes.container}>
                <p className = {classes.text}> 
                    Available for a fulltime  
                </p>
            </div>
        </Popover>
    )
}