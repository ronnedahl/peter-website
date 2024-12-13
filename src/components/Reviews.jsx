import React from 'react'
import './reviews.css'

function Reviews() {
  return (
    <div className='reviews__container'>
      <h3>Citat från några av mina Omdömen</h3>
      <div className='reviews__container-inner'>
        <p>"Peter är noggrann,tjänstvillig hjälpsam och kunnig, och har goda kunskaper om hur man bemöter kund och hur man får till en lönsam försäljning."</p>
       <p>"Peter är ambitiös och tar snabbt till sig ny teknik. Han har varit en viktig del i många projekt och har hjälpt elever med sin tekniska kunskap och redigering."</p> 
      <p>"Peter är mycket målmedveten och praktiskt lagd. Han har alltid slutfört det han påbörjat och visat stor förmåga att lära sig nya saker på egen hand."</p>
      </div>
    </div>
  )
}

export default Reviews
