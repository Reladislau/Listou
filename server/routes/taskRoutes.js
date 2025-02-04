const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/taskController");

router.get("/test", (req, res) => { console.log("Rota de teste chamada"); res.send("API Rodando!")})
router.get("/lists/:listId/tasks", TaskController.getTasksByListId);
router.post("/lists/:listId/tasks", TaskController.createTask);
router.put("/tasks/:id", TaskController.updateTask);
router.put("/tasks/:id/complete", TaskController.completeTask);
router.delete("/tasks/:id", TaskController.deleteTask);

module.exports = router;