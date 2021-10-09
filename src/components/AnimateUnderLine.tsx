import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateUnderlineStyle } from '../assets/styles/index.styles';

const underLineVariants = {
    open : {
        width : '30px',
        opacity : 1,
        transition : {
            delay: .7,
            // duration : .3,
            type : 'spring',
            damping : 6,
            stiffness : 70
        }
    },
    hidden : {
        width: 0,
        opacity : 0
    }

}

export const AnimateUnderLine= (props : {bg : string}) => {
    const classes = useAnimateUnderlineStyle();

    return(
        <motion.span
            style = {{background : props.bg}}
            className = {classes.root}
            variants = {underLineVariants}
            initial = 'hidden'
            animate = 'open'
            exit = 'hidden'
        >

        </motion.span>
    )
}