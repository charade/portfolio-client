import { LinkedinShareButton } from "react-share";
import { Popover, Button } from "@mui/material"
import { useShareOnMediaStyle } from "../assets/styles/index.styles"
import { MutableRefObject } from "react";

type PropsType = {
    open : boolean,
    setOpen : (open : boolean) => void
    anchor : Element | null
}
export const ShareOnMedia = ({ open, setOpen, anchor } : PropsType) => {
    const classes = useShareOnMediaStyle();
    return(
        <Popover 
            className ={classes.container} 
            open = { open }
            onClose = {() => setOpen(false) }
            anchorEl = { anchor }
            anchorOrigin = {{vertical: 'center', horizontal: 'right'}}
        >
            <LinkedinShareButton
                url = 'http://localhost:300'
                openShareDialogOnClick
            >
                <Button> LindekIn</Button>
            </LinkedinShareButton>
        </Popover>
    )
}