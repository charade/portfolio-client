import { Popover, Button } from "@material-ui/core";
import { useState, useCallback } from "react";
import { CVViewer } from './CVViewer';

type PropsType = {
    anchor : Element | null;
    open : boolean;
    setOpen: (open : boolean) => void
};

export const DownloadPopover = (props : PropsType) => {
    const [openViewer, setOpenViewer] = useState<boolean>(false);
    //close poper button
    const handleClose = () => {
        props.setOpen(false);
    };
    const handleOpenViewer = useCallback(async() => {
        setTimeout(() => handleClose(), 50);
        setOpenViewer(true);
    },[]);

    return(
        <>
            <Popover
                open = { props.open }
                onClose = { handleClose }
                anchorEl = { props.anchor }
                anchorOrigin = {{vertical : 'center', horizontal : 'right'}}
            >
                <Button onClick = { handleOpenViewer  }>
                    Resumé
                </Button>
            </Popover>
            <CVViewer open = {openViewer} setOpen = {setOpenViewer} />
        
        </>
    )
}