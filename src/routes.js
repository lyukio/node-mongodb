const routes = require('express').Router()
const BookController = require('./controllers/book');

routes.get('/books/:bookId?', BookController.route_getJSON)
routes.post('/books', BookController.route_postJSON)
routes.delete('/books/:bookId', BookController.route_deleteJSON)

module.exports = routes