const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  // articleID: {type:Number, required:true},
  title: { type: String, required: true },
  author: { type: String, required: true },
  snippet: { type: String, required: true },
  url: { type: String, required: true },
  saved: { type: Boolean,required: true, default: false}
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
