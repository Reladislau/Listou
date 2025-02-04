import React from 'react'
import './PaginaInicial.css'
import HeaderPage from '../components/header/header'
import BannerPage from '../components/banner/banner'
import Section from '../components/Section/Section'
import Beneficios from '../components/Beneficios/Beneficios'


function PaginaInicial() {
  return (
    <div className='InitialPageContainer'>
        <HeaderPage/>
        <BannerPage/>
        <Section/>
        <Beneficios/>
    </div>
  )
}

export default PaginaInicial