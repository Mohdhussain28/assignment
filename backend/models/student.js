const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter product name"],
        trim: true
    },
    sub: {
        type: String,
        required: [true, "Please Enter product description"]
    },
    rollNo: {
        type: Number,
        required: [true, "Please Enter product price"],
        maxlength: [8, "price cannot exceed 8 character"]
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    department: {
        type: String,
        required: [true, "please Enter product Category"],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Student", studentSchema)