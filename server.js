const express =require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes/index');


const app = express();

const PORT = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./config/db');
app.use(router);



app.listen(PORT, ()=>{
    console.log(`Server instance running on http://localhost:${PORT}`);
})
