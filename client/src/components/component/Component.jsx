import React from 'react'
import './component.css'
import { useNavigate } from 'react-router-dom'

function Component() {

    const goTo = () => {
        useNavigate('/ToDoList')
    }

  return (
    <div className='componentContainer'>
        <div className='TextContainer'>
            <h3>Comece agora a Organizar sua rotina:</h3>
            <button onClick={goTo}>Começar</button>
        </div>
        <div className='imagemContainer'>
            <img src="./ImageListou.png" alt="Imagem de um homem utilizando o listou no computador" />
        </div>
    </div>
  )
}

export default Component