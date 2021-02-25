const express = require('express')
const router = express.Router()
const Controller = require('../controllers/gameController')

router.get('/', Controller.showAllGames)
router.get('/add', Controller.add)
router.post('/add', Controller.postData)
// router.get('/:id/delete', Controller.delete)
// router.get('/:id/edit', Controller.edit)
// router.post('/:id/edit', Controller.postEdit)

// router.get('/:id/listUsers', Controller.seeUsers)

module.exports = router