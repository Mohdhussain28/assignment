const express = require("express")
const bodyParser = require("body-parser");
const { isAuthenticatedUser } = require("./config/auth");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())

app.use("/api/v1", require("./v1/userAuthentication"))

app.use(isAuthenticatedUser);

app.use("/api/v1", require("./v1/student"))

module.exports = app