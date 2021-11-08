import React, { useEffect, useRef } from 'react';
import Projects from './pages/Projects';
import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';
import { Suspense } from 'react';
import { useAppStyle } from "./assets/styles/index.styles";
import {  lerp } from "./utils/lerp";
import { Landing } from "./components/Landing";

const About = React.lazy(() => import('./pages/About'));

let scrollPosY = 0;

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const classes = useAppStyle();
  //request animation ref
  const animateRef = useRef<number>(0);

  useEffect(() => {
    //redefine scroll to be container height
    if(ref.current){
      document.body.style.height = `${ref.current.getBoundingClientRect().height}px`;
    }
    const animateScroll = () => {
      if(ref.current){
        scrollPosY = lerp(scrollPosY, window.scrollY, 0.0555555);
        ref.current.style.transform = `translate3d(0, -${scrollPosY}px, 0)`;
        animateRef.current = requestAnimationFrame(animateScroll);
      }
    }
    animateRef.current = requestAnimationFrame(animateScroll)

    return () => cancelAnimationFrame(animateRef.current)
  },[]);

  return (
    <div className = {classes.root} >
      <Navbar />
      <Landing />
      <SideMenu />
      <div ref = {ref} className = {classes.container}>
        <Suspense fallback = {null}>
          <About />
          <Projects />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
