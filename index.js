require("dotenv").config();
const express = require("express");
const collection = require("./collection");
const phrase = require("./phrase");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Process gets
app.get("/collection", collection);
app.get("/phrase", phrase);

const port = process.env.port || "5000";
app.listen(port, () => {
  console.log("icd10 service online");
});
