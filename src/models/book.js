const {Schema, model} = require('mongoose')
const BookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    genre: String,
    author: {
        type: String,
        required: true
    }
}, { timestamps: true }
)

module.exports = model('Book', BookSchema)