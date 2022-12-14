import './App.css';
import React from 'react';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import About from './components/about';
import Skills from './components/skills';
import Project from './components/project';
import Contact from './components/contact';
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Footer />
      <Skills />
      <Project />
      {/* <Contact /> */}
    </>
  );
}

export default App;
