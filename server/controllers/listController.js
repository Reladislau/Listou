const ListModel = require('../models/listModel');

class ListController {
  static async getAllLists(req, res) {
    try {
      const lists = await ListModel.getAllLists();
      res.json(lists);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getListById(req, res) {
    try {
      const { id } = req.params;
      const list = await ListModel.getListById(id);
      if (list) {
        res.json(list);
      } else {
        res.status(404).send('List não encontrada');
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  }


  static async createList(req, res) {
    try {
      const { name } = req.body;
      const newList = await ListModel.createList(name);
      res.json(newList);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async updateList(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      await ListModel.updateList(id, name);
      res.sendStatus(204);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async deleteList(req, res) {
    try {
      const { id } = req.params;
      await ListModel.deleteList(id);
      res.sendStatus(204);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = ListController;