const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/', controller.showProduct);
router.post('/', controller.insertProduct);
router.put('/:id', controller.updateProduct)
router.delete('/:id', controller.removeProduct)

module.exports = router;