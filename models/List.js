const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    type:{type:String},
    genre: { type: String },
    content: { type: Array}//bcz we have ten movies in a list
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", ListSchema);