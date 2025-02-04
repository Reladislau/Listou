import React from "react";
import "./TableList.css";

export default function TableList({ tasks, onTaskComplete, onEditTask, onDeleteTask }) {
  console.log("Tarefas recebidas pelo TableList:", tasks); // Debug

  return (
    <div className="table_list_container">
      {tasks.length === 0 ? <h2 id="table_list_text">Sem novas Tarefas</h2> : null}
      {tasks.map((task) => (
        <div key={task.ID} className="task_item">
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              id={`task-${task.ID}`}
              onChange={() => onTaskComplete(task.ID)}
              checked={task.IsCompleted}
            />
            <label htmlFor={`task-${task.ID}`}>{task.name}</label>
          </div>
          <div className="buttons_tasks_container">
            <button id="button_edit_task" onClick={() => onEditTask(task)}>
              <img src="./PencilIcon.png" alt="Editar" />
            </button>
            <button id="button_delete_task" onClick={() => onDeleteTask(task.ID)}>
              <img src="./TrashIcon.png" alt="Deletar" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}