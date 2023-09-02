const express = require("express")
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())

app.use("/api/v1", require("./v1/routes"))


module.exports = app