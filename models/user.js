const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    title: String,
    first: String,
    last: String,
  },
  email: String,
  phone: String,
  location: {
    city: String,
    country: String,
  },
  picture: {
    thumbnail: String,
    medium: String,
  },
});

module.exports = mongoose.model("User", userSchema);
