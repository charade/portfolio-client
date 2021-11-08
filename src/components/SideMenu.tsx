import { Drawer } from '@material-ui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderIcon from '@mui/icons-material/Folder';
// import SettingsIcon from '@mui/icons-material/Settings';
import { List, ListItem } from '@material-ui/core'
import { useSideMenuStyle } from '../assets/styles/index.styles'
// import HelpIcon from '@mui/icons-material/Help';

const SideMenu =  () => {

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
                    <LinkedInIcon/>
                </ListItem>
                <ListItem className = {classes.icon}>
                    <GitHubIcon />
                </ListItem>
                <ListItem className = {classes.icon}>
                    <FolderIcon />
                </ListItem>
            </List>
        </Drawer>
    )
}

export default SideMenu;