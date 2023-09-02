const express = require("express");
const StudentDB = require("../models/student");
const router = express.Router();

router.post("/create", async (req, res) => {
    const { name, sub, rollNo, department } = req.body;

    try {
        const data = await StudentDB.create({
            name,
            sub,
            rollNo,
            department
        })
        res.status(201).json({ mesage: "created", data })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }

})

router.get("/:id", async (req, res) => {
    const id = req.params.id;

    if (!id || id.length == 0) {
        res.status(400).send("please enter the student id")
    }

    try {
        const data = await StudentDB.findById(id)
        if (!data) {
            res.status(404).send("Student is not found in database")
        }
        res.status(200).send({ success: true, data })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

router.put("/:id", async (req, res) => {
    const id = req.params.id
    if (!id || id.length == 0) {
        res.status(400).send("please enter the student id")
    }
    try {
        const data = await StudentDB.findById(id)
        if (!data) {
            res.status(404).send({ message: "student is not found" })
        }
        const result = await StudentDB.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        return res.status(200).json({
            success: true,
            result,
            message: "Updated"
        })
    } catch (error) {
        res.status(500).send({ message: error.message })

    }

})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    if (!id || id.length == 0) {
        res.status(400).send("please enter the student id")
    }
    try {
        const data = await StudentDB.findById(id)
        if (!data) {
            res.status(404).send({ message: "student is not found" })
        }
        await StudentDB.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "deleted"
        })
    } catch (error) {
        res.status(500).send({ message: error.message })

    }

})



module.exports = router;