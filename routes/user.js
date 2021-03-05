const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')



router.route('/')
    .get(userController.index)
    .post()
    .patch()
    .put()
    .delete()


// Export ra duoi dang module de import sang app.js no moi hieu duoc
module.exports = router