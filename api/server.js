const express = require("express");
const accountRouter = require("./accounts/accounts-router");
const server = express();

server.use("/api/accounts", accountRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "Server is running" });
});

module.exports = server;
