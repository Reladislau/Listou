import React from 'react'
import './Section.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Section() {

   useEffect(() => {
      AOS.init();
    }, []);
  

  return (
    <div className='SectionContainer'>
        <div className='textSectionContainer'>
            <h2>Mude seu modo de Organização</h2>
        </div>
        <div className='imageSectionContainer' data-aos="fade-left" data-aos-duration="1500">
            <img src="/computador.png" alt="Imagem de um cumputador utlizando o Listou" />
        </div>
    </div>
  )
}

export default Section