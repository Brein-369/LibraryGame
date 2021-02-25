const express = require('express')
const router = express.Router()
const Controller = require('./controllers/gameController.js')

router.get('/', Controller.showAllGames)
router.get('/:id/listUsers', Controller.seeUsers)

module.exports = router