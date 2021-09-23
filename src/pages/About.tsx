import { Suspense, lazy, useMemo } from 'react';
import { motion } from 'framer-motion';
import {useAboutStyle} from '../assets/styles/index.styles';
import DefaultCanvas from '../components/about/DefaultCanvas';
// import AboutContent from '../components/about/AboutContent';
// import AboutCanvas from '../components/about/AboutCanvas'
// import NavBar from '../components/navbar/NavBar';

const AboutCanvas = lazy(() => import('../components/about/AboutCanvas'));
const AboutContent = lazy(() => import('../components/about/AboutContent'));

export default function About(){
    const classes = useAboutStyle();
    const CanvasPage = useMemo(() => <AboutCanvas />, []);

    return(
        <motion.div>
            {/* position : absolute */}
            <AboutContent /> 
            {/* </Suspense> */}
            {/* position : relative */}
            <div className = {classes.root}>
                <Suspense fallback = {<DefaultCanvas />}>
                    {CanvasPage}
                </Suspense>
            </div>
        </motion.div>
    )
}