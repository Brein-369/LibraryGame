const {Game,User,UserGame} = require('../models/index.js')

class Controller{
    static adminAllUsers(req, res){
        User.findAll({include : Game})
        .then((data)=>{
            res.render('users-admin', {data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static adminEditUser(req, res){
        User.findOne({
            where :{
                id : Number(req.params.id)
            }
        })
        .then((data)=>{
            res.render('users-admin-edit', {data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static adminDoEditUser(req,res){
        let obj = {
            username : req.body.username,
            password : req.body.password,
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            gender : req.body.gender,
            email : req.body.email
        }
        User.update(obj,{
            where : {
                id : Number(req.params.id)
            }
        })
        .then(data=>{
            res.redirect('/admin/users')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static adminDeleteUser(req,res){
        User.destroy({
            where :{
                id : Number(req.params.id)
            }
        })
        .then(data=>{
            res.redirect('/admin/users')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static adminUserSeeGames(req,res){
        User.findAll({
            include : Game,
            where : {
                id : req.params.id
            }
         })
        .then(theData=>{
            // res.send(theData)
            let data = theData[0]
            res.render('users-admin-seegame', {data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    //GAMES------------------------------------------------------------------------

    static adminAllGames(req,res){
        Game.findAll({include : User})
        .then((data)=>{
            res.render('games-admin', {data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static adminEditGame(req,res){
        Game.findOne({
            where :{
                id : Number(req.params.id)
            }
        })
        .then((data)=>{
            res.render('games-admin-edit', {data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static adminDoEditGame(req, res){
        let obj = {
            name : req.body.name,
            genre : req.body.genre,
            release_year : req.body.release_year,
            
        }
        Game.update(obj,{
            where : {
                id : Number(req.params.id)
            }
        })
        .then(data=>{
            res.redirect('/admin/games')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static adminDeleteGame(req,res){
        Game.destroy({
            where :{
                id : Number(req.params.id)
            }
        })
        .then(data=>{
            res.redirect('/admin/games')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static adminGameSeeUsers(req,res){
        Game.findAll({
            include : User,
            where : {
                id : req.params.id
            }
         })
        .then(theData=>{
            let data = theData[0]
            res.render('games-admin-seeuser', {data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static adminLogout(req,res){
        req.session.destroy()
        res.redirect('/')
    }
}

module.exports = Controller