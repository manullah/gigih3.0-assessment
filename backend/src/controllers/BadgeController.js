const DatabaseModel = require('../models');

const setPayload = req => ({
  name: req.body.name,
});

const Controller = {
  create: async (req, res) => {
    const payload = setPayload(req);

    try {
      const badge = await DatabaseModel.Badge.create(payload);

      res.status(201).json({
        data: badge,
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const badges = await DatabaseModel.Badge.find().populate(['videos']);

      res.status(200).json({
        data: badges,
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
      const badge = await DatabaseModel.Badge.findById(id);

      res.status(200).json({ data: badge });
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
      const badge = await DatabaseModel.Badge.findByIdAndUpdate(id, payload, {
        new: true,
      });

      res.status(200).json({ data: badge });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const badge = await DatabaseModel.Badge.findByIdAndDelete(id);

      res.status(200).json({ message: `${badge._id} has been deleted` });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  },
};

module.exports = Controller;
