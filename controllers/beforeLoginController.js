const {Game,User,UserGame} = require('../models/index.js')
const {Op} = require('sequelize')
const Helper = require('../helpers')

class Controller{

    static loginHome(req,res){
        res.render('login-home')
    }
    static register(req, res){
        res.render('register')
    }

    static doRegister(req, res){
        console.log(req.body)
        let obj = {
            username : req.body.username,
            password : req.body.password,
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            gender : req.body.gender,
            email : req.body.email
        }
        User.create(obj)
        .then(()=>{
            res.render('success-create-account')
        })
        .catch(err=>{
            res.send(Helper.errorHandler(err))
        })
    }

    static postLogin(req,res){
        console.log(req.body);
        User.findAll({
            where :{
                [Op.and]: [
                    {
                      username: {
                        [Op.eq]: req.body.username
                      }
                    },
                    {
                      password: {
                        [Op.eq]: req.body.password
                      }
                    }
                ]
            }
        })
        .then(data=>{
            req.session.idUser = data[0].id
            req.session.status = data[0].status
            console.log(req.session);
            if(req.session.status === "user") res.redirect(`/users/${req.session.idUser}`)
            else res.redirect('/admin/users')
            
            
        })
        .catch(err=>{
            res.redirect('/')
        })
        
    }

    static failed(req,res){
        res.render("failedLogin")
    }

}

module.exports = Controller