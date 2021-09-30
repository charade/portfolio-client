import React, { Suspense } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar'

function App() {
  const location = useLocation();

  return (
        <>
        <Navbar />
          <SideMenu />
          <AnimatePresence exitBeforeEnter initial = {false}>
            <Switch location = {location} key = {location.pathname}>
                {/* <Route path = '/' component */}
                <Route exact path = '/'  render = {() => (
                      <Suspense fallback ={null}>
                        <About />
                      </Suspense>
                    )
                }/>
                <Route exact path = '/skills' component = {Skills} />
                <Route exact path = '/projects'  component = {Projects} />
            </Switch>
          </AnimatePresence>
        </>
  );
}

export default App;
