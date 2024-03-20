// routes/yourRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.js');

// Define routes
router.get('/api/', controller.findAllData);
router.post('/api/create', controller.createData);
router.put('/api/update/:id', controller.updateData);
router.delete('/api/delete/:id', controller.deleteData);



module.exports = router;
