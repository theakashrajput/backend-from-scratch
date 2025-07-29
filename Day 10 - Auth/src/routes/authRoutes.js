const express = require('express');
const userModel = require('../models/user.model');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Register             POST=> /register/ 
// Login                POST=> /login/ 
// User-Data[Protected] GET=> /user/  
// Logout User          GET=> /logout/  

router.post('/register', async (req, res) => {
    const { userName, password } = req.body;
    const isUserExist = await userModel.findOne({
        userName: userName
    });
    if (isUserExist) return res.status(409).json({
        message: "Username is already exist"
    });
    const user = await userModel.create({
        userName: userName, password: password
    });
    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRATE_KEY);
    res.cookie('token', token);
    res.status(200).json({
        message: "Welcome registered successfully",
        user
    });
});

router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    const user = await userModel.findOne({
        userName: userName
    });
    if (!user) return res.status(404).json({
        message: "User not found [Invalid Username]"
    });
    const isPasswordMatch = user.password == password;
    if (!isPasswordMatch) return res.status(401).json({
        message: "Invalid password"
    });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRATE_KEY);
    res.cookie('token', token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 Days
    });
    res.json({
        message: "User loggedin successfully"
    });
});

router.get('/user', async (req, res) => {
    try {
        const { token } = req.cookies;
        if (!token) res.status(201).json({
            message: "Unauthorized token not found"
        });
        const decoded = jwt.verify(token, process.env.JWT_SECRATE_KEY);
        const user = await userModel.findById(decoded.id).select("userName -_id").lean();
        res.json({
            message: "User data fetched successfully",
            user
        });
    } catch (err) {
        res.status(401).json({
            Error: err.message
        });
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).json({
        message: "Use logout successfully"
    });
});

module.exports = router;