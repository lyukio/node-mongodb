const Book = require('../models/book')

exports.route_getJSON = async (req, res) => {
    const bookId = req.params.bookId
    // let filter = req.query.filter
    // filter = filter ? JSON.parse(filter) : {}
    if (!bookId) {
        const books = await Book.find({})
        if (books.length === 0) return res.status(400).json({"response": "There isn't books on DB"})
        return res.json(books)
    }
    const book = await Book.findById(bookId)
    if (!book) return res.status(400).json({"response": "error on get book"})
    return res.json(book)
}

exports.route_postJSON = async (req, res) => {
    const data = req.body
    const book = new Book(data)
    return res.json(await book.save())
}

exports.route_deleteJSON = async (req, res) => {
    const bookId = req.params.bookId
    return res.json(await Book.deleteOne({_id: bookId}))
}

