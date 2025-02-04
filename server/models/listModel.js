const { sql, poolPromise } = require('../db/db');

class ListModel {
  static async getAllLists() {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT ID, NOME FROM RenanLists');
    return result.recordset;
  }

  static async getListById(id) {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('id', sql.Int, id)
      .query('SELECT ID, NOME FROM RenanLists WHERE ID = @id');
    return result.recordset[0];
  }


  static async createList(name) {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('name', sql.VarChar, name)
      .query('INSERT INTO RenanLists (NOME) OUTPUT INSERTED.ID VALUES (@name)');
    return result.recordset[0];
  }

  static async updateList(id, name) {
    const pool = await poolPromise;
    await pool.request()
      .input('id', sql.Int, id)
      .input('name', sql.VarChar, name)
      .query('UPDATE RenanLists SET NOME = @name WHERE ID = @id');
  }

  static async deleteList(id) {
    const pool = await poolPromise;
    await pool.request()
      .input('id', sql.Int, id)
      .query('DELETE FROM RenanLists WHERE ID = @id');
  }
}

module.exports = ListModel;