const { Game, User } = require('../models/index')

class Controller {
    static showAllGames(req, res) {
        Game.findAll()
        .then((data) => {
            res.render('listGame', { data })
        })
        .catch(err => {
            res.send(err)
        })
    }
    static add(req, res) {
        Game.findAll()
        .then((data) => {
            res.render('addGames', { data })
        })
        .catch((err) => {
            res.send(err)
        })
    }
    static postData(req, res) {
        let { name, genre, release_year, rating } = req.body
        let newData = req.body
        Game.create(newData)
        .then(() => {
            res.redirect('/games')
        })  
    }
}

module.exports = Controller