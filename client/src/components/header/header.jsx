import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

function header() {

  const Navigate = useNavigate()

  const goTo = () => {
    Navigate("/ToDoList");
  };

  return (
    <div className="header">
      <div>
        <img src="./LogoHeader.png" alt="Logo Listou" />
      </div>
      <button onClick={goTo}>Entrar</button>
    </div>
  );
}

export default header;
