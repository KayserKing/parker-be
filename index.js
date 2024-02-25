// app.js
const express = require("express");
const app = express();
const PORT = 8080; 
const routes = require("./routes/index.js");

// Middleware to parse JSON requests
app.use(express.json());

// Use your routes
app.use("/", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
