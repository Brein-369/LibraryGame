const express = require('express')
const router = express.Router()
const adminLogin = require('../middleware/adminLogin.js')
const Controller = require('../controllers/adminControllers.js')
// router.use(adminLogin)

router.get('/admin/users', adminLogin, Controller.adminAllUsers)
router.get('/admin/users/:id/edit',adminLogin, Controller.adminEditUser)
router.post('/admin/users/:id/edit',adminLogin, Controller.adminDoEditUser)
router.get('/admin/users/:id/delete',adminLogin, Controller.adminDeleteUser)
router.get('/admin/users/:id/seeGames',adminLogin, Controller.adminUserSeeGames)

router.get('/admin/games',adminLogin, Controller.adminAllGames)
router.get('/admin/games/:id/edit',adminLogin, Controller.adminEditGame)
router.post('/admin/games/:id/edit',adminLogin, Controller.adminDoEditGame)
router.get('/admin/games/:id/delete',adminLogin, Controller.adminDeleteGame)
router.get('/admin/games/:id/seeUsers',adminLogin, Controller.adminGameSeeUsers)

router.get('/adminLogout',adminLogin, Controller.adminLogout)

module.exports = router