const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  value: {
    type: Number,
  },
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;
