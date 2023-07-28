const DatabaseModel = require("../models");

const setPayload = (req) => ({
  text: req.body.text,
  datetime: String(new Date()),
});

const Controller = {
  create: async (req, res) => {
    const payload = setPayload(req);

    try {
      const comment = await DatabaseModel.Comment.create(payload);
      const result = await Promise.allSettled([
        DatabaseModel.User.findByIdAndUpdate(
          req.body.userId,
          {
            $push: { comments: comment },
          },
          { new: true, useFindAndModify: false }
        ),
        DatabaseModel.Video.findByIdAndUpdate(
          req.body.videoId,
          {
            $push: { comments: comment },
          },
          { new: true, useFindAndModify: false }
        ),
      ]);

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
        {
          new: true,
        }
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
};

module.exports = Controller;
