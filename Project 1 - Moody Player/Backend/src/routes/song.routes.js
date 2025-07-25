const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadFile = require('../service/storage.service');

const upload = multer({ storage: multer.memoryStorage() });

router.post('/songs', upload.single('audio'), async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    const uploadedFileData = await uploadFile(req.file);
    console.log(uploadedFileData);
    res.status(201).json({
        message: "Song created successfully",
        song: req.body
    })
})

module.exports = router;