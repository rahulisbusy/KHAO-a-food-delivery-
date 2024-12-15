import express from "express";
import mongodb from "../backend/db.js";
import userrouter from "./routes/Createuser.js";
import displayrouter from "./routes/Displaydata.js"; // Import the Displaydata router

const app = express();
app.use(express.json());
const port = 5000;

// Connect to MongoDB
mongodb();

// Middleware for CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
});

// Default route
app.get("/", (req, res) => res.send("Hello World!"));

// Use routers
app.use("/api", userrouter);
app.use("/api", displayrouter); // Add the new router here

// Start the server
app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
