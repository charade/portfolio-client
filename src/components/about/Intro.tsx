import { useEffect, useState, useMemo } from 'react';
import { useIntroStyle } from '../../assets/styles/index.styles';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Bar = styled(motion.span)``;

const parentVariants = {
    hidden : {},
    show : {
        transition : {
            staggerChildren : 2,
            delayChildren : 1
        }
    }
}

const childrenVariants = {
    hidden : {
        opacity : 0 
    },
    show : {
        opacity : 1,
        transition : {
            duration : 1.4
        }
    },
}
export default function Intro(){
    const [loaded, setLoaded] = useState<boolean>(false);
    const classes = useIntroStyle();

    useEffect(() => {
        setLoaded(true);
    },[]);

    const textVariants = useMemo(() => parentVariants,[]);
    const lineVariants = useMemo(() => childrenVariants,[]);
    
    return(
        <div className = {classes.root}>
            <h1 className = {classes.title} >A programming story...</h1>
            <div className = {classes.introBox}>
                <Bar className = {classes.bar}></Bar>
                <motion.p 
                    className = {classes.text}
                    variants = {textVariants}
                    initial = {false}
                    animate = {loaded ? 'show' : 'hidden'}
                    
                >
                    Hi,{` `}  
                    <motion.span
                        className = {classes.line}
                        // variants = {lineVariants}
                    >
                        I'm  Charles Ekomie
                    </motion.span>
                    <br/>
                    <motion.span
                        className = {classes.line}
                        variants = {lineVariants}
                    >
                        I do like those moments when ideas become reality,
                    </motion.span>
                    <br/>
                    <motion.span
                        className = {classes.line}
                        variants = {lineVariants}
                    >
                        when it's pleasant to say i gave life to it...
                    </motion.span>
                    <br/>
                    <motion.span
                        className = {classes.line}
                        variants = {lineVariants}
                    >
                        That's why i'm a Javascript fullstack web developer,
                    </motion.span>
                    <br/>
                    <motion.span
                        className = {classes.line}
                        variants = {lineVariants}
                    >
                        my main purpose as a programmer is to go deeper and deeper inside programming concepts
                    </motion.span>
                </motion.p>
            </div>
        </div>
    )
}