import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import Connection from './Database/Connection.js';
import postRouter from './routes/posts.js'

dotenv.config();

const app = express();

//Routes 
app.use('/posts',postRouter)




//mongoose connection
Connection();

//middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


//Server configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server start at port ${PORT}`);
});