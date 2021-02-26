const express = require('express')
const router = express.Router()
const isLogin = require('../middleware/isLogin.js')
const Controller = require('../controllers/userController.js')
// router.use(isLogin)

router.get('/users/:id', isLogin, Controller.listGame)
router.get('/users/:id/addgame', isLogin, Controller.userAddGame)
router.post('/users/:id/addgame', isLogin, Controller.userDoAddGame)
router.get('/users/:id/delete/:idGame', isLogin, Controller.userDeleteGame)
router.get('/logout', isLogin, Controller.logout)



module.exports = router


