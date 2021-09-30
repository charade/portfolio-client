import React from 'react';
import  { useSkillsStyle } from '../../assets/styles/index.styles';
import { motion } from 'framer-motion';

const titleVariants ={
    open : {
        width : '100%',
        transition : {
            when : 'beforeChildren'
        }   
    },
    close : {
        width : 0
    }
}

const maskVariants = {
    open : {

    }
};

export default function Title({title} :{title: string}) {

    const classes = useSkillsStyle();

    return(
        <motion.h1
            custom = {title}
            className = {classes.title}
        >
            {title}
        </motion.h1>
    )
}