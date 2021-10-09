import React , { useRef } from 'react';
import Projects from './pages/Projects';
import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';
import { Suspense } from 'react';

const About = React.lazy(() => import('./pages/About'));

function App() {
  const ref = useRef<HTMLDivElement>();

  return (
    <div ref = {ref} style = {{overflow : 'scroll'}}>
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
