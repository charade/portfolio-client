import React from "react";
import Intro from "./Intro";
import {useAboutContentStyle} from '../../assets/styles/index.styles'

const AboutContent = ()=>{
    const classes = useAboutContentStyle();
    return(
        <div className =  {classes.root}>
            <Intro />
            {/* <IconsMenu /> */}
        </div>
    )
}

export default AboutContent;