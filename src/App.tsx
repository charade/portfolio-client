import React, { Suspense } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import SideMenu from './components/SideMenu';
import NavBar from './components/navbar/NavBar';

// const About = React.lazy(() => import('./pages/About'));
// const About = React.lazy(() => Promise.all([
//   import('./pages/About'), 
//   new Promise(resolve => setTimeout(() => resolve, 500))
// ]).then(([imp]) => imp));

function App() {
  const location = useLocation();

  return (
        <>
          <SideMenu />
          <NavBar />
          <AnimatePresence exitBeforeEnter initial = {false}>
            <Switch location = {location} key = {location.pathname}>
                {/* <Route path = '/' component */}
                <Route exact path = '/'  component = {About}/>
                <Route exact path = '/skills' component = {Skills} />
                <Route exact path = '/projects'  component = {Projects} />
            </Switch>
          </AnimatePresence>
        </>
  );
}

export default App;
