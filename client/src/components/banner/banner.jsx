import React from 'react'
import './banner.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function banner() {

   useEffect(() => {
      AOS.init();
    }, []);

  return (
    <div className='banner_container'>
        <div className='banner_text' data-aos="zoom-out" data-aos-duration="1500">
            <h2>Seja Bem vindo ao</h2>
            <div>
            <img src="./LogoBanner.png" alt="Logo Listou" />
            </div> 
        </div>
    </div>
  )
}

export default banner