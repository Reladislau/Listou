import React from "react";
import "./Beneficios.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Beneficios() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="benefitsContainer">
      <div>
        <h2>Beneficios</h2>
        <p id="subText_benefits">
          Alguns Beneficios de utilizar Listas de Tarefas:
        </p>
      </div>

    
        <div className="itensContainer" data-aos="fade-down" data-aos-duration="1500">
          <div className="item">
            <div className="titleItensContainer">
              <img src="./targetIcon.png" alt="Icone verde de um Alvo" />
              <h3>Melhora da organização:</h3>
            </div>
            <p>
              Manter todas as suas tarefas em um só lugar ajuda a visualizar e
              priorizar suas atividades, evitando esquecimentos e sobrecargas
            </p>
          </div>

          <div className="item">
            <div className="titleItensContainer">
              <img src="./mountainIcon.png" alt="Icone verde de uma montanha" />
              <h3>Aumento da produtividade:</h3>
            </div>
            <p>
              Com um planejamento claro, você pode focar nas tarefas mais
              importantes e urgentes, otimizando seu tempo e esforço
            </p>
          </div>

          <div className="item">
            <div className="titleItensContainer">
              <img src="./stressIcon.png" alt="Icone verde de uma montanha" />
              <h3>Redução do estresse:</h3>
            </div>
            <p>
              Saber exatamente o que precisa ser feito e quando, reduz a
              ansiedade e a sensação de estar sobrecarregado
            </p>
          </div>

          <div className="item">
            <div className="titleItensContainer">
              <img src="./mapIcon.png" alt="Icone verde de um Alvo" />
              <h3>Acompanhamento do progresso:</h3>
            </div>
            <p>
              Ver o progresso das suas tarefas concluídas pode ser motivador e
              proporcionar uma sensação de realização.
            </p>
          </div>

          <div className="item">
            <div className="titleItensContainer">
              <img
                src="./clipboardIcon.png"
                alt="Icone verde de uma montanha"
              />
              <h3>Aumento da produtividade:</h3>
            </div>
            <p>
              Com um planejamento claro, você pode focar nas tarefas mais
              importantes e urgentes, otimizando seu tempo e esforço
            </p>
          </div>

          <div className="item">
            <div className="titleItensContainer">
              <img src="./calendarIcon.png" alt="Icone verde de uma montanha" />
              <h3>Melhora na gestão do tempo:</h3>
            </div>
            <p>
              Definir prazos e lembretes ajuda a cumprir prazos e a gerenciar
              melhor seu tempo.
            </p>
          </div>
        </div>
    </div>
  );
}

export default Beneficios;
