const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware');
const cors = require('cors');

const colors = require('colors');

const connectDB = require('./config/db');

connectDB( );

const app = express();
 
// add body parser for raw json
app.use(express.json());

//used to share resorce b/n backend and frontend
app.use(cors({
    origin: ["http://localhost:3000"]
}));

// for url encoding
app.use(express.urlencoded({extended: false}));

app.use('/api/employees', require('./routes/employeeRoutes'));

//use thes error hander thes will overwrit exprees error handeler
app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`)); 