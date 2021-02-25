const express = require('express')
const router = express.Router()
const Controller = require('./controllers/userController.js')

router.get('/', Controller.showAllUsers)
router.get('/:id/listGames', Controller.userListGames)

module.exports = router