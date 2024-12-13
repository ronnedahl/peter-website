import React, { useState, useEffect } from 'react';
import './navbar.css';

import { HashLink } from 'react-router-hash-link';
import '@fortawesome/fontawesome-free/css/all.min.css';
import information from '../../public/assets/information.svg'
import svartInformation from '../../public/assets/svart.png'


function NavBar() {
  const [openModal, setOpenModal] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false); 

  const modalPopup = () => {
    setOpenModal(!openModal);
    console.log('button was clicked');
  };

  const toggleNav = () =>{
    setOpenNav(!openNav)
  }

  const closeNav = () =>{
    setOpenNav(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Lägg till scrollhändelse-lyssnare
    window.addEventListener('scroll', handleScroll);

    // Rensa upp händelse-lyssnare när komponenten avmonteras
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


return (
    <>
      <header>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <h3 className="navbar__logo">
          Min<span> Portfolio</span>
        </h3>
        
        <img className='hide-modal' onClick={modalPopup} src ={ information } 
        style ={{width:"50px", marginTop:"-1.8rem", cursor:"pointer",color:"#FFF"}}
        />
        

        {/* Hamburger menyikon */}
        <section className='navbar__hamburger' onClick={toggleNav}>
          <i className='fas fa-bars'></i>
        </section>
       
        
        <article className="navbar__text-center">
        <HashLink smooth to="#mitt-cv">Mitt Cv</HashLink>
<HashLink smooth to="#about-me">Om Mig</HashLink>
<HashLink smooth to="#kontakt">Kontakt</HashLink>
<HashLink smooth to="#utbildning">Utbildning</HashLink>
        </article>
        <figure onClick={modalPopup} className="navbar__btn">
          <button>INFORMATION</button>
        </figure>
      </nav>
      </header>
      
      {/* Mobilmeny */}
      {openNav && (
        <div className="mobile-menu">
          <div className="mobile-menu__close" onClick={closeNav}>
            <i className="fas fa-times"></i>
          </div>
          <div className="mobile-menu__links">
            <a href="/#mitt-cv" onClick={closeNav}>Mitt Cv</a>
            <a href="/#about-me" onClick={closeNav}>Om Mig</a>
            <a href="/#kontakt" onClick={closeNav}>Kontakt</a>
            <a href="/#utbildning" onClick={closeNav}>Utbildning</a>
          </div>
        </div>
      )}
      
      {openModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>VIKTIG Information</h2>
            <img src={svartInformation} alt="Viktig information" />
            <p>Vi är fullt försäkrade under hela LIA perioden av folkuniversitetet</p>
            <button onClick={modalPopup}>Stäng</button>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
