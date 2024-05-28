// imported express from 'express';
const express = require("express");

const routes = require("./routes");

// Created an instance of express
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
