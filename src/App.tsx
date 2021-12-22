import {Projects, Comments} from './views';
import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';
import { Suspense } from 'react';
import { useAppStyle } from "./assets/styles/index.styles";
import { Landing } from "./components/Landing";
import About from './views/About';

function App() {
  const classes = useAppStyle();
  return (
    <div className = {classes.root} >
      <Navbar />
      <Landing />
      <SideMenu />
      <div className = {classes.container}>
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
