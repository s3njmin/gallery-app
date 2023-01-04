import { useCallback, useEffect, useState } from 'react';
import Nav from './components/Nav';
import './styles/App.css';
import { SiIconfinder } from 'react-icons/si';
import Layout from './components/Layout';

import eiffelTower from './resources/eiffelTower.jpg';
import parisArc from './resources/parisArc.jpg';
import coloseum from './resources/coloseum.jpg';
import goldenGate from './resources/goldenGate.jpg';
import taj from './resources/taj.jpg';

let imageGallery = [
  eiffelTower,
  parisArc,
  coloseum,
  goldenGate,
  taj
];

function App() {

  // make side nav bars disappear or appear on scroll
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

  
  // upload images
  const [filebase64, setFileBase64] = useState<string>("");

  function formSubmit() {
    // e.preventDefault();
    console.log({filebase64});
  }

  function convertFile(files: FileList | null) {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: string = fileRef.type || "";
      console.log("This file upload is of type:", fileType);

      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);

      reader.onload = (ev: any) => {
        // convert it to base64, push into image gallery
        imageGallery.push(`data:${fileType};base64, ${btoa(ev.target.result)}`);
      }
    }
  }

  return (
    <div className='App'>
       {navIsVisible && <Nav formSubmit={formSubmit} convertFile={convertFile}/>}

       <div className='header'>
         <SiIconfinder className='icon' size='3em' color='#ebebeb'/>
       </div>

      <Layout imageGallery={imageGallery}/>
    </div>
  );
}

export default App;
