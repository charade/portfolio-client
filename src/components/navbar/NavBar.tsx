import { FC, useEffect, useState } from 'react';
import MainNavContent from './MainNavContent';
import MyPic from '../../assets/avatar/portfolio_img.png';
import { 
    AppBar,
    Toolbar,
    Avatar,
} from "@material-ui/core";
import {useNavbarStyle} from '../../assets/styles/index.styles';

const NavBar:FC = () => {
    const [loaded, setLoaded] = useState<boolean>(false);
    const classes = useNavbarStyle();

    useEffect(() => {
        setLoaded(true);
    },[loaded]);

    return(
        <AppBar 
            classes = {{root : classes.root}}
        >
            <Avatar 
                src = {MyPic} 
                alt = 'charles avatar'
                className = {classes.avatar}
            />
            <Toolbar className = {classes.toolbar}>
                <MainNavContent />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;