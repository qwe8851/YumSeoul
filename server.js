require('dotenv').config();

// DEPENDENCIES
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Cors for Ajax
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'yum-seoul-project/build')));

// Connection to MongoDB 
require('./config/mongo-db');

// ROUTERS
app.use('/todos', require('./routes/todos'));
app.use('/users', require('./routes/users'));
app.use('/stores', require('./routes/stores'));
app.use('/uploadfile', require('./routes/uploads'));

app.listen(port, () => console.log(`Server listening on port ${port}`));

// Serve React app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'yum-seoul-project/build/index.html'));
});

// Handle other routes with React Router (제일 하단 위치)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'yum-seoul-project/build/index.html'));
});
