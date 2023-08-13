const mongoose = require('mongoose');

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  shop: {
    type: String,
    required: true,
  },
  urlThumbnail: {
    type: String,
    required: true,
  },
  urlVideo: {
    type: String,
    required: true,
  },
  viewed: {
    type: Number,
    required: true,
  },
  badge: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Badge',
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

module.exports = mongoose.model('Video', schema);
