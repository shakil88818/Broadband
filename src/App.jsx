import { useEffect } from 'react';
import './App.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Routers from './router/Routers.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Routers />
    </>
  )
}

export default App
