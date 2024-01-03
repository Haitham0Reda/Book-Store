const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const bookRouter = require('./Routes/book.js')



dotenv.config()
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Welcome to the API")
})

const url = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@myapp.4ajlkuo.mongodb.net/BookInventory?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(url)
        console.log('Connected to Mongo DB')
    }
    catch (err) {
        console.log("error while connect to mongo db " + err);
    }
}

connectDB()

app.use('/', bookRouter)

app.listen(4040, () => {
    console.log('Server is running on port 4040');
});