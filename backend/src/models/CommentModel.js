const mongoose = require('mongoose');

const schema = mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  datetime: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video',
    required: true,
  },
});

module.exports = mongoose.model('Comment', schema);
