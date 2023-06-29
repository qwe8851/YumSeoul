require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path'); 
const cors = require('cors');
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server listening on port ${port}`));

// ajax 소통을 위한 `npm install cors`
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'yum-seoul-project/build')));

// mongoDB connection
require('./config/mongo-db');






app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'yum-seoul-project/build/index.html'));
});

// react router 사용을 위한 (제일 아래 위치)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'yum-seoul-project/build/index.html'));
});