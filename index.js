const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// routes
const emotionRoutes = require("./routes/emotion");
const mentorRoutes = require("./routes/mentor");

//running app
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
dotenv.config();

//middlewares
app.use("/api/emotion", emotionRoutes);
app.use("/api/mentor", mentorRoutes);

const server = app.listen(process.env.PORT, () => {
  console.log(`backend server is running at port ${process.env.PORT}`);
});

module.exports = server;
