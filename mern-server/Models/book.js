const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookTitle: String,
    authorName: String,
    imageURL: String,
    category: String,
    bookdescription: String,
    bookPDFURL: String
})

module.exports = mongoose.model('Books', bookSchema)