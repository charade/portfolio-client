import React , { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
// import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';
import { Suspense } from 'react';

const About = React.lazy(() => import('./pages/About'));

function App() {
  const [top, setTop] = useState<number>(0);
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    // setTimeout(() => ref.current.scrollTop = 1000, 500);
  },[]);

  return (
    <div ref = {ref} style = {{overflow : 'scroll'}}>
      <Navbar />
      <SideMenu />
      <AnimatePresence exitBeforeEnter>
      <Suspense fallback = {<h1>Loading...</h1>}>
        <About />
      </Suspense>
        <Skills />
        <Projects />
      </AnimatePresence>
    </div>
  );
}

export default App;
