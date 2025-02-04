import React from 'react'
import './component.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Component() {

    const Navigate = useNavigate()

     useEffect(() => {
        AOS.init();
      }, []);

    const goTo = () => {
        Navigate('/ToDoList')
    }

  return (
    <div className='componentContainer' >
        <div className='TextContainer' >
            <h3 data-aos="zoom-in" data-aos-duration="1500">Comece agora a Organizar sua rotina:</h3>
            <button onClick={goTo} data-aos="zoom-in" data-aos-duration="1500">Começar</button>
        </div>
        <div className='imagemContainer'>
            <img src="./ImageListou.png" alt="Imagem de um homem utilizando o listou no computador" />
        </div>
    </div>
  )
}

export default Component