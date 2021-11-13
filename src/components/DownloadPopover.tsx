import { Popover, Button } from "@material-ui/core";
import { useState, useCallback } from "react";
import { downloadResume } from "../service";
import { CVViewer } from './CVViewer';

type PropsType = {
    anchor : Element | null;
    open : boolean;
    setOpen: (open : boolean) => void
};

export const DownloadPopover = (props : PropsType) => {
    const [openViewer, setOpenViewer] = useState<boolean>(false);
    const [data, setData] = useState<string>('');
    //close poper button
    const handleClose = () => {
        props.setOpen(false);
    };
    const handleDownload = useCallback(async() => {
        try{
            const requested = await downloadResume();
            setData(requested.data);
            setTimeout(() => handleClose(), 50);
            setOpenViewer(true);
        }catch{
            //need to define error action
        }
    },[]);

    return(
        <>
            <Popover
                open = { props.open }
                onClose = { handleClose }
                anchorEl = { props.anchor }
                anchorOrigin = {{vertical : 'center', horizontal : 'right'}}
            >
                <Button onClick = { handleDownload  }>
                    Resumé
                </Button>
            </Popover>
            <CVViewer open = {openViewer} setOpen = {setOpenViewer} data = {data} />
        
        </>
    )
}