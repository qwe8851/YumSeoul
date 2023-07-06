require('dotenv').config({ path: '.env.local' });

const path = require('path');
const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');

// AWS S3 settings
const s3Client = new S3Client({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
});

const upload = multer({
    storage: multerS3({
        s3: s3Client,
        bucket: process.env.BUCKET_NAME,
        // acl: 'public-read',
        key: function (req, file, cb) {
            cb(null, `original/${Date.now()}${path.basename(file.originalname)}`);
        },
        contentType: multerS3.AUTO_CONTENT_TYPE, // Content-Type을 자동으로 감지하도록 설정
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = upload;
