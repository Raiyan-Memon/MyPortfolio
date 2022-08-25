import './App.css';
// import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import About from './components/about';
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false, });
  }, []);
  return (
    <>
      <Header />
      <Home />
      <About />
      <Footer />
    </>
  );
}

export default App;