const DatabaseModel = require('../models');

const Controller = {
  signin: async (req, res) => {
    const { username, password } = req.body;

    if (!(username && password)) {
      res.status(400).json({
        message: 'Invalid username & password!',
      });
    }

    try {
      const video = await DatabaseModel.User.find({
        username: username,
        password: password,
      });

      if (video.length === 0) {
        throw 'Failed find user!';
      }

      res.status(200).json({
        message: 'Success signin!',
        data: video[0],
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  },
};

module.exports = Controller;
