const mongoose = require("mongoose");
const validator = require("validator");
// const bycrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const crypto = require("crypto")

const authSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter Your Name"],
        maxlength: [30, "Name cannot  exceed 30 character"],
        minlength: [4, "Name should have more than 4 character"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be  greater than 8 charcters"],
        select: false,
    },

});

module.exports = mongoose.model("auth", authSchema)