const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookname: String,
    authorName: String,
    category: String,
    year: String
   }, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //books



// String, Number
// Boolean, Object/json, array