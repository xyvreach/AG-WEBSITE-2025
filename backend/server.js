// Load environment variables from a .env file (we’ll create it next)
require("dotenv").config();

// Import Express and other tools
const express = require("express");
const cors = require("cors");

// Create an Express app
const app = express();

// Use middleware: allow cross-origin requests and JSON bodies
app.use(cors());
app.use(express.json());

// Create a simple route that says hello
app.get("/", (req, res) => {
  res.send("Hello, your backend is running!");
});

// Set the port from the .env file or use 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
