
// src/App.js
import React from 'react';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import MapComponent from './components/MapComponent.jsx';
import Reviews from './components/Reviews.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AboutMe from './components/AboutMe.jsx'

function App() {
  return (
    <>
      <NavBar />
      <Header />
       <main>
       <Projects />
       <Reviews />
        <About />
       <AboutMe />
        <Contact />
        <MapComponent />
      </main>
      <Footer />
    </>
  );
}

export default App;
