import React, {useRef, useState, useEffect} from 'react';
import { useHistory, useLocation } from 'react-router';
import {useNavbarStyle} from '../../assets/styles/index.styles';
import PanelIndicator from './PanelIndicator';

type IProps = {
    left : number,
    top : number,
}

export default function MainNavContent(){
    const [indicatorProps, setIndicatorProps] = useState<IProps>({top :0, left : 0})
    const navRef = useRef<HTMLUListElement>();
    const classes = useNavbarStyle();
    const history = useHistory()
    const path = useLocation();

    //get current li position to move panelIndicator comp
    useEffect(() => {
        let pathSearch = path.pathname ;
        //get current navigation li element position
        const liList = Array.from(navRef.current.querySelectorAll('li'));
        const liEl = liList.find(li =>{
            let liLabelPath = li.getAttribute('aria-labelledby');
            return liLabelPath === pathSearch;
        });
        // update navigation indicator position
        const left = liEl.offsetLeft;
        const top = liEl.offsetTop;
        setIndicatorProps({top, left});
    },[path])

    const handleRedirect = (e : React.MouseEvent<HTMLLIElement>) => {
        const target = e.target as HTMLLIElement;
        const path = target.getAttribute('aria-labelledby')
        // history.push(`/redirecting?path=${path}`)
        setTimeout(() => history.push(path), 500);
    }

    return(
        <ul className = {classes.upperList} ref = {navRef} >
            <li>
                <ul className = {classes.list} >
                    <li 
                        aria-labelledby = '/'
                        className = {classes.listItem}
                        onClick = {handleRedirect}
                    >
                        About
                    </li>
                    <li 
                        aria-labelledby = '/skills'
                        className = {classes.listItem}
                        onClick = {handleRedirect}
                    >
                        Skills
                    </li>
                    <li 
                        aria-labelledby = '/projects'
                        className = {classes.listItem}
                        onClick = {handleRedirect}
                    >
                        Projects
                    </li>
                </ul>
            </li> 
            <li 
                aria-labelledby = '/advices'
                className = {classes.listItem}
                onClick = {handleRedirect}
            >
                Advices
            </li>
            <PanelIndicator position = {indicatorProps}/>
        </ul>
    )
}