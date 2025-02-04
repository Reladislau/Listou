const express = require('express');
const router = express.Router();
const ListController = require('../controllers/listController');

router.get('/', ListController.getAllLists);
router.get('/:id', ListController.getListById);
router.post('/', ListController.createList);
router.put('/:id', ListController.updateList);
router.delete('/:id', ListController.deleteList);

module.exports = router;