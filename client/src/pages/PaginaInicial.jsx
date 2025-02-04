import React from 'react'
import './PaginaInicial.css'
import HeaderPage from '../components/header/header'
import BannerPage from '../components/banner/banner'
import Section from '../components/Section/Section'
import Beneficios from '../components/Beneficios/Beneficios'
import Footer from '../components/footer/footer'
import Component from '../components/component/component'


function PaginaInicial() {
  return (
    <div className='InitialPageContainer'>
        <HeaderPage/>
        <BannerPage/>
        <Section/>
        <Beneficios/>
        <Component/>
        <Footer/>
    </div>
  )
}

export default PaginaInicial