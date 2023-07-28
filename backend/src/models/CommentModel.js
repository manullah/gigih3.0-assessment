const mongoose = require("mongoose");

const schema = mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
  },
});

module.exports = mongoose.model("Comment", schema);
