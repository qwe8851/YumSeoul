require('dotenv').config({ path: '.env.local' });

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

// AWS S3 settings
aws.config.update({
    region: process.env.REGION,
    apiVersion: 'latest',
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY
    }
});

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.BUCKET_NAME,
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            cb(null, `${Date.now()}_${file.originalname}`);
        },
    }),
});

module.exports = upload;