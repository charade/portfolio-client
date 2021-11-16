import {useState} from 'react';
import { Modal, Button, CircularProgress } from "@material-ui/core";
import { useCVViewerStyle } from "../assets/styles/index.styles";
import { CloseIconButton } from './CloseIconButton';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import { saveAs } from 'file-saver';
import { baseUrl } from "../service";

type Props = {
    open : boolean,
    setOpen : (open : boolean) => void
};

export const CVViewer = (props : Props) => {
    const [numPages, setNumPages] = useState<number>(0);
    const classes = useCVViewerStyle();
    //file failed to load
    const [ loadError, setLoadError ] = useState<boolean>(false);
    //on closing modal
    const handleClose = () => props.setOpen(false);
    //on loading complete
    const handleLoadSucces = (pages) => {
        setNumPages(pages.numPages);
    };
    const handleLoadError = () => setLoadError(true);

    const handleDownloadFile = () => saveAs(`${baseUrl}/download`, 'charles-Ekomie-cv.pdf');

    return(
        <Modal
            open = { props.open }
            onClose = { handleClose }
            classes = {{root : classes.root}}
        >
            <div className = {classes.container}>
                <div className = {classes.bar}>
                    <Button 
                        // disabled = {loadError}
                        startIcon = {<CloudDownloadIcon />} 
                        variant = 'contained'
                        onClick = { handleDownloadFile }
                    >
                        download
                    </Button>
                    <CloseIconButton action = { handleClose }/>
                </div>
                <Document
                    className = {classes.document}
                    file = {`${baseUrl}/download`}
                    onLoadSuccess = { handleLoadSucces }
                    onLoadError = { handleLoadError }
                    loading = { <CircularProgress/> }
                >
                    {new Array(numPages).fill('').map((page, number) => 
                        <Page pageNumber = {number + 1} key = {`page-${number}`} />
                    )}
                </Document>
            </div>
        </Modal>
    )
}