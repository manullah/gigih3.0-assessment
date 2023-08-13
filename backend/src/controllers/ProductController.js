const DatabaseModel = require('../models');

const setPayload = req => ({
  linkProduct: req.body.linkProduct,
  title: req.body.title,
  price: req.body.price,
  video: req.body.video,
});

const Controller = {
  create: async (req, res) => {
    const payload = setPayload(req);

    try {
      const product = await DatabaseModel.Producut.create(payload);
      const video = await DatabaseModel.Video.findByIdAndUpdate(
        req.body.video,
        { $push: { products: product } },
        { new: true, useFindAndModify: false }
      );

      res.status(201).json(product);
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const products = await DatabaseModel.Producut.find();

      res.status(200).json({
        data: products,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  getDetail: async (req, res) => {
    const { id } = req.params;

    try {
      const product = await DatabaseModel.Producut.findById(id);

      res.status(200).json({ data: product });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const payload = setPayload(req);

    try {
      const product = await DatabaseModel.Producut.findByIdAndUpdate(
        id,
        payload,
        {
          new: true,
        }
      );
      console.log('product, ', product);

      res.status(200).json({ data: product });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const product = await DatabaseModel.Producut.findByIdAndDelete(id);

      res.status(200).json({ message: `${product._id} has been deleted` });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  },
};

module.exports = Controller;
