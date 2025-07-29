const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser'); 

app.use(express.json());
app.use(cookieParser());
app.use('/auth', authRoutes);

module.exports = app;