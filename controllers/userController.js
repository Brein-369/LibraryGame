const {Game,User,UserGame} = require('../models/index.js')
const {Op} = require('sequelize')

class Controller {

    static listGame(req, res){
        User.findAll({
            include : Game,
            where : {
                id : req.session.idUser
            }
        })
        .then((theData)=>{
            let data = theData[0]
            res.render('list-games',{data, id : req.session.idUser})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static userAddGame(req,res){
        Game.findAll()
        .then(data=>{
            res.render('add-game', {data, id : req.session.idUser})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static userDoAddGame(req,res){
        let obj = {
            UserId : Number(req.params.id),
            GameId : Number(req.body.gameId),
            comment : req.body.comment
        }
        UserGame.create(obj)
        .then(()=>{
            res.redirect(`/users/${req.session.idUser}`)
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static userDeleteGame(req,res){
        console.log(req.params.idGame,req.params.id);
        UserGame.destroy({
            where : {
                [Op.and]: [
                  {
                    GameId: {
                      [Op.eq]: Number(req.params.idGame)
                    }
                  },
                  {
                    UserId: {
                      [Op.eq]: req.session.idUser
                    }
                  }
                ]
            }
        })
        .then(()=>{
            res.redirect(`/users/${req.session.idUser}`)
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static logout(req, res){
        req.session.destroy()
        res.redirect('/')
    }
}

module.exports = Controller