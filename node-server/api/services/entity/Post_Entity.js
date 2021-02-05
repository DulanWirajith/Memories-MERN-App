const mongoose = require("mongoose");

const PostEntity = mongoose.Schema({
  post_name: {
    type: String,
    required: true,
    unique: true,
  },
  post_description: {
    type: String,
    required: true,
    unique: true,
  },
  creator: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
  like_count: {
    type: Number,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("testEntitiy", PostEntity);
