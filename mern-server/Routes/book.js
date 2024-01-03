const Router = require('express')
const bookController = require('../Controllers/bookController.js')
const router = Router.Router()


router.post('/upload-book', bookController.addNewBook)
router.get('/all-books', bookController.getAllBooks)
router.get('/book/:id', bookController.getSingleBook)
router.patch('/book/:id', bookController.getOneBook)
router.delete('/book/:id', bookController.deleteBook)
router.get("/books", bookController.getByCategory)



module.exports = router