import { AppBar, Breadcrumbs, Link, Toolbar, Avatar } from '@material-ui/core';
import { useNavbarStyle } from '../assets/styles/index.styles';
import AvatarImg from '../assets/imgs/avatar.png';

export default function Navbar(){
    const classes = useNavbarStyle();

    return(
        <AppBar className = {classes.root}>
            <Avatar 
                className = {classes.avatar}
                src = {AvatarImg} 
                alt = 'charles ekomie avatar'
            />
        </AppBar>
    )
}

