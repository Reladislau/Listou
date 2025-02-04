const { sql, poolPromise } = require('../db/db');

class TaskModel {
  static async getTasksByListId(listId) {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('listId', sql.Int, listId)
      .query('SELECT ID, name, IsCompleted FROM RenanTasks WHERE LIST_ID = @listId');
    return result.recordset;
  }

  static async createTask(listId, name) {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('listId', sql.Int, listId) // Inclui o listId como parâmetro
      .input('name', sql.VarChar, name)
      .query('INSERT INTO RenanTasks (LIST_ID, name, isCompleted) OUTPUT INSERTED.ID VALUES (@listId, @name, 0)');
    return result.recordset[0];
  }

  static async updateTask(id, name) {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('id', sql.Int, id)
      .input('name', sql.VarChar, name)
      .query('UPDATE RenanTasks SET name = @name WHERE ID = @id');
    return result;
  }

  static async completeTask(id) {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('id', sql.Int, id)
      .query('UPDATE RenanTasks SET isCompleted = 1 WHERE ID = @id');
    return result;
  }

  static async deleteTask(id) {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('id', sql.Int, id)
      .query('DELETE FROM RenanTasks WHERE ID = @id');
    return result;
  }
}

module.exports = TaskModel;