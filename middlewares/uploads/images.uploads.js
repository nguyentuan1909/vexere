const mkdirp = require('mkdirp');
const multer = require('multer');

const uploadImage = (folder, name) => {
    const folderPath = `./public/images/${folder}`;
    mkdirp.sync(folderPath);
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, folderPath);
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname);
        }
    });

    const upload = multer({
        storage,
        fileFilter: function (req, file, cb) {
            const allowExFile = ['.jpg', '.png']
            const fileEx = file.originalname.slice(-4).toLowerCase();
            if (allowExFile.includes(fileEx)) {
                cb(null, true);
            } else {
                cb(new Error('File extension is not allow to upload.'));
            }
        }
    }).single(name);

    return (req, res, next) => {
        upload(req, res, function (err) {
            if (err) {
                res.status(406).send(err.message);
            } else {
                next();
            }

        });

    }

};

module.exports = {
    uploadImage,
}