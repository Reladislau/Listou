import React from 'react'
import './Section.css'

function Section() {
  return (
    <div className='SectionContainer'>
        <div className='textSectionContainer'>
            <h2>Mude seu modo de Organização</h2>
        </div>
        <div className='imageSectionContainer'>
            <img src="/computador.png" alt="Imagem de um cumputador utlizando o Listou" />
        </div>
    </div>
  )
}

export default Section