require("dotenv").config();
const connectDB = require("./config/db");
const seedUsers = require("./utils/seedUsers");
const app = require("./app");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  await seedUsers();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();
