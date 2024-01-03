const { ObjectId } = require('mongodb')
const bookModel = require('../Models/book.js')


// Create & Upload New Book

exports.addNewBook = async (req, res) => {
    try {
        const createBook = await bookModel.create(req.body)
        return res.send('Book Uploaded Successfully!')
    }
    catch (err) {
        return res.status(400).send({ message: err })
    }
}

// Get All Book

exports.getAllBooks = async (req, res) => {
    try {
        const Books = await bookModel.find()
        return res.json({ "message": "Done", data: Books })
    }
    catch (err) {
        return res.status(400).send({ message: err })
    }
}


// Patch & Update Book

exports.getOneBook = async (req, res) => {
    const id = req.params.id;
    const updateBookData = req.body;
    const filter = { _id: new ObjectId(id) };
    const updateDoc = {
        $set: {
            ...updateBookData
        },
    }
    const option = { upsert: true };
    const result = await bookModel.updateOne(filter, updateDoc, option);
    res.send(result);
}


// Delete Book

exports.deleteBook = async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result = await bookModel.findByIdAndDelete(filter)
    res.send(result)
}

// Find By Category

exports.getByCategory = async (req, res) => {
    let query = {};
    if (req.query?.category) {
        query = { category: req.query.category }
    }
    const result = await bookModel.find(query)
    res.send(result);
}


// Get a Single Book

exports.getSingleBook = async (req, res) => {
    const id = req.params.id
    const filter = { _id: new ObjectId(id) }
    const result = await bookModel.findOne(filter)
    res.send(result)
}