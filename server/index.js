import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import Connection from './Database/Connection.js';

const app = express();

dotenv.config();


//mongoose connection
Connection();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


//Server configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server start at port ${PORT}`);
});