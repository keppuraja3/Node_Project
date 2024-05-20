const mongoose = require("mongoose")

const Comment = mongoose.model(
    "Comment",
    new mongoose.Schema({
        username: String, 
        Text: String, 
        CreatesAt: Date
    })
);

module.exports = Comment;