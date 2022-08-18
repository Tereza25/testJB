const Products = require('../models/productSchema');

const insertProduct = (req, res) => {
  const product = new Products(req.body);

  product.save((err) => {
    if (err) {
      res.status(500).send({ message: `${err.message} - falha ao cadastrar produto.` });
    } else {
      res.status(201).send(product.toJSON());
    }
  });
};

const removeProduct = (req, res) => {
  const { id } = req.params;

  Products.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(200).send({ message: 'Produto removido com sucesso' });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const updateProduct = (req, res) => {
  const { id } = req.params;

  Products.findByIdAndUpdate(id, { $set: req.body }, (err) => {
    if (!err) {
      res.status(200).send({ message: 'Produto atualizado com sucesso' });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const showProduct = (req, res) => {
  Products.find((err, Products) => {
    res.status(200).json(Products);
  });
};

module.exports = {
  insertProduct,
  removeProduct,
  updateProduct,
  showProduct,
};
