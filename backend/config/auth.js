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

// const router = express.Router();

// const accessSecretKey = 'asdfghjkl';
// const refreshSecretKey = 'asdfghjkm';

// // User data (you would typically get this from your database)
// const user = {
//     id: 1,
//     username: 'exampleuser',
// };

// // Function to generate an access token
// function generateAccessToken(user) {
//     const payload = {
//         userId: user.id,
//         username: user.username,
//     };
//     return jwt.sign(payload, accessSecretKey, { expiresIn: '15m' }); // Adjust the expiration time as needed
// }

// // Function to generate a refresh token
// function generateRefreshToken(user) {
//     const payload = {
//         userId: user.id,
//         username: user.username,
//     };
//     return jwt.sign(payload, refreshSecretKey, { expiresIn: '7d' }); // Adjust the expiration time as needed
// }

// // Function to verify an access token
// function verifyAccessToken(token) {
//     try {
//         const payload = jwt.verify(token, accessSecretKey);
//         return payload;
//     } catch (error) {
//         return null; // Token is invalid
//     }
// }

// // Function to verify a refresh token
// function verifyRefreshToken(token) {
//     try {
//         const payload = jwt.verify(token, refreshSecretKey);
//         return payload;
//     } catch (error) {
//         return null; // Token is invalid
//     }
// }

// // Example usage:

// const accessToken = generateAccessToken(user);
// console.log('Generated Access Token:', accessToken);

// const refreshToken = generateRefreshToken(user);
// console.log('Generated Refresh Token:', refreshToken);

// const verifiedAccessUser = verifyAccessToken(accessToken);
// if (verifiedAccessUser) {
//     console.log('Verified Access User:', verifiedAccessUser);
// } else {
//     console.log('Access Token is invalid');
// }

// const verifiedRefreshUser = verifyRefreshToken(refreshToken);
// if (verifiedRefreshUser) {
//     console.log('Verified Refresh User:', verifiedRefreshUser);
// } else {
//     console.log('Refresh Token is invalid');
// }

