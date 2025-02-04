import React from 'react'
import './Beneficios.css'

function Beneficios() {
  return (
    <div className='benefitsContainer'>
        <div>
        <h2>Beneficios</h2>
        <p id='subText_benefits'>Alguns Beneficios de utilizar Listas de Tarefas:</p>
        </div>

        <div className='itensContainer'>
            <div>
                <h3>Melhora da organização:</h3>
                <p>Manter todas as suas tarefas em um só lugar ajuda a visualizar e priorizar suas atividades, evitando esquecimentos e sobrecargas</p>
            </div>
            <div>
                <h3>Aumento da produtividade:</h3>
                <p>Com um planejamento claro, você pode focar nas tarefas mais importantes e urgentes, otimizando seu tempo e esforço</p>
            </div>
            <div>
                <h3>Redução do estresse:</h3>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Beneficios