const DatabaseModel = require('../models');

const setPayload = req => ({
  urlThumbnail: req.body.urlThumbnail,
});

const Controller = {
  create: async (req, res) => {
    const payload = setPayload(req);

    try {
      const video = await DatabaseModel.Video.create(payload);

      res.status(201).json({
        data: video,
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const videos = await DatabaseModel.Video.find().populate('comments');

      res.status(200).json({
        data: videos,
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
      const video = await DatabaseModel.Video.findById(id);

      res.status(200).json({ data: video });
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
      const video = await DatabaseModel.Video.findByIdAndUpdate(id, payload, {
        new: true,
      });

      res.status(200).json({ data: video });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const video = await DatabaseModel.Video.findByIdAndDelete(id);

      res.status(200).json({ message: `${video._id} has been deleted` });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  },
};

module.exports = Controller;
