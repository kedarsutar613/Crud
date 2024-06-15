// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const authController = require('../controllers/authController')

router.post('/items', itemController.createItem);
router.get('/items', itemController.getAllItems);
router.put('/items/:id', itemController.updateItem);
router.delete('/items/:id', itemController.deleteItem);

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/protected', authController.protected);

module.exports = router;
