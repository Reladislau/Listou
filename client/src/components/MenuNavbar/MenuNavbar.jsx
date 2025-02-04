import { useState, useEffect } from "react";
import "./MenuNavbar.css";
import Modal from "./ModalComponent/Modal";
import { fetchLists, createList } from "../../api/fetchLists";

function MenuNavbar({ onSelectList, onAddList }) {
  const [lists, setLists] = useState([]);
  const [nameList, setNameList] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedListId, setSelectedListId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchLists();
      console.log(data); // Verifique a estrutura dos dados aqui
      setLists(data);
    };

    fetchData();
  }, []);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleAddList = async () => {
    if (nameList) {
      const newList = { name: nameList };
      const createdList = await createList(newList);
      if (createdList) {
        setLists([...lists, createdList]);
        onAddList(createdList); // Adiciona a nova lista ao estado do componente pai
        setNameList(""); // Limpa o campo de entrada após adicionar a lista
      }
      setShowModal(false); // Fecha o modal após adicionar a lista
    }
  };

  return (
    <div className="menu_container">
      <div className="menu_hamburguer_container">
        <img src="Logo.png" alt="Logo do App Listou" />
      </div>

      <div className="container_lists">
        {lists.map((list) => (
          <div className="hover">
          <div
            key={list.ID}
            className={`list ${list.ID === selectedListId ? "selected" : ""}`}
            onClick={() => {
              onSelectList(list.ID);
              setSelectedListId(list.ID);
            }}
          >
            <h2>{list.NOME}</h2>
          </div>
          </div>
        ))}
      </div>

      <button id="add_new_list_button" onClick={handleModalToggle}>
        Nova Lista
      </button>

      <Modal show={showModal}>
        <h1 id="modal_h1">Adicionar Nova Lista?</h1>
        <input
          type="text"
          value={nameList}
          onChange={(e) => setNameList(e.target.value)}
          placeholder="Nome da nova lista"
          id="input_text_modal"
        />
        <div className="button_container_modal">
          <button id="button_cancel_add_list_modal" onClick={handleModalToggle}>
            Cancelar
          </button>
          <button id="button_add_list_modal" onClick={handleAddList}>
            Adicionar
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default MenuNavbar;