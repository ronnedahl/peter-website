// src/components/Header.js
import React from 'react';
import './header.css';


function Header() {
  return (

    <>
      <div className='wrapper'>
        <article className="header__upper-icons">

        </article>
      </div>
      <header className="header">

        <section className="header__hero">
          <article className='header__hero-text'>
             <article className='header__hero-text-inner'>
              <section className='header__hero-textcont'>
              <h1>WEBUTVECKLARE<br></br>UNDER UTBILDNING STÅR TILL TJÄNST</h1>
               
                <h3>Mina lia veckor är förlagda till vecka 2-10 och 14-23. Jag är en kreativ och ide rik man med ett stort
                intresse för webbutveckling och den snabba utvecklingen inom AI.</h3>
                <article className='header__hero-subtext'>
                <h4>Desto mer jag lär mig inser jag hur kraftfull denna utbildning är och flera ideer uppkommer dagligen
                om vad jag vill göra för projekt samtidigt som jag tycker det här roligt att arbeta med </h4>
                </article>
                <div className='header__hero-btn-group'>
                  <button className='header__hero-btn' onClick={() => window.location.href = "#podden"}>
                    Mer om mig I podden
                  </button>
                  <button className='header__hero-omdome'>Omdömen</button>
                </div>
              </section>
            </article>
            <figure className='header__hero-img'>
              <img src="/assets/my-background.jpg"></img>
              <article className='header__my-contact'>
              <p>Tel:070-489 30 20</p>
              <p>Mail: dev.peter.ai@gmail.com</p>
              </article>
            </figure>
          </article>
        </section>


      </header>
    </>

  );
}

export default Header;
