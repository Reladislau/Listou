import { useState, useEffect } from "react";
import MenuNavbar from "../components/MenuNavbar/MenuNavbar";
import TaskList from "../components/List/TaskList";
import { fetchLists } from "../api/fetchLists";
import "./ToDoList.css";

function App() {
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);

  useEffect(() => {
    const loadLists = async () => {
      const data = await fetchLists();
      setLists(data);
    };
    loadLists();
  }, []);

  const handleSelectList = (listId) => {
    const selected = lists.find((list) => list.ID === listId);
    setSelectedList(selected || null);
  };

  return (
    <div className="app_container">
      <MenuNavbar onSelectList={handleSelectList} />

      <div className="task_list_container">
        {selectedList ? (
          <TaskList listId={selectedList.ID} nameList={selectedList.NOME}/> // Passa o listId para o TaskList
        ) : (
          <div className="container_geral">
              <div className="index_class_container">
                <h1>Bem vindo ao seu espaço de tarefa</h1>

                <div className="index_text">
                  <div className="img_index">
                    <img src="/Prancheta.png" alt="Imagem de uma prancheta" />
                  </div>
                  <h2>Sem lista selecionada <br></br>Crie ou selecione uma Lista no Menu</h2>
                </div>
              </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;