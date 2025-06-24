const axios = require("axios");
const User = require("../models/user");

const seedUsers = async () => {
  const userCount = await User.countDocuments();
  if (userCount === 0) {
    const { data } = await axios.get("https://randomuser.me/api?results=30");
    await User.insertMany(data.results);
    console.log("Seeded 30 users to database.");
  }
};

module.exports = seedUsers;
