const TaskModel = require('../models/taskModel');
const { sql, poolPromise } = require('../db/db');

class TaskController {

  static async getTasksByListId(req, res) {
    try {
      const { listId } = req.params;
      const tasks = await TaskModel.getTasksByListId(listId);
      res.json(tasks);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async createTask(req, res) {
    try {
      const { listId } = req.params; // Obtém o listId dos parâmetros da URL
      const { name } = req.body;
      if (!name) {
        return res.status(400).send('O campo "name" é obrigatório.');
      }
      const newTask = await TaskModel.createTask(listId, name); // Passa o listId para o modelo
      res.json(newTask);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async updateTask(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const result = await TaskModel.updateTask(id, name);

      if (result.rowsAffected[0] === 0) {
        return res.status(404).send('Tarefa Não Alterada.');
      }

      res.status(200).send('Tarefa Alterada com sucesso.');
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async completeTask(req, res) {
    try {
      const { id } = req.params;
      const result = await TaskModel.completeTask(id);

      if (result.rowsAffected[0] === 0) {
        return res.status(404).send('Tarefa não Atualizada.');
      }

      res.status(200).send('Tarefa Atualizada com sucesso.');
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async deleteTask(req, res) {
    try {
      const { id } = req.params;
      const result = await TaskModel.deleteTask(id);
      if (result.rowsAffected[0] === 0) {
        return res.status(404).send('Tarefa não encontrada.');
      }
      res.status(200).send('Tarefa deletada com sucesso.');
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = TaskController;