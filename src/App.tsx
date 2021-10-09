import React from 'react';
import Projects from './pages/Projects';
import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';
import { Suspense } from 'react';
import { useAppStyle } from "./assets/styles/index.styles";

const About = React.lazy(() => import('./pages/About'));

function App() {

  const classes = useAppStyle();

  return (
    <div className = {classes.root}>
      <Navbar />
      <SideMenu />
      <Suspense fallback = {<h1>Loading...</h1>}>
        <About />
        <Projects />
      </Suspense>
    </div>
  );
}

export default App;
