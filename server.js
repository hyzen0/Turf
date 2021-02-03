const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database

const app = express();

// Body parser
app.use(express.json());

// Enable cors
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", require("./routes/stores"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
