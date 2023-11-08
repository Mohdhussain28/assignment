const jwt = require('jsonwebtoken');

exports.isAuthenticatedUser = (async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).send('Access denied. Token not provided.');
    }

    jwt.verify(token, "asdfghjkl", (err, decoded) => {
        if (err) {
            return res.status(403).send('Access denied. Invalid token.');
        }

        next();
    });
});


