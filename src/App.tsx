import React, { useRef } from 'react';
import {Projects, Comments} from './mainSections';
import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';
import { Suspense } from 'react';
import { useAppStyle } from "./assets/styles/index.styles";
import { Landing } from "./components/Landing";

const About = React.lazy(() => import('./mainSections/About'));

let scrollPosY = 0;

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const classes = useAppStyle();
  return (
    <div className = {classes.root} >
      <Navbar />
      <Landing />
      <SideMenu />
      <div ref = {ref} className = {classes.container}>
        <Suspense fallback = {null}>
          <About />
          <Projects />
          <Comments />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
