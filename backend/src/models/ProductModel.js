const mongoose = require("mongoose");

const schema = mongoose.Schema({
  linkProduct: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  videoId: {
    required: true,
    type: String,
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
  },
});

module.exports = mongoose.model("Product", schema);
