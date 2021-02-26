const express = require('express')
const session = require('express-session')
const app = express()
const port = 3000
const adminRoutes = require('./routes/adminRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const beforeLoginController = require('./controllers/beforeLoginController.js')



app.set('view engine', 'ejs')
app.use(session({
    resave :false,
    saveUninitialized :true,
    secret : "game library"
}))
app.use(express.urlencoded({extended:false}))


app.get('/',beforeLoginController.loginHome)
app.post('/', beforeLoginController.postLogin)
app.get('/register', beforeLoginController.register)
app.post('/register', beforeLoginController.doRegister)
app.get('/failed', beforeLoginController.failed)
app.use(adminRoutes)    
app.use(userRoutes)

app.listen(port,()=>{
    console.log(`Server is on at port ${port}`);
})