import React from 'react'
import './PaginaInicial.css'
import HeaderPage from '../components/header/header'
import BannerPage from '../components/banner/banner'


function PaginaInicial() {
  return (
    <div>
        <HeaderPage/>
        <BannerPage/>
    </div>
  )
}

export default PaginaInicial