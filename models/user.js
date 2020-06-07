const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "customer",
    required: true,
  },
  // posts: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Post'
  //   }
  // ]
});

module.exports = mongoose.model("User", userSchema);
