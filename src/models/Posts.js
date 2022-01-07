const mongoose = require('../db/db');

const schema =  mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: { 
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default:  Date.now()
      }
});

const Post = mongoose.model('Post', schema);

module.exports = Post;
