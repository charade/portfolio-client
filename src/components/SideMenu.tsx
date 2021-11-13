import { useCallback, useState } from 'react';
import { Drawer } from '@material-ui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderIcon from '@mui/icons-material/Folder';
// import SettingsIcon from '@mui/icons-material/Settings';
import { List, ListItem } from '@material-ui/core'
import { useSideMenuStyle } from '../assets/styles/index.styles'
// import HelpIcon from '@mui/icons-material/Help';
import { DownloadPopover } from "./DownloadPopover";
import { RedirectBtn } from './RedirectBtn';

const SideMenu = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLLIElement>(null);
    const [open, setOpen] = useState<boolean>(false);

    const toogleOpen = useCallback((e : React.MouseEvent<HTMLLIElement>) => {
        const target = e.target as HTMLLIElement;
        setAnchorEl(target);
        setOpen(!open);
    },[open]);

    const classes = useSideMenuStyle()
    return(
        <Drawer
            anchor = 'left'
            variant = 'permanent'
            classes = {{paper : classes.root}}
        >
            <List className = {classes.listEl}>
                {/* <ListItem className = {classes.icon}>
                    <HelpIcon />
                </ListItem>
                <ListItem className = {classes.icon}>
                    <SettingsIcon />
                </ListItem> */}
                <ListItem className = {classes.icon}>
                    <RedirectBtn link = "https://www.linkedin.com/in/charlesekomie">
                        <LinkedInIcon/>
                    </RedirectBtn>
                </ListItem>
                <ListItem className = {classes.icon}>
                    <RedirectBtn link = "https://github.com/charade">
                        <GitHubIcon />
                    </RedirectBtn>
                </ListItem>
                <ListItem className = {classes.icon} onClick = {toogleOpen}>
                    <FolderIcon />
                </ListItem>
            </List>
            <DownloadPopover open = {open} setOpen = {setOpen} anchor = {anchorEl}/>
        </Drawer>
    )
}

export default SideMenu;