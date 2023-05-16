import React from 'react'
import Header from '../layout/Header'
import Accueil from './accueil/Accueil'
import Apropos from './apropos/Apropos'
import Services from './serv/Services'
import Tarifs from './tarifs/Tarifs'
import Avis from './avis/Avis'
import Contact from './contact/Contact'

import Footer from "../layout/Footer"

function Home() {
  return (
    <>
        <Header />
        <Accueil />
        <Apropos />
        <Services />
        <Tarifs />
        <Avis />
        <Contact />

        <Footer />
    </>
   
  )
}

export default Home