var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

const uploadFile = (file) => {
    return new Promise((resolve, reject) => {
        imagekit.upload({
            file: file.buffer,
            fileName: file.originalname
        }, (err, result) => {
            if (err) return reject(err)
            else return resolve(result)
        })
    })
}

module.exports = uploadFile;