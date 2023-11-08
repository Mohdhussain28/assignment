const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/authModel.js');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(200).send('User created successfully');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).send('Authentication failed1');
        }

        await bcrypt.compare(password, user.password, (err, isPasswordValid) => {
            if (err || !isPasswordValid) {
                return res.status(401).send('Authentication failed2');
            }
        });

        const token = jwt.sign({ email }, process.env.ACCESS_SECRET_KEY, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ email }, process.env.REFRESH_SECRET_KEY, { expiresIn: '7d' });
        res.json({ token, refreshToken });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
