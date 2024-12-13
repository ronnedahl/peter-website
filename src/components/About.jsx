import { motion } from "framer-motion"
import React, { useState } from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import CustomAudioPlayer from './CustomAudioPlayer';

function About() {

  const myCv = [
    { id: 1, title: 'Webutvecklare', description: '2023 - 2025 Webutvecklare 400P',extrainfo:'En 2-årig Frontend utbildning där varje kurs avslutas med gruppexemenationer och enskilda exemenations uppgifter' },
    { id: 2, title: 'Jula Sverige AB', description: '2006 - 2023 Jula Sverige AB',extrainfo:'Hjälper kund med att hitta rätt produkter samt tar hand om reklamtioner och förbereder kampanjer samt kassa arbete. Även lagerarbete förekommer.' },
    { id: 3, title: 'Expert Stormarknad', description: '2005-2006 Expert Stormarknad',extrainfo:'Hjälpte kunder med deras köpbeslut och såg till att både butiken och kunden var nöjd efter avslutat köp.' },
    { id: 4, title: 'Tv4 Värmland', description: '2004-2005 Tv4 Värmland',extrainfo:'Som timanställd gjorde jag nyhetsreportage med en reporter och hanterade då videokamer och redigeringsbiten i sammarbete med reporter' },
    { id: 5, title: 'Systemvetenskap', description: '2001 - 2004 systemvetenskap',extrainfo:'Läste systemvetenskap i 3år samtidigt som jag jobbade extra som kameran och redigerare samt var ansvarig för stundent TV' },
    { id: 6, title: 'Kanal 12 lokal TV', description: '2001 - 2004 Kanal 12 lokal TV',extrainfo:'Jobbade som timanställd som fotograf och redigerare. Gjorde nöjesprogam i sammarbete med en reporter' },
    { id: 7, title: 'GVA-Konsult AB', description: '2000 - 2001 GVA-Konsult AB',extrainfo:'Jobbade ett konsult företag som projekterade gator och vägar. Gick som assisterande prisma bärare för att mäta höjder samt inventera avloppsbrunnar och dagvattenbrunnar' },
    { id: 8, title: 'Medieproducent KY 80P', description: '1998 -2000 Medieproducent KY 80P',extrainfo:'Lärde mig kamerateknik samt redigeringsteknik i både bild och ljud samt praktiserade på tv4 Jämtland.Vidare fick lära oss om journalistik' },
  ];

  const [openItems, setOpenItems] = useState({})

  const toggleItem = (id) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }))

  }

return (
    <>
      <h2>Min Arbetslivs Erfarenhet</h2>
      <section id="mitt-cv" className="about-container">
      <figure className='about-container__img left'>
           <img className="about-container__img-rotate-left" src="/assets/cv.png"></img>
           </figure>
        <section className='about-container__inner'>
        
          <section className="about-container__text">
            {myCv.map((mittcv) => (
              <div key={mittcv.id} className={`cv-item ${openItems[mittcv.id] ? 'active-background' : ''}`}>
                <article className='text'>
                <p>
                  <motion.span
                    className="toggle-icon"
                    onClick={() => toggleItem(mittcv.id)}
                    style={{ cursor: 'pointer', marginRight: '10px',display:'inline-block' }}
                    
                  >
                    <FontAwesomeIcon icon={openItems[mittcv.id] ? faMinus : faPlus}
                     style={{ fontSize: "30px", marginRight: "20px",zIndex:"999"}}
                    />
                  </motion.span>
                  
                  <strong>{mittcv.title}:</strong> {mittcv.description}
                  
                </p>
                </article>
                {openItems[mittcv.id] && (
                  <div className="extra-info" onClick={() => toggleItem(mittcv.id)}>
                    <p>{mittcv.extrainfo}.</p>
                  </div>
                )}
              </div>
            ))}
          </section>
         

        </section>
        <figure className='about-container__img right'>
           <img className="about-container__img-rotate-right" src="/assets/cv.png"></img>
          </figure>
      </section>
     
      <div className="audio-controlls-wrapper" id="podden">
      <h3>Om du vill veta mer om mig lyssna gärna på den här korta podcasten</h3>
      <section className="audio-controlls" >
        <CustomAudioPlayer />
      </section>
      </div>
    </>

  );
}

export default About;

