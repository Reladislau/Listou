import React from 'react';


export default function TableCompletedList({ tasks }) {
  return (
    <div className="table_list_container">
      {tasks.map((task) => (
        <div key={task.ID} className="task_item">
          <label htmlFor={`task-${task.ID}`}>{task.name}</label>
        </div>
      ))}
    </div>
  );
}