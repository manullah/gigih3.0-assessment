const dayjs = require('dayjs');
const DatabaseModel = require('../models');

const setPayload = req => ({
  comment: req.body.comment,
  user: req.body.user,
  video: req.body.video,
  datetime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
});

module.exports = io => ({
  create: async (req, res) => {
    const payload = setPayload(req);

    try {
      const comment = await DatabaseModel.Comment.create(payload);
      const result = await Promise.allSettled([
        DatabaseModel.User.findByIdAndUpdate(
          req.body.user,
          { $push: { comments: comment } },
          { new: true, useFindAndModify: false }
        ),
        DatabaseModel.Video.findByIdAndUpdate(
          req.body.video,
          { $push: { comments: comment } },
          { new: true, useFindAndModify: false }
        ),
      ]);

      io.emit('comment', comment);

      res.status(201).json({
        data: comment,
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const comments = await DatabaseModel.Comment.find();

      res.status(200).json({
        data: comments,
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
      const comment = await DatabaseModel.Comment.findById(id);

      res.status(200).json({ data: comment });
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
      const comment = await DatabaseModel.Comment.findByIdAndUpdate(
        id,
        payload,
        { new: true }
      );

      res.status(200).json({ data: comment });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const comment = await DatabaseModel.Comment.findByIdAndDelete(id);

      res.status(200).json({ message: `${comment._id} has been deleted` });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  },
});
