import React from 'react'
import './header.css'

function header() {
  return (
    <div className='header'>
        <div>
            <img src="./LogoHeader.png" alt="Logo Listou" />
        </div>
        <button>Entrar</button>
    </div>
  )
}

export default header