import { useState, useEffect } from "react";
import "./TaskList.css";
import TableList from "./TableList/TableList";
import Modal from "../MenuNavbar/ModalComponent/Modal";
import TableCompletedList from "./TableCompletedList/TableCompletedList";
import {
  fetchTasks,
  createTask,
  updateTask,
  completeTask,
  deleteTask,
} from "../../api/fetchTasks";

function TaskList({ listId, nameList }) {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks(listId);
        setTasks(data.filter((task) => !task.IsCompleted)); // Tarefas não concluídas
        setCompletedTasks(data.filter((task) => task.IsCompleted)); // Tarefas concluídas
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    };
    if (listId) {
      loadTasks();
    }
  }, [listId]);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleEditModalToggle = (task) => {
    setTaskToEdit(task);
    setTaskName(task.name);
    setEditModal(!editModal);
  };

  const handleAddTask = async () => {
    if (taskName) {
      const newTask = {
        name: taskName,
      };
      try {
        await createTask(listId, newTask);
        setTaskName("");
        const data = await fetchTasks(listId);
        setTasks(data.filter((task) => !task.IsCompleted));
        setCompletedTasks(data.filter((task) => task.IsCompleted));
      } catch (error) {
        console.error("Erro ao adicionar tarefa:", error);
      }
    }
    setShowModal(false);
  };

  const handleEditTask = async () => {
    if (taskToEdit && taskName) {
      const updatedTask = { ...taskToEdit, name: taskName };
      try {
        await updateTask(taskToEdit.ID, updatedTask);
        setTaskName("");
        const data = await fetchTasks(listId);
        setTasks(data.filter((task) => !task.IsCompleted));
        setCompletedTasks(data.filter((task) => task.IsCompleted));
      } catch (error) {
        console.error("Erro ao editar tarefa:", error);
      }
    }
    setEditModal(false);
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      const data = await fetchTasks(listId);
      setTasks(data.filter((task) => !task.IsCompleted));
      setCompletedTasks(data.filter((task) => task.IsCompleted));
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
    }
  };

  const formatarData = (data) => {
    const dia = data.getDate().toString().padStart(2, "0");
    const mes = data.toLocaleString("pt-BR", { month: "long" });
    const ano = data.getFullYear();
    return `${dia} de ${mes.charAt(0).toUpperCase() + mes.slice(1)} de ${ano}`;
  };

  const dataAtual = new Date();

  return (
    <div className="task_list_container">
      <div className="title_taskList_container">
        <div className="nameList_container">
          <h1>{nameList}</h1>
        </div>
        <h2>{formatarData(dataAtual)}</h2>
      </div>

      <h2 id="title_tasks_container">Lista de Tarefas 🗒️</h2>

      <div className="tasks_container">
        <TableList
          tasks={tasks}
          onTaskComplete={async (taskId) => {
            try {
              await completeTask(taskId);
              const data = await fetchTasks(listId);
              setTasks(data.filter((task) => !task.IsCompleted));
              setCompletedTasks(data.filter((task) => task.IsCompleted));
            } catch (error) {
              console.error("Erro ao completar tarefa:", error);
            }
          }}
          onEditTask={handleEditModalToggle}
          onDeleteTask={handleDeleteTask}
        />
        <button id="add_task" onClick={handleModalToggle}>
          Adicionar Tarefa
        </button>
      </div>

      {completedTasks.length > 0 ? (
        <>
          <h2 id="title_tasks_container">Tarefas Concluídas</h2>
          <img src="" alt="" />

          <div className="tasks_container">
            <TableCompletedList tasks={completedTasks} />
          </div>
        </>
      ) : (
        ""
      )}

      <Modal show={showModal}>
        <h1 id="modal_h1">Adicionar Nova Tarefa</h1>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Nome da nova tarefa"
          id="input_text_modal"
        />
        <div className="button_container_modal">
          <button id="button_cancel_add_task_modal" onClick={handleModalToggle}>
            Cancelar
          </button>
          <button id="button_add_task_modal" onClick={handleAddTask}>
            Adicionar
          </button>
        </div>
      </Modal>

      <Modal show={editModal}>
        <h1 id="modal_h1">Editar Tarefa</h1>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Nome da tarefa"
          id="input_text_modal"
        />
        <div className="button_container_modal">
          <button
            id="button_cancel_add_task_modal"
            onClick={() => setEditModal(false)}
          >
            Cancelar
          </button>
          <button id="button_add_task_modal" onClick={handleEditTask}>
            Editar
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default TaskList;
