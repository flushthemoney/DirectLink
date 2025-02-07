const express = require("express");
require("dotenv").config();

const URL = process.env.URL;
const PORT = process.env.PORT;
const app = express();

app.use("/", (req, res) => {
  res.redirect(302, URL);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
