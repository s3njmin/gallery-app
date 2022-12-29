import { useCallback, useEffect, useState } from 'react';
import Nav from './components/Nav';
import './styles/App.css';
import { SiIconfinder } from 'react-icons/si';
import Layout from './components/Layout';
import Card from './components/Card';

function App() {
  // make side nav disappear on scroll
  const [navIsVisible, setNavIsVisible] = useState(true);
  const [y, setY] = useState((document.scrollingElement !== null) ? document.scrollingElement.scrollHeight : 50);

  const handleNavigation = useCallback(() => {
    if (window.scrollY > 50 && y > window.scrollY) {
      setNavIsVisible(true);
      // console.log(y  + "|" + window.scrollY + "| scroll Up Detected");
    } else if (y > 50 && y < window.scrollY) {
      setNavIsVisible(false);
      // console.log(y + "|" + window.scrollY + "| scroll Down Detected");
    }
    setY(window.scrollY)
  }, [y]);

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div className='App'>
      {navIsVisible && <Nav/>}
  
      <div className='header'>
        <SiIconfinder className='icon' size='3em' color='#ebebeb'/>
      </div>

      <Layout/>
    </div>
  );
}


export default App;
