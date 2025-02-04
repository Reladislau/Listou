import axios from "../axiosConfig";

export async function fetchTasks(listId) {
  try {
    const path = `/tasks/lists/${listId}/tasks`;
    const response = await axios.get(path);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    return [];
  }
}

export async function createTask(listId, task) {
  try {
    const path = `/tasks/lists/${listId}/tasks`;
    const response = await axios.post(path, task);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    return null;
  }
}

export async function updateTask(taskId, task) {
  try {
    const path = `/tasks/tasks/${taskId}`;
    const response = await axios.put(path, task);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    return null;
  }
}

export async function completeTask(taskId) {
  try {
    const path = `/tasks/tasks/${taskId}/complete`;
    const response = await axios.put(path);
    return response.data;
  } catch (error) {
    console.error('Erro ao completar tarefa:', error);
    return null;
  }
}

export async function deleteTask(taskId) {
  try {
    const path = `/tasks/tasks/${taskId}`;
    const response = await axios.delete(path);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar tarefa:', error);
    return null;
  }
}