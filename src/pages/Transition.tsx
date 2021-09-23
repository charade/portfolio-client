import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useTransitionStyle } from '../assets/styles/index.styles';
import { useHistory, useLocation } from "react-router-dom";
import TransitionCanvas from "../components/threeComponents/TransitionCanvas";
const rootVariants = {
    open : {
        clipPath : 'circle(100% at 50% 50%)',
            transition : {
            duration : 2,
            type : 'spring',
            when : 'BeforeChildre,',
            staggerChildren : 0.5,
            delayChildren : 0.7
        }
    },
    close : {
        clipPath : 'circle(2% at 4% 10%)',
        transition : {
            duration : 2,
            when : 'afterChildren',
            staggerChildren : 0.4,
        }
    }
};

const titleVariants = {
    show : {
        transition : {
            delayChildren : 0.5,
            staggerChildren : 1,
            staggerDirection : -1
        }
    },
    hidden :{},
};

const textVariants = {
    show : {
        x: 0,
        opacity : 1,
        transition : {
            type : 'spring',
            damping : 100
        }
    },
    hidden : {
        opacity : 0,
        x : 50
    }
};

const lineVariants = {
    show : {
        opacity : 1,
        width : '50%',
        transition :{
            duration : 0.6,
            type : 'spring'
        }
    },
    hidden : {
        opacity :0,
        width: 0
    }
}

export default function Transition(){
    const classes = useTransitionStyle();
    const [loaded, setLoaded] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        //get path params
        const path = location.search.split('=')[1];
        setTitle(path? path : 'about me');
        // setTimeout(() => history.push(`/${path}`),3000)
    },[location]);

    useEffect(() => {
        setLoaded(true);
    },[]);

    return(
        <motion.div 
            className = {classes.root}
            variants = {rootVariants}
            initial = 'close'
            animate = 'open'
            exit = 'close'
        >
            <motion.div
                className = {classes.container}
                variants = {titleVariants}
                animate = {loaded ? 'show' : 'hidden'}
                initial = {false}
            >
               <motion.h3 
                    className = {classes.title}
                    variants = {textVariants}
               >
                    {title} 
                </motion.h3>
                <motion.div 
                    className = {classes.line}
                    variants = {lineVariants}
                    transition = {{
                        duration : 0.6,
                        type :'spring'
                    }}
                >
                </motion.div>
            </motion.div>
            <Suspense fallback = {null} >
                <TransitionCanvas />
            </Suspense>
        </motion.div>
    )
}