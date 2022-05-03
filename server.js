const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs").promises;
const path = require("path");

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "views/build")));

const port = process.env.PORT || 5000;
const pathfs = `${__dirname}/ds.js`;

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  fs.writeFile(pathfs, `${username}`);
  res.status(200).send({ username, password });
});

app.get("/login", (req, res) => {
  async function run() {
    const data = await fs.readFile(pathfs, "utf-8");
    res.status(200).json({ data });
  }
  run();
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
