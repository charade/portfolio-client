import { AppBar, Breadcrumbs, Link, Toolbar, Avatar } from '@material-ui/core';
import { useNavbarStyle } from '../assets/styles/index.styles';
import Pic from '../assets/avatar/portfolio_img.png';

export default function Navbar(){
    const classes = useNavbarStyle();

    return(
        <AppBar className = {classes.root}>
            <Avatar 
                className = {classes.avatar}
                src = {Pic} 
                alt = 'charles ekomie avatar'
            />
            <Toolbar className = {classes.toolbar}>
                <Breadcrumbs classes = {{root : classes.linkContainer, separator : classes.linkSeparator}}>
                    <Link color = 'initial' underline = 'hover' href = '/'>
                        <h3 className = {classes.navLink}>about</h3>
                    </Link>
                    <Link color = 'initial' underline = 'hover' href = 'projects'>
                       <h3 className = {classes.navLink}> projects</h3>
                    </Link>
                    <Link color = 'initial' underline = 'hover' href = 'advices'>
                       <h3 className = {classes.navLink}> advices</h3>
                    </Link>
                </Breadcrumbs>
            </Toolbar>
        </AppBar>
    )
}

